---
layout: default-layout
title: How to activate a license
keywords: license, activation
description: This page describes how to activate a trackable license
breadcrumbText: Activate a License
needAutoGenerateSidebar: true
---

# How to activate a license

When you activate a purchased license, you will choose one of two activation options

* Dynamsoft-Hosting
* Self-Hosting

![Choose-Activation-Option]({{site.assets}}imgs/activate-001.png)

> Once chosen and activated, this cannot be changed. So make sure you choose the correct one for your application.

Both options use the same software, License Tracking Server ( `LTS` for short), to track the license usage. The differences are shown in the following table

> Read more on [what is a License Tracking Server]({{site.about}}terms.html#license-tracking-server)

|  | Dynamsoft-hosting| Self-hosting |
|:-:|:-:|:-:|
| Need to designate a server to host `LTS` | No | Yes |
| Need to install and manage `LTS` | No | Yes |
| Must have connection to Dynamsoft | Yes | No |
| Must send usage data to Dynamsoft | Yes | No |

Generally, you choose to host your own `LTS` if

* Your client devices may not be able to connect to the internet
* You don't want to share your usage data with Dynamsoft
* You believe your own server would work faster

If you decide to host your own LTS, please follow the instructions on [Self-hosting License Tracking]({{site.selfhosting}}index.html). Otherwise, read more on [Dynamsoft-hosting License Tracking]({{site.dshosting}}index.html).
