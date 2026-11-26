---
# This post was written with the assistance of LLMs.
title: "Secure Per-Host VPN Certificates with a Split PKI (OpenVPN, OpenBao and Salt)"
date: 2026-11-26T10:00:00+01:00
summary: "How I gave every managed Linux client its own OpenVPN certificate, signed automatically by OpenBao, while the server proves itself with Let's Encrypt"
tags:
  - vpn
  - openvpn
  - pki
  - openbao
  - salt
  - security
  - linux
---

As part of a Linux client management deployment I've been working on, every managed desktop needs an always-on VPN tunnel back to the management server. It is how Salt reaches the machine, so losing the tunnel means losing the machine. The original setup used one shared client certificate (`CN=client`) baked into the installer image, which works, but it means the server cannot tell hosts apart, and `duplicate-cn` has to stay on.

I wanted one certificate per host, issued automatically, with the private key never leaving the machine.

To be clear: this is not a method I invented. Split PKIs and automated certificate issuance are routinely implemented in exactly this kind of managed-fleet setup, and this particular deployment is a project I did at work. I'm writing it up because I think it's cool and because the details — the event flow, the role hardening, the TPM plumbing — were fiddly enough to be worth recording. This post describes the setup that came out of it: a split PKI where the server proves itself with a public Let's Encrypt certificate, and clients authenticate with certificates from an internal CA that only OpenBao can sign with.

## The trust model

A VPN connection has two directions that need trust, and they don't need the same CA:

| Direction | Certificate | Issued by | Verified by |
|---|---|---|---|
| Server → client | `CN=<vpn-domain>` (full chain) | Let's Encrypt | Clients, against the OS trust store + pinned name |
| Client → server | Per host (CN = Salt minion ID), or the shared install cert | Internal CA | OpenVPN server, against its `ca.crt` |

The clients already trust the public roots that ship with the operating system, so the server can use Let's Encrypt and no CA file has to be shipped to clients at all. On the client side, the profile pins the server name, because trusting the system bundle alone would accept *any* publicly issued server certificate:

```
ca /etc/ssl/certs/ca-certificates.crt   # path differs per OS, see below
verify-x509-name <vpn-domain> name
remote-cert-tls server
```

The internal CA, on the other hand, is only installed on the server (`ca.crt`) and in OpenBao. It is never put into a client's trust store, so it cannot be used to impersonate a server. That separation is the whole point: a public CA proves "this is the real server", the internal CA proves "this is a managed host".

## Issuing certificates with OpenBao

The management server runs [OpenBao](https://openbao.org/) (the open-source Vault fork) in a container on localhost, next to the Salt master. The internal CA is imported into its PKI engine, so the CA key lives in OpenBao and not in a config file on disk.

The flow for a new client is:

1. The client generates a key (in the TPM or as a file) and a CSR, and sends the CSR as a Salt event: `sudo salt-call event.send vpn/ca/csr '{"csr": "..."}'`.
2. A reactor on the master catches the event and calls a custom runner, `cert-request.getcert`.
3. The runner authenticates to OpenBao with AppRole and signs the CSR through a dedicated role.
4. The signed certificate is stored in a `file_tree` pillar and the client picks it up as `vpn:cert`.

The signing role is deliberately tight. Instead of `sign-verbatim` (which signs whatever the CSR asks for, including the name), there is a `vpn-client` role:

```
bao write pki/roles/vpn-client \
    allow_any_name=true enforce_hostnames=false \
    use_csr_common_name=false use_csr_sans=false \
    server_flag=false client_flag=true ext_key_usage=ClientAuth \
    max_ttl=8760h
```

The runner passes the *authenticated* minion ID as the name, so a host can only ever obtain a certificate for itself:

```python
payload = {"csr": csr, "common_name": minion, "alt_names": minion, "ttl": "8760h"}
# POST {vault}/v1/pki/sign/vpn-client
```

The AppRole policy allows nothing but `pki/sign/vpn-client`, and the runner rejects minion IDs that aren't plain names before they are used in a file path. A compromised client therefore can't get a certificate for another host, and — because `server_flag=false` — can't get a certificate that other clients would accept as the server either.

## Key storage: TPM 2.0 or file

Whether the key lives in the TPM is a per-host Foreman parameter (`use_tpm`, default true).

With a TPM, the key is created inside the TPM via `tpm2-pkcs11` and is non-exportable. OpenVPN then uses it through PKCS#11, and gets the PIN over its management socket:

```
pkcs11-providers /usr/lib64/pkcs11/libtpm2_pkcs11.so
pkcs11-id '<serialized id from the token>'
management /run/openvpn-lcm-vpn.sock unix
management-query-passwords
management-hold
```

Without a TPM, the key and certificate are plain files (`host.key` / `host.crt` in `/etc/openvpn/certs/`).

Both paths renew automatically: a systemd timer checks the expiry and re-requests a certificate through the `vpn/ca/renew` event when less than 90 days remain.

## Never losing the tunnel

The trickiest part was the transition. A freshly installed machine only has the shared install certificate from the ISO, and it needs the VPN to reach the master that issues its own certificate. Cutting the tunnel while waiting would deadlock the rollout.

So the OpenVPN client profile is a Jinja template that picks whichever credential exists:

1. the TPM key, once the token's serialized ID is known (written as a grain),
2. `host.crt`/`host.key`, once both files exist,
3. otherwise the shared install certificate embedded in the profile.

A changed profile restarts the tunnel with a 30-second delay, so the highstate that deploys it doesn't cut its own connection. The shared certificate stays trusted on the server (hence `duplicate-cn`) until no installer uses it anymore.

## Lessons learned

- **`verify-x509-name` is not optional.** With `ca` pointing at the system bundle, every public CA is accepted; the name check is what ties the server to the domain.
- **The bundle path is not portable.** `/etc/ssl/certs/ca-certificates.crt` exists on Debian/Ubuntu, but Leap uses `/etc/ssl/ca-bundle.pem` and RHEL-family `/etc/pki/tls/certs/ca-bundle.crt`. A wrong path simply fails to start OpenVPN — on a client whose only route to the master is that tunnel.
- **Don't trust the CSR's name.** Taking CN/SAN from the authenticated minion ID instead of the CSR makes the certificate name mean something (per-host logs, and eventually revocation and per-host rules).
- **Let's Encrypt certificates last 90 days.** Nothing renews the VPN server certificate automatically yet; that's the next thing on my list, along with a CRL so a lost laptop can actually be revoked.

The result: every host connects with its own certificate, the server presents a publicly verifiable identity, and the whole thing is automated end to end — request, sign, deliver, install, renew.
