---
title: "Fixing Silverblue Permissions"
date: 2023-09-09T12:51:09+02:00
summary: "Fixing an annoying issue with logrotate"
---

> error: stat of /var/log/boot.log failed: Permission denied

I came across an interesting error that persisted across Fedora Silverblue installations from around February 2023. Whenever I checked the health of an affected system with `systemctl status`, I would notice that `logrotate` had failed. While logrotate is useful for systems with long uptimes or high log volume, such as servers, the affected boxes were sporadically used desktops. Nonetheless, this really bothered the perfectionist in me. Here's a log excerpt for the logrotate unit from an affected system:
```console
Starting logrotate.service - Rotate log files...
error: stat of /var/log/boot.log failed: Permission denied
logrotate.service: Main process exited, code=exited, status=1/FAILURE
logrotate.service: Failed with result 'exit-code'.
Failed to start logrotate.service - Rotate log files.
```

## The Solution
I initially assumed that the file `/var/log/boot.log` had incorrect permissions set at install time, causing logrotate to fail early after boot. A bit of Google-Fu (as always), however, led me to suspect SELinux was involved. This is where the `restorecon` command comes in handy:
```console
[johannes@clay ~]$ sudo restorecon -r -v /var/log
[sudo] password for johannes: 
Relabeled /var/log/fsck_hfs.log from system_u:object_r:var_t:s0 to system_u:object_r:var_log_t:s0
Relabeled /var/log/boot.log from system_u:object_r:var_t:s0 to system_u:object_r:plymouthd_var_log_t:s0
```

So running this command indeed "fixed" both the boot log we suspected and another one as well.[^hfs] After re-starting `logrotate.service`, the error was gone.
[^hfs]: fsck_hfs.log probably is a remnant of the original macOS partition that was wiped during the installation of Silverblue.

## A Word on "Immutability"
Immutable Linux distributions like Fedora Silverblue and NixOS have **many** perks, and I recommend them both to those who avoid the terminal where possible and to seasoned enthusiasts. However, discrepancies like this are proof that, for the time being, "immutable" doesn't mean 100% untouchable.
