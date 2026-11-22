---
title: "systemd-homed First Impressions"
date: 2025-02-23T13:26:29+01:00
tags:
  - linux
  - nixos
  - systemd
  - btrfs
  - bcachefs
---

One of the privileges of starting my new job is that I am issued a laptop with the freedom to install any distro I like. Usually, this process is a no-brainer --- I pull out my trusty [NixOS](https://nixos.org) boot stick, format the drive as bcachefs, install, and `git clone` my [configuration](https://github.com/j0hax/nixos-configurations), with which I rebuild the system to my preferences. Easy, right?

Now, a company laptop isn't the same as my other, single-user laptops:
- I want to **encrypt** my data on the device,
- while also keeping it as portable as possible (for backups, potential dual-booting, etc.),
- and it would also be nice to have separate *work* and *personal* user accounts.

This is a use case which [systemd-homed](https://systemd.io/HOME_DIRECTORY/) aims to solve: it is "naturally portable" and encapsulates user data in an encrypted LUKS2 volume by default.

It is also fairly easy to use: most common operations (add/modify/delete user records) can be performed with the `homectl(1)` command.

## Shaky starts

Right off the bat, I ran into errors, and learned the hard way that `homectl` only works with a subset of filesystems. Bcachefs/homed support is being considered both by the [systemd](https://github.com/systemd/systemd/issues/31038) and [bcachefs](https://www.reddit.com/r/bcachefs/comments/19ffh86/comment/kjm78kc/) developers, so things may get better in the future. As such, I decided to use btrfs instead for now.[^btrfs]

After installing NixOS on btrfs, I finally issued the command
```console
# homectl create --luks-discard=on --shell=/run/current-system/sw/bin/bash johannes
```
in the post-install chroot to create my user account. Note that my experience was a bit unpolished at that moment:
- without `--luks-discard=on`, my system would complain that the decrypted and freshly mounted home filesystem was too small.[^discard]
- without `--shell=...`, homectl defaults to `/bin/bash`, which doesn't officially exist on NixOS.

## Integration

After rebooting, I was greeted by the GDM login screen with my user as an option, and most GUI usage is identical to a traditional Linux desktop. I even have a regular home directory mounted at `/home/johannes`.

What stands out is that I no longer have any entries in `/etc/passwd` or `/etc/shadow`. My user data can be viewed either with `getent passwd johannes`, similar to how network log-ons work, or, of course, with `homectl inspect johannes`.

I was then able to add my user to the `wheel` group (needed for sudo) using
```console
# homectl update --member-of=wheel johannes
```
and set my displayed name (a.k.a. GECOS) similarly with `--real-name`.

## The Verdict

systemd-homed is a noble cause. While I'm not a fan of the "let's just add another layer of abstraction" mentality, I see it as a particularly useful alternative to full-disk encryption when sharing a computer between multiple people or accounts.

**However,** I don't think it's ready yet. Not just because I ran into bumps, but because many aspects are admittedly [still a work in progress](https://youtu.be/3e3IhBBU0JY?t=243). Just as with bcachefs, I'm still quite cautious about data loss, as [unclean unmounting](https://wiki.archlinux.org/title/Systemd-homed#Home_directory_in_a_dirty_state) can cause a headache.

I will continue using systemd-homed in the hopes that it will get more polished over time, just as the GNOME desktop has, and I definitely think it has potential to become a headline feature in, for example, a future Fedora release.

[^btrfs]: an *even more* experimental filesystem *probably* shouldn't be used on a work laptop anyway.
[^discard]: Fortunately, [this post](https://bbs.archlinux.org/viewtopic.php?pid=1922435#p1922435) on the Arch Linux forums suggested a quick fix.
