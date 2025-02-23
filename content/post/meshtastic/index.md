---
title: "My first Meshtastic Node is now Online!"
date: 2024-03-27
tags:
    - diy
    - meshtastic
    - raspberry pi
---

I believe the first time I head of [Meshtastic](https://meshtastic.org/) was during the COVID pandemic, probably through one of Andreas Spiess' [videos](https://www.youtube.com/watch?v=TY6m6fS8bxU). I thought the Idea was neat (I was deeply into DIY electronics then as I am now), but I quickly decided the project wasn't for me. I wasn't aware of LoRa's range nor did I have the money as a broke college student to go out and build a transciever with no other people to talk to.

## Fast Forward to 2024

In the late summer of 2023 I moved in with my partner. Our new residence is in a high-rise building from the 70s. While much of the apartment was in need of a renovation, our water meters were curious; there was no need for a utilities worker to come buy and take readings from each meter, nor did we have to report usage to the company; they were all marked with "LoRa."

{{< figure src="meter.jpg" title="It doesn't take a genius to guess how these are read" caption="Excuse the heavy obfuscation, but these things are covered in seemingly unique numbers, and I'm just not quite ready to doxx myself via a water meter of all things." >}}

In fact, this old apartment had more than just LoRa meters, even our smoke detectors and radiators are hooked up to Minol's LoRa system! My interest was piqued. A quick Google search led me down a YouTube rabbit hole.

## Enter Meshtastic

I like to think that I didn't find Meshtastic, but Meshtastic found me. The algorithm™ of course took notice in my sudden interest in LoRa. One day after work, I switched on the TV and opened YouTube. A video began automatically playing, opening with
>Unless you've been living under a rock, you've probably noticed that there's a radio system that's sort of taking the World by a storm at the moment, and that is LoRa or long-range 868 ... **this easy to get into radio mesh network is a lot of fun.**

The video in question was [The Idiots Guide To Meshtastic - Long Range Comms!](https://youtu.be/N3FXej9fqIkv) by Ringway Manchester. With that opening, I was hooked and watched the entire video.

In a gist, Meshtastic is an ongoing project to build a decentralized network of LoRa transcievers which exchange text messages. So, what makes Meshtastic different from messaging via SMS, E-Mail, WhatsApp et. al.?
- The system is completely off the grid: no data plans, Wi-Fi, cell coverage or internet[^mqtt] is required. It's "its own thing," a bit like CB Radio.
- The software is free, and the hardware is inexpensive. A fully functional transciever costs less than $20.
- The messages are encrypted. You can broadcast in a public channel or send private messages to users.
- No single point of failure: nodes can drop in and out of service, be permanently installed outdoors or carried around in a pocket. Each node can forward data to its neighbors, relaying messages until it reaches its end point.

Years ago, I had put off Meshtastic as an expensive, time-consuming and low-reward hobby, but seeing how effective, easy-to-use and most importantly affordable the ["Heltec V3"](https://heltec.org/project/wifi-lora-32-v3/) unit was, I decided to give Meshtastic a chance and headed over to their official website.

### Finally, a use for that unloved Pico

The first thing I did was check their [devices list](https://meshtastic.org/docs/hardware/devices/), and to my surprise, the Raspberry Pi Pico W is a supported platform. Instead of having to buy my entire hardware and source batteries or 3D-printed cases, I could try out what I already had (shamefully) lying around without a purpose. While Meshtastic is a fairly young and rapidly evolving[^develop] project, the documentation is excellent. It was very clear which LoRa Module is currently supported and how to set up the accompanying software.

I decided to order the [Waveshare SX1262 LoRa Module](https://www.berrybase.de/sx1262-lora-node-modul-fuer-raspberry-pi-pico-lorawan-eu868-band) from BerryBase, a German DIY electronics supplier, along with the header pins I needed to actually connect the Pico to the module. Two days later, I had soldered everything together and was ready to flash Meshtastic.

{{< figure src="guts.jpg" title="The completed basic node" caption="The module shipped with everything I needed, such as an IPEX1 to SMA connector, an SMA antenna, and even a battery for portable use." >}}

## Mr Watson, come here.

First thing in the morning I booted my node in my apartment. I configured it via serial to connect to my Wi-Fi network, connected to it from my phone via the Meshtastic app and tried sending messages to no avail. This didn't surprise me, as the [Meshmap](https://meshmap.net/), an unofficial project mapping nodes' MQTT messages to OpenStreetMap, showed nothing in my vicinity. As I didn't have much time to tinker, I packed my node along with work-related stuff and decided to head to the office. I would try again from a more central part of my city.

After work I headed straight to my *Studentenverbindung,[^fraternity]* which was located much more centrally.

{{< figure src="moin.png" title="The most north German conversation imaginable" caption="[Moin](https://en.wikipedia.org/wiki/Moin) --- the \"Aloha\" of Low German, Frisian and Danish." >}}

Lo and behold, I was able to communicate with a user around 430 meters away. Not bad, considering we were both indoors, using shitty stock antennas, in the "downtown" area of a medium sized city, with most (likely all) buildings being built with dense bricks or concrete.

After recieving permission from my house's caretaker to permanently install the Meshtastic node, I repurposed a ["Safe-Box" Cable Connection Housing](https://www.bauhaus.info/gartensteckdosen-stromverteiler/safe-box-kabelverbindung/p/12178806) from my local hardware store. It has a rubber-sealed port on each side, one I use to hold the antenna in place, the other which I use to power and charge the battery.

{{< figure src="finished.jpg" title="Finished, complete with a small notice" caption="If my 3D Printer hadn't broken down, I would have printed a case." >}}

{{< figure src="case.jpg" title="The \"guts\" inside the case" caption="The red color, IP44 rating and left over space inside may be over-the-top, but it works." >}}

At the time of writing (April 2024) only "Spl" and I maintain permanent Meshtastic node(s), but I have no doubt that over time, the network will expand. My plans for the future involve upgrading to a higher gain antenna and building more nodes... perhaps even an outdoor, solar powered node? 

## What I've learned

- I probably wouldn't recommend using a Raspberry Pi Pico for building a Meshtastic Node from the ground up.
    - As of April 2024, the RP2040 is newly supported. Not everything works just perfectly yet. For example, the Pico W supports Wi-Fi and Bluetooth, but only Wi-Fi has been implemented in the firmware.
    - The RP2040 is pretty fast, but the ESP32 and nRF52, which are more common among supported Meshtastic devices, are more powerful.
    - If you do use a Pico, use the *W* variant! Meshtastic devices are often used in conjunction with a smartphone or tablet. The basic Pico will only support serial connections, so it can practically only be used with a computer over USB or as a repeater.
- My device immediately showed up on the [Meshmap](https://meshmap.net/) after connecting to the internet.
    - This isn't a problem for me, as I neither carry the Pico around with me nor do I have it installed at an address I want to keep private.
    - If you care about keeping your location private,[^privacy] turn off MQTT and position reporting. Again, [the docs](https://meshtastic.org/docs/software/) are pretty helpful.
- The actual usefulness really depends on the user(s). I see this being an incredible tool for groups of hikers, countries with limited/censored networking infrastructure or maybe even doomsday preppers. I myself am just a tinkerer interested in both embedded and distributed systems, and got a real kick from building the node and "talking" to other people.
- Meshtastic is addictive. I feel a real urge to build out the mesh in Hanover by installing more devices which act as routers/repeaters. I have little doubt that more people will join in as the project picks up momentum.

[^mqtt]: Meshtastic supports MQTT, a protocol designed to "bridge" small LoRa devices together. It is completely optional however.

[^develop]: A new [firmware](https://github.com/meshtastic/firmware/releases) release is dropping every 2 weeks or so!

[^fraternity]: A German student society, similar but distinct from a North American fraternity.

[^privacy]: When you use Meshtastic, you are using a radio transciever: Even with all privacy settings tweaked, it will still be possible to triangulate the transciever with significant effort due to the laws of physics.
