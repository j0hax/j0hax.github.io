---
title: "WPA3 Troubles"
date: 2021-06-29
summary: "Addressing a WPA3 bug with OpenWrt and Linux"
categories:
- networking
tags:
- openwrt
- wpa3
- 802.11w
- n6205
- iwlwifi
- linux
---

After a clean install of OpenWrt 21.02.0-rc3 and configuring WPA3, I expected some devices to have trouble reconnecting to the fresh Wi-Fi network—not least my trusted ThinkPad X230. Of course, the problem was quickly diagnosed: the culprit turned out to be WPA3 *and* 802.11w Management Frame Protection.

Here's an example of the errors I was getting from kernel 5.10 on NixOS:

```
...
[  543.019577] wlp3s0: authenticate with b0:95:75:48:e3:14
[  543.023547] wlp3s0: send auth to b0:95:75:48:e3:14 (try 1/3)
[  543.025935] wlp3s0: authenticated
[  543.040980] wlp3s0: associate with b0:95:75:48:e3:14 (try 1/3)
[  543.045495] wlp3s0: RX AssocResp from b0:95:75:48:e3:14 (capab=0x431 status=31 aid=0)
[  543.045506] wlp3s0: b0:95:75:48:e3:14 denied association (code=31)
[  543.068859] wlp3s0: authenticate with b0:95:75:48:e3:14
[  543.072621] wlp3s0: send auth to b0:95:75:48:e3:14 (try 1/3)
[  543.455699] wlp3s0: authenticate with b0:95:75:48:e3:14
[  543.455711] wlp3s0: send auth to b0:95:75:48:e3:14 (try 1/3)
[  543.602675] wlp3s0: authenticated
...
```

*Look out for `code=31`.*

My X230's Advanced-N 6205 wireless adapter and a BCM2046B1-Based Adapter from TP-Link both showed symptoms of reconnection loops. Some devices, such as my aging Sonos Play:1 and Fire TV Stick, didn't connect to the network at all.

The solution was to open OpenWrt's excellent LuCI web interface from a wired machine, change the encryption to WPA2 (unfortunately, *mixed mode* also gave me trouble, even though NetworkManager did recognize WPA3 as available), and disable *802.11w Management Frame Protection* entirely. Voilà: the instant my wireless network came back up, all my devices were visible again.

I've decided not to file a bug report just yet, as Wi-Fi under Linux is notoriously finicky, and I'm certainly not the only person to have encountered issues using release candidates. This post is mostly meant to be "the glass of ice water in hell" for other early adopters having trouble. Given time, I'm sure newer generations of wireless security will become just as reliable as WPA2.
