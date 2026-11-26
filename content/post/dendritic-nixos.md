---
# This post was written with the assistance of LLMs.
title: "Five Years of NixOS, Refactored with Dendritic Patterns"
date: 2026-09-05T14:00:00+02:00
summary: "After five years and five thousand commits in /etc/nixos, I restructured my configuration around the dendritic pattern — here's what changed and why"
tags:
  - nixos
  - linux
  - configuration
---

My NixOS configuration has lived in git since May 3, 2021 — the "Initial commit" of `/etc/nixos`, a flake from day one. As of today that is 5,039 commits across five machines: `kirby` (my ThinkPad X230), `clay` (a MacBook Pro), `aptenodytes` (my work laptop), `kneippweg` (the Mac mini home server), and `skylab` (a Hetzner ARM VPS).[^dabble] Over five years the config grew organically, and today I finally did something about its structure: commit `afb1e173` ("Refactor with dendritic patterns") rewrote 38 files (+1911/−1473) to put every feature behind an option.

## What the config looked like

Each host in `flake.nix` carried its own list of module files:

```nix
skylab = {
  system = "aarch64-linux";
  modules = [
    ./modules/user/johannes
    ./modules/server/auth.nix
    ./modules/server/cryptpad.nix
    ./modules/server/glance.nix
    ./modules/server/jellyfin.nix
    ./modules/server/matrix.nix
    ./modules/server/wireguard.nix
    ./modules/server/xmpp.nix
  ];
};
```

Adding a service to a host meant appending another `./modules/server/...` line, and forgetting it meant the service simply did not exist there. The five import lists had quietly drifted apart over the years.

## The dendritic refactor

Following the [dendritic pattern](https://github.com/mightyiam/dendritic), every feature module now declares its own options under a `jka.*` namespace and gates its config with `lib.mkIf`:

```nix
# modules/desktop/cosmic.nix (abridged)
options.jka.desktop.cosmic = {
  enable = lib.mkEnableOption "COSMIC desktop environment";
};

config = lib.mkIf (cfg.enable && cfg.cosmic.enable) {
  services.desktopManager.cosmic.enable = true;
  # ...
};
```

`flake.nix` now imports whole module trees (`./modules/system`, `./modules/desktop`, `./modules/server`, `./modules/work`, ...) for *every* host via `commonModules`, and each tree's new `default.nix` pulls in its feature modules. The hosts themselves shrank to pure toggles:

```nix
skylab = {
  system = "aarch64-linux";
  modules = [
    {
      jka.services = {
        auth.enable = true;
        cryptpad.enable = true;
        glance.enable = true;
        jellyfin.enable = true;
        matrix.enable = true;
        wireguard.enable = true;
        xmpp.enable = true;
      };
    }
  ];
};
```

## Why dendritic

Nix code is partially self-documenting: options with their defaults read like documentation. The old structure buried that behind import lists --- you had to know which file to open before you could see what it did. The rewrite pays off most where features compose: my HTTP-exposed services all reuse the same Caddy setup, so each one just sets `jka.services.caddy.enable = lib.mkDefault true;` and adds a `services.caddy.virtualHosts` entry, getting TLS certificates and reverse-proxying for free. And it guards me from mistakes: since every module is imported on every host, a renamed or broken option fails `nix flake check` on all five machines at once, and there is no per-host import list left to forget a line in.

- **Options exist everywhere.** Because every module is imported on every host, `jka.services.matrix.enable` is a valid option on all five machines. CI runs `nix flake check --no-build`, which evaluates every host, so a broken option fails the build long before it reaches a machine.
- **Enabling a feature is one line.** No import lists to keep in sync; a host is now just a declarative answer to "what does this machine run?"
- **Modules are self-contained.** Adding a service means creating `modules/server/<name>.nix` and one entry in `modules/server/default.nix` --- no host edits required.
- **Overrides still work.** Shared modules set their defaults with `lib.mkDefault`, and the per-host `modules` attrset is imported last, so `hosts/<name>/configuration.nix` can always win.

## A word on tooling

The commit message credits OpenCode / Claude 4.8 --- a refactor this mechanical (wrap, gate, repeat across 38 files) is exactly what an LLM is good at, and the CI suite (`nixfmt`, `nix flake check`, full host builds) verified the result end to end. I still reviewed every hunk; the structure was my design, the typing was not.

Five years in, the config finally reads like documentation of what each machine *is* rather than a pile of imports: `grep -r "enable = true" hosts/` now tells me exactly what runs where.

[^dabble]: I had dabbled with NixOS years earlier while distrohopping, but May 2021 is when I started managing my configuration properly --- in git, declaratively --- and never looked back.
