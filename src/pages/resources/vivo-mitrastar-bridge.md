---
layout: ../../layouts/MarkdownPostLayout-en.astro
title: How to setup the Vivo Mitrastar modem in bridge mode without losing TV and Phone services
date: 2025-01-17
tags: ["networking", "vivo"]
---

The default setup page of the Mitrastar modem/router combo (HGU) provided by Vivo has a bridge mode, but it's not properly implemented. When it's enabled, the HGU no longer serves VOIP and IPTV services.

Vivo blocks the advanced settings page by default. But this can be bypassed with the following steps:

1. Disconnect the fiber cable from the modem
1. Hard reset the modem

   - Hold the reset button until all lights turn off

1. Connect to the modem's network either via Wi-Fi or Ethernet
1. Access the technician's page at [192.168.15.1/instalador](http://192.168.15.1/instalador)

   - Login with `support` as the username. The password is the same as the `admin` user, which is printed on the label under the modem

1. Change your network region

   - If it's "VIVO1", change it to "VIVO2" or vice versa

1. After the modem reboots, change the region back to the original one
1. Access the advanced settings page at [192.168.15.1/padrao](http://192.168.15.1/padrao)

   - Login with `support` as the username and the password printed on the label under the modem

1. Go to `Manutenção` > `TR-069 Client` > `CWMP` and disable it. Also disable `MGMT Remoto`

   - This will prevent Vivo from remotely changing the modem's settings, misconfiguring it and removing the advanced settings page

1. Go to `Configuração de Rede` > `WAN` and edit the "Internet" entry:

   1. Change name to "bridge"
   1. Change "Mode" to "Bridge"

   - If your network is VIVO1 the VLAN ID must be 10. If it's VIVO2, it must be 600.

1. Reconnect the fiber cable

1. Setup your router with the PPPoE credentials

   - The username is `cliente@cliente`
   - The password is `cliente`

Done! Now you have the Vivo Mitrastar modem in bridge mode without losing TV and Phone services.
