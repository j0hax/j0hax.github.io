---
title: "On Freifunk and How I Made It Work for Dozens of People"
date: 2026-07-25T18:24:23+01:00
tags:
  - Freifunk
  - WLAN
  - Open Source
---

Around a year ago (Summer 2025) I set up my first [Freifunk](https://freifunk.net/) access point.

Originally, I had purchased the router for the princely sum of $6.99 at Goodwill with the intent to extend my existing home network using a wireless mesh as described in my [previous post]({{< ref "openwrt-meshing" >}}), but after moving to a new apartment with my wife I decided to try (and stick with) some [TP-Link Powerline-Adapters](https://www.tp-link.com/de/home-networking/powerline/tl-pa7017p-kit/), making my wireless mesh effectively obsolete.


Looking for a new use case for the hardware, I decided to give *Freifunk* a try, whereby one provides a *free* and *publicly accessible* Wi-Fi hotspot. Thanks to VPNs hosted by the project the whole ordeal is not as scary as it may sound; both clients and providers are protected from each other for commonest abuse cases, an important consideration with Germany's strict copyright infringement laws.

The entire project runs fairly decentralized, with each broad geographic area being their own legally recognized *Verein* (association) which provides the necessary firmware and back-end technology. For example, my city's Freifunk Club, [Freifunk Hannover](https://hannover.freifunk.net) is carried by [FNorden e.V.](https://fnorden.net/), an association funded through membership fees, donations, and even the state's [Ministry of Economic Affairs](https://www.mw.niedersachsen.de/startseite/uber_uns/presse/presseinformationen/wirtschaftsministerium-foerdert-freifunk-initiativen-im-land--142482.html)!

## Getting Started

For the average tinkerer, Freifunk is easy to get started with. All one needs is a supported router which can run their Freifunk Association's custom firmware, usually a customized [OpenWRT](https://openwrt.org/) image built with [Gluon](https://gluon.readthedocs.io/en/latest/). The router can be flashed using the exact same (manufacturer specific) methods one uses to flash stock OpenWRT as well.

Once flashed, the router can be configured using a simple web interface. In my case, it is possible to use the default values and participate "passively" by meshing with other Freifunk routers in the vicinity, or to connect directly to the backbone network run by the association, and additionally act as a gateway.

A Freifunk router is *not* a sacrificial device; parallel to running a public access point and routing that traffic, it can also act as a "dumb" AP, i.e. provide a second SSID that just bridges to an upstream Ethernet connection. As such a Freifunk device can trivially be set up to provide a public and private Wi-Fi.

## Good Infrastructure

As mentioned, Freifunk provides both firmware builds and its VPN servers preconfigured in the firmware.

{{< figure src="grafana.png" caption="Effortless statistics" >}}

Freifunk Hannover even goes beyond that, by providing a complete monitoring stack using InfluxDB and Grafana, with each access points' anonymized statistics being publicly available online. Additionally, they assign a public IPv6 to each access point via their VPN infrastructure, making remote management a breeze; I can now log in to a device from anywhere in the world, provided I have IPv6 internet connection.

## Deploying for Everyone

Of course, in the small apartment shared by my wife and I, with neighbors who all have their own wireless networks, a public access point provides seldom benefit.

An ideal deployment, however, was at my former student dormitory, where five Ubiquiti UAP-AC-Pro access points are deployed, one on each floor. These prosumer-grade routers feature a neat minimalistic design and PoE support. With some coaxing, they can even be flashed with OpenWRT/Freifunk.

Not only were the old access points in *dire* need of a software update (I stopped maintaining the stock Unifi setup after moving out), but a clear seperation between residents and guests seemed like an ideal use-case for Freifunk's dumb AP feature. By replacing the old Unifi firmware with Freifunks, I not only get a modern, isolated guest Wi-Fi, but Freifunk's infrastructure also includes an optional auto-update mechanism, allowing management of the devices to be more or less deployed as "fire-and-forget" without any additional maintenance from users.


### Installing Freifunk

Installing Freifunk varies by device, but is surprisingly easy on the Unifi UAP-AC devices, as they already run a modified version of OpenWRT. When factory resetting them, there is a default admin user (`ubnt:ubnt`) with which one can install the Freifunk firmware. 

All it took is writing the magic string `5edfacbf` to `/proc/ubnthal/.uf` in order to unlock the firmware, then copying over the Freifunk firmware image and installing it:

```console
ubnt@192.168.1.237's password: 


BusyBox v1.25.1 () built-in shell (ash)


  ___ ___      .__________.__
 |   |   |____ |__\_  ____/__|
 |   |   /    \|  ||  __) |  |   (c) 2010-2023
 |   |  |   |  \  ||  \   |  |   Ubiquiti Inc.
 |______|___|  /__||__/   |__|
            |_/                  https://www.ui.com

      Welcome to UniFi UAP-AC-Pro-Gen2!

********************************* NOTICE **********************************
* By logging in to, accessing, or using any Ubiquiti product, you are     *
* signifying that you have read our Terms of Service (ToS) and End User   *
* License Agreement (EULA), understand their terms, and agree to be       *
* fully bound to them. The use of SSH (Secure Shell) can potentially      *
* harm Ubiquiti devices and result in lost access to them and their data. *
* By proceeding, you acknowledge that the use of SSH to modify device(s)  *
* outside of their normal operational scope, or in any manner             *
* inconsistent with the ToS or EULA, will permanently and irrevocably     *
* void any applicable warranty.                                           *
***************************************************************************

UAP-AC-Pro-Gen2-BZ.6.5.28# echo "5edfacbf" > /proc/ubnthal/.uf
UAP-AC-Pro-Gen2-BZ.6.5.28# grep kernel /proc/mtd
mtd2: 00790000 00010000 "kernel0"
mtd3: 00790000 00010000 "kernel1"
UAP-AC-Pro-Gen2-BZ.6.5.28# dd if=/tmp/firmware.bin of=/dev/mtdblock2
12545+1 records in
12545+1 records out
UAP-AC-Pro-Gen2-BZ.6.5.28# dd if=/tmp/firmware.bin of=/dev/mtdblock3

12545+1 records in
12545+1 records out
UAP-AC-Pro-Gen2-BZ.6.5.28# 
UAP-AC-Pro-Gen2-BZ.6.5.28# grep bs /proc/mtd
mtd4: 00020000 00010000 "bs"
UAP-AC-Pro-Gen2-BZ.6.5.28# dd if=/dev/zero bs=1 count=1 of=/dev/mtdX
1+0 records in
1+0 records out
UAP-AC-Pro-Gen2-BZ.6.5.28# uname -a
Linux UAP-AC-Pro-Gen2 4.4.153 #0 Thu Aug 30 12:10:54 2018 mips GNU/Linux
UAP-AC-Pro-Gen2-BZ.6.5.28# 
```

A complete guide can be found on [Freifunk Darmstadt's forum](https://forum.darmstadt.freifunk.net/t/unifi-ap-erstinstallation/790).

### The Network Up Close

```goat {caption="Diagram 1: Example"}
                         +-----------------------------------------+
                         |                   Internet              |
                         |                       |                 |
+-------+     SSH        |   +-------------------+---------+       |
| Admin +----------------+-->| Freifunk VPN Infrastructure |       |
+-------+    (IPv6)      |   +-------------------+---------+       |
                         |                       |                 |
                         +-----------------------+-----------------+
                                                 |
                                                 |
                                  +--------------+------+
                                  |                     |
                                  | Home Router         |
                                  |                     |
                                  +--------------+------+
                                                 |
                                                 |
                                                 |
                          +---------------+------+--------+
                          |                               |
                          |     Freifunk Access Point     |
                          |                               |
                          +----+---------------------+----+
                               |                     |
                               |                     |
                 Freifunk WLAN |                     | Private WLAN
                               |                     |
                               |                     |
                    +----------+-------+    +--------+---------+
                    | Freifunk clients |    | Private clients  |
                    +------------------+    +------------------+
```

```goat
             ^                          +-------------------------+     +----------------+  +------------------------------+
     DOCSIS  |                    +-----+   Third Story Switch    +-----+  PoE Injector  +--+    Freifunk / Bridged AP     |
             v                    |     +-------------------------+     +----------------+  +------------------------------+
+------------+------------+       |
|        FRITZ!Box        |       |     +-------------------------+     +----------------+  +------------------------------+
|   Cable modem / DHCP    |       +-----+   Second Story Switch   +-----+  PoE Injector  +--+    Freifunk / Bridged AP     |
+------------+------------+       |     +-------------------------+     +----------------+  +------------------------------+
             |                    |
             |                    |     +-------------------------+     +----------------+  +------------------------------+
+------------+------------+       +-----+   First Story Switch    +-----+  PoE Injector  +--+    Freifunk / Bridged AP     |
|       Core Switch       +-------+     +-------------------------+     +----------------+  +------------------------------+
+-------------------------+  Cat6 |
                                  |            Ground Level             +----------------+  +------------------------------+
                                  +-------------------------------------+  PoE Injector  +--+    Freifunk / Bridged AP     |
                                  |                                     +----------------+  +------------------------------+
                                  |
                                  |           Basement Level            +----------------+  +------------------------------+
                                  +-------------------------------------+  PoE Injector  +--+    Freifunk / Bridged AP     |
                                                                        +----------------+  +------------------------------+
```

## Follow-Up: Performance Issues

One of the neat features of Freifunk is that one device can mesh with other nodes, extending the Freifunk network even if only few access points have an uplink to the Freifunk VPN.

Unfortunately, this feature caused some grave performance issues on devices with such weak processors as the Unifi AP AC Pro. Meshing caused *insane* SIRQs, according to `top` eating up 99% of CPU time, causing sustained load averages over 2.5.

The solution was simple: disable meshing, and pipe each access point's traffic through its wired connection instead of the Freifunk mesh. This meant that I needed to have the admins add each node's WireGuard public key to the VPN servers, which is fortunately no big deal as they are very helpful. Then, I needed to reconfigure the nodes using `uci`, OpenWRT's, and by extension Freifunk's, configuration tool:

```
uci set wireless.client_radio0.disabled='0'
uci set wireless.client_radio1.disabled='0'
uci commit
wifi reload
```

This effectively disables the mesh network for 2.4 and 5 Ghz frequencies.

Afterwards, the load averages significantly dropped to around 0.02, restoring full speed to wireless users.

## Epilogue: The Right to Internet Access

The [Wikipedia Article](https://en.wikipedia.org/wiki/Right_to_Internet_access) on the subject starts with
>The right to Internet access, also known as the right to broadband or freedom to connect, is the view that all people must be able to access the Internet in order to exercise and enjoy their rights to freedom of expression and opinion and other fundamental human rights [...]

and then delves into the UN's criticisms of internet censorship.
