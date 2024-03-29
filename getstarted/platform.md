---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Platform
keywords: Dynamic Web TWAIN, Documentation, Platform
breadcrumbText: Platform
description: Dynamic Web TWAIN SDK Documentation Platform Page
---

# Platforms

`DWT` is designed to be cross-platform, thus, `DWT` works in all major browsers across all major operating systems.

## Browsers on desktop devices

### Browsers on Windows

* The following versions of Windows (x86-64) are supported
  + 7
  + 8 & 8.1
  + 10 `Recommended`
  + 11
  + Server 2008
  + Server 2012
  + Server 2016
  + Server 2019

* The following browsers are supported
  + Chrome 68.* ~ 79.*
  + Chrome 80.* + `Recommended`
  + Firefox 61.* ~ 69.*
  + Firefox 70.* + `Recommended`
  + Microsoft Edge Spartan
  + Microsoft Edge Anaheim `Recommended`
  + Internet Explorer 10 ~ 11

### Browsers on macOS

* The following versions of macOS (x86-64, ARM64) are supported
  + Mac OS X 10.6 Snow Leopard (10.6.8+)
  + Mac OS X 10.7 Lion
  + OS X 10.8 Mountain Lion
  + OS X 10.9 Mavericks
  + OS X 10.10 Yosemite
  + OS X 10.11 El Capitan
  + macOS 10.12 Sierra
  + macOS 10.13 High Sierra `Recommended`
  + macOS 10.14 Mojave `Recommended`
  + macOS 10.15 Catalina `Recommended`
* The following browsers are supported
  + Chrome 68.* ~ 79.*
  + Chrome 80.* + `Recommended`
  + Firefox 61.* ~ 69.*
  + Firefox 70.* + `Recommended`
  + Safari 7.* ~ 12.*
  + Safari 13.* + `Recommended`

### Browsers on Linux

* The following distributions of Linux (x64, ARM64, MIPS64) are supported
  + Ubuntu 12.04 LTS (Precise Pangolin)
  + Ubuntu 12.10 (Quantal Quetzal)
  + Ubuntu 13.04 (Raring Ringtail)
  + Ubuntu 13.10 (Saucy Salamander)
  + Ubuntu 14.04 LTS (Trusty Tahr)
  + Ubuntu 14.10 (Utopic Unicorn)
  + Ubuntu 15.04 (Vivid Vervet)
  + Ubuntu 15.10 (Wily Werewolf)
  + Ubuntu 16.04 LTS (Xenial Xerus)
  + Ubuntu 16.10 (Yakkety Yak)
  + Ubuntu 17.04 (Zesty Zapus)
  + Ubuntu 17.10 (Artful Aardvark)
  + Ubuntu 18.04 LTS (Bionic Beaver) `Recommended`
  + Ubuntu 18.10 (Cosmic Cuttlefish)
  + Ubuntu 19.04 (Disco Dingo)
  + Ubuntu 19.10 (Eoan Ermine)
  + Ubuntu 20.04 LTS (Focal Fossa)
  + Ubuntu 20.10 (Groovy Gorilla)
  + Debian 8 (Jessie)
  + Debian 9 (Stretch) `Recommended`
  + Debian 10 (Buster)
  + Fedora 24
  + Fedora 25
  + Fedora 26
  + Fedora 27
  + Fedora 28
  + Fedora 29
  + Fedora 30
  + Fedora 31
  + Fedora 32 `Recommended`
  + Mint 18.3 Sylvia
  + Mint 19 Tara
  + Mint 19.1 Tessa
  + Mint 19.2 Tina
  + Mint 19.3 Tricia
  + Mint 20 Ulyana

* The following browsers are supported
  + Chrome 68.* ~ 79.*
  + Chrome 80.* + `Recommended`
  + Firefox 61.* ~ 69.*
  + Firefox 70.* + `Recommended`

## ActiveX browsers

ActiveX browsers refers to Internet Explorer 9 ~ 11. They are not included in the above lists. By default, IE 10 ~ 11 runs in HTML5 mode. Setting the global API `Dynamsoft.DWT.IfUseActiveXForIE10Plus` to true can turn ActiveX mode on in IE 10 ~ 11.

## Browsers on mobile devices

### Browsers on iOS & iPadOS

* The following versions are supported
  + iOS 12
  + iOS 13+ `Recommended`
  + iPadOS 13+ `Recommended`

* The following browsers are supported
  + Chrome 68.* ~ 79.* (no video streaming)
  + Chrome 80.* ~ 85.* (no video streaming) `Recommended`
  + Firefox 61.* ~ 69.* (no video streaming)
  + Firefox 70.* ~ 80.* (no video streaming) `Recommended`
  + Safari 7.* ~ 12.*
  + Safari 13.* ~ 14.* `Recommended`

### Browsers on Android

* The following versions are supported
  + Android 8.0 Oreo
  + Android 9 Pie
  + Android 10+ `Recommended`

* The following browsers are supported
  + Chrome 68.* ~ 79.*
  + Chrome 80.* ~ 85.* `Recommended`
  + Firefox 61.* ~ 69.*
  + Firefox 70.* ~ 80.* `Recommended`

## WASM browsers

WASM browsers refer to the browsers with the following advanced features.

[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) - [More info](https://caniuse.com/#feat=blobbuilder)

[URL/createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) - [More info](https://caniuse.com/#feat=bloburls)

[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) - [More info](https://caniuse.com/#feat=webworkers)

[WebAssembly](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/WebAssembly) -
[More info](https://caniuse.com/#feat=wasm)

[MediaDevices/getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) - [More info](https://caniuse.com/#feat=stream)

Dynamsoft recommends the use of the latest versions of the modern browsers. Check out the list of browsers above and try to use those marked as `Recommended` .

## Other operating systems

There could be some other systems which are also supported but not listed above. Dynamsoft doesn't recommend the use of such systems as they are not officially tested. If you need to use `DWT` on a system not mentioned above, please first contact [Dynamsoft Support]({{site.about}}getsupport.html) to get more information.

## Other browsers.

There are many different browsers on the market which may not have been listed above. However, these browsers most likely use the same browser engines that one of the listed browsers use. For example, on desktop Opera uses [ `Blink` ](https://en.wikipedia.org/wiki/Blink_(web_engine)) just like Chrome. These browsers probably work too. If you plan to use any of the browsers that are not listed above, you should

* Make sure it works by testing our [demo page](https://demo.dynamsoft.com/dwt/online_demo_scan.aspx)
* Do thorough tests before going into production
