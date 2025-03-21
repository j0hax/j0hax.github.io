---
title: "On using `uutils`"
date: 2025-03-21T13:23:56+01:00
tags:
  - linux
categories:
  - gnu
---

Beginning with commit [879f3af](https://github.com/j0hax/nixos-configurations/commit/879f3af878e61fed632bd5520f6b3eeee33afc28) in January 2025, I have been using [uutils](https://uutils.github.io/) on my NixOS machines.

Uutils is a Rust rewrite of the [GNU coreutils](https://www.gnu.org/software/coreutils/coreutils.html) and the experience has been nothing but wonderful. **I've encountered zero bugs, and everything is snappy.[^fast]**

## How to enable it?

For NixOS, the process is quite easy. You can simply add the *non-prefixed* versions to your system's packages. These binaries are then used in place of the GNU coreutils:

```nix
environment.systemPackages = with pkgs; [
    uutils-coreutils-noprefix
    uutils-diffutils
    uutils-findutils
];
```

Other Linux distributions should consider trying [oxidizr](https://github.com/jnsgruk/oxidizr).

[^fast]: Generally, you won't notice a speed difference as most disk I/O is sequential.
