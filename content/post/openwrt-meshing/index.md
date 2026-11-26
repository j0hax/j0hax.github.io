---
title: "OpenWrt Meshing"
date: 2025-02-08T14:58:04+01:00
tags:
  - linux
  - openwrt
  - mesh
---

After moving to a new, larger apartment, I had a problem: **the office had a terrible Wi-Fi connection,** and it was so far away from our DSL gateway that running a long Ethernet cable was out of the question. Fortunately, during a trip to the USA, I found something I couldn't pass up: a TP-Link Archer A7[^old] at Goodwill for a whopping $6.99.

{{< figure src="goodwill.jpg" caption="For less than the price of a fast food meal" >}}

The router immediately stood out to me, as I have used the extremely similar Archer C7 v5 since 2020. The machines are not only alike in appearance but also at the hardware level: both share the QCA956X CPU, 16 MiB flash storage, 128 MiB RAM, and of course the same wireless chipsets. Apparently, the A7 featured IFTTT and Alexa integration, resulting in some minor revisions and necessitating slightly different OpenWrt firmware.

The great question remained: how to bridge the wireless signal from one router to the next. Many older guides on the internet show you how to set up a second router as a client, reconfigure routing, firewall, and DHCP, and essentially forward its local traffic to the internet-connected router. Fortunately, wireless standards have advanced to solve this issue: 802.11s allows for manufacturer-independent meshing between wireless devices. I'm not sure if the TP-Link firmware supported it (I immediately replaced it with OpenWrt, for, uh... more [reasons](https://www.malwarebytes.com/blog/news/2024/12/tp-link-faces-us-national-security-probe-potential-ban-on-devices) than just a preference for FOSS), but a quick Google search showed that both the wireless chipsets and OpenWrt itself support this new-ish protocol.

## Enter mesh11sd

There are many ways to set up 802.11s meshing. My first attempt, manually connecting the routers via OpenWrt's built-in 802.11s networking, failed. I must have overlooked something. Another method, called [B.A.T.M.A.N.](https://openwrt.org/docs/guide-user/network/wifi/mesh/batman), seemed like overkill. I really wanted a solution that was as reproducible and plug-and-play as possible.

The [mesh11sd](https://github.com/openNDS/mesh11sd) project makes meshing easy by automatically detecting the roles of different network nodes.

### One more thing...

I followed the project's README to a point, but the wireless configuration kept resetting every couple of seconds and the device was under high load. A quick check with `logread` yielded the following error message repeatedly:

```
Unable to autoconfigure. Please install ath10k NON ct drivers for mesh support
```

Instead of switching driver packages on this already overloaded router, I decided to build my own image using the [802.11s Rapid Deployment](https://openwrt.org/docs/guide-user/network/wifi/mesh/rapiddeployment) tutorial from OpenWrt. With a customized image, it is incredibly easy to just "fire and forget" the mesh deployment.

Because the routers are so similar, I was able to use the same package list and setup commands for both router models on the [OpenWrt Firmware Selector](https://firmware-selector.openwrt.org/). I just had to fill in the following two options:

#### Installed packages

>base-files ca-bundle dnsmasq dropbear firewall4 fstools kmod-ath9k kmod-gpio-button-hotplug kmod-nft-offload libc libgcc libustream-mbedtls logd mtd netifd nftables odhcp6c odhcpd-ipv6only opkg ppp ppp-mod-pppoe procd-ujail swconfig uboot-envtools uci uclient-fetch urandom-seed urngd wpad-mbedtls kmod-usb2 kmod-usb-ledtrig-usbport kmod-ath10k ath10k-firmware-qca988x luci ip-full kmod-nft-bridge vxlan mesh11sd

Note that the `kmod-ath10k-ct` package has been dropped in favor of the non-ct version.

#### Script to run on first boot (uci-defaults)

```
uci set mesh11sd.setup.auto_config='1'
uci set mesh11sd.setup.auto_mesh_id='kneippmesh'
uci set mesh11sd.setup.mesh_gate_encryption='1'
uci set mesh11sd.setup.mesh_gate_key='correct horse battery staple'
uci set mesh11sd.setup.ssid_suffix_enable='0'
uci commit mesh11sd
```

These configuration commands simply tell `mesh11sd` to automatically configure the router to connect to a mesh network called `kneippmesh` using WPA3 encryption (confusingly, option `1`) and the given password.

Notably, `mesh11sd` automatically renames your wireless SSIDs using a prefix, e.g. `<ssid>_<freq>_<id>`, which I found a bit annoying and therefore disabled. Especially for my non-technical friends, I just want *one* good Wi-Fi to connect to.

## That's All, Folks!

After flashing a customized image, you simply need to configure the OpenWrt router as you see fit, i.e., choose a Wi-Fi name and password. `mesh11sd` takes care of the rest; it figures out which devices are connected to the upstream WAN and which IP addresses to assign to which client.

I also optionally set up 802.11r ("fast transition") to help a device moving through my apartment connect to the best access point, but even that is optional. I now have (to the best of my knowledge) fast and secure Wi-Fi in my office :)

[^old]: The router was released in 2018, meaning it is now quite out-of-date: there's no 802.11ax support, and the flash is kinda small, but it still holds up quite well if you just want a home WLAN.
