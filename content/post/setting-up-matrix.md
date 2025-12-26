---
title: "Setting up a Matrix Homeserver on NixOS (Easy Edition)"
date: 2025-08-15T22:50:57+02:00
summary: "How I set up my own Homeserver"
---

Recently, a client suggested that I contact him via [Matrix](https://matrix.org/), a protocol with the goal of secure, decentralized communication. As my employer _currently_ does not have host a Matrix Homeserver, I took the liberty of trying to set up my own.

Now, I'm no stranger to Matrix. My university set up a demo server around the time of the COVID pandemic. At the time, Matrix and its reference implementation server, [Synapse](https://github.com/element-hq/synapse), was a buggy, slow mess. The goal of achieving [one common messenger protocol for everyone](https://xkcd.com/927/) is a noble one, but also nontrivial to implement. Over the years, Matrix became more usable on my university's server, culminating with a [2.0](https://matrix.org/blog/2024/10/29/matrix-2.0-is-here/) release towards the end of my studies.

## NixOS and Caddy make things easy

**I love [Caddy](https://caddyserver.com/)!** Really. It is my go-to reverse proxy _that just works._ For most of my self-hosted applications, including Matrix, I can just declare a virtual host and pass the `reverse_proxy` directive. SSL, HTTP/3, websockets, everything is _just there._

NixOS again simplifies the installation process, because I just declare the way I want things configured. This means that I can trivially connect Caddy to a Matrix homeserver. In this case, I chose [tuwunel](https://github.com/matrix-construct/tuwunel), which, despite the questionable name, seems to strike the best compromise between resource usage, stability and features.

All I had to do to get a basic configuration working was enable the services and supply configuration.

### Caddy Configuration

The first part of my configuration involves setting up [delegation](https://element-hq.github.io/synapse/latest/delegate.html), i.e. using a (root) domain for chatting `@user:example.com` with a different address, such as `matrix.example.com`, processing the requests. This is exactly what I did. redirecting any non-delegation requests to my personal home page.

```nix
{ config, pkgs, ... }:
let
  domain = config.networking.domain;
  matrixDomain = "matrix.${config.networking.domain}";
  port = toString config.services.matrix-tuwunel.settings.global.port;
in
{
  imports = [ ./caddy.nix ];

  services.caddy.virtualHosts = {
    ${domain} = {
      extraConfig = ''
        # Handle requests for delegation
        handle /.well-known/* {
          header /.well-known/matrix/* Content-Type application/json
          header /.well-known/matrix/* Access-Control-Allow-Origin *
          respond /.well-known/matrix/server `{"m.server": "${matrixDomain}:443"}`
          respond /.well-known/matrix/client `{"m.homeserver":{"base_url":"https://${matrixDomain}"}}`
        }

        # Redirect anything else to homepage.
        handle {
          redir https://johannes-arnold.de{uri}
        }
      '';
    };

    ${matrixDomain} = {
      extraConfig = ''
        reverse_proxy /_matrix/* 127.0.0.1:${port}
        reverse_proxy /_synapse/client/* 127.0.0.1${port}

        encode zstd gzip
        header X-Robots-Tag "noindex, nofollow"
        cache

        # Serve Element Web Interface
        root * ${pkgs.element-web}
        file_server
      '';
    };

  };
}
```

Note that the `matrix.example.com` also serves [Element](https://element.io/), a fully-featured Matrix chat client which can be served from a static page.

Now, I just need to set up my server of choice, which, in the case of Tuwunel, is remarkably simple as well:

```nix
services.matrix-tuwunel = {
  enable = true;
  settings = {
    global = {
      server_name = domain;
      allow_registration = true;
      trusted_servers = [
        "matrix.org"
        "matrix.uni-hannover.de"
      ];
      well_known = {
        client = "https://${matrixDomain}";
        server = "${matrixDomain}:443";
      };
    };
  };
};
```

Now, all that one needs to do to access the server is enable a registration token, navigate to their Matrix domain, and create an account.
