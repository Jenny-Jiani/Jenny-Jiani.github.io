---
layout: default-layout
noTitleIndex: true 
needAutoGenerateSidebar: true
title: How To Customize The Installation Dialog
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to customize the installation dialog
description: How to customize the installation dialog
---

# Development

## How to customize the installation dialog

![UI 1]({{site.assets}}imgs/UI-1.png)

This installation dialog is opened by one of the following functions

* `OnWebTwainNotFoundOnWindowsCallback`

> For [Windows clients]({{site.getstarted}}platform.html#browsers-on-windows) 

* `OnWebTwainNotFoundOnLinuxCallback`

> For [Linux clients]({{site.getstarted}}platform.html#browsers-on-linux) 

* `OnWebTwainNotFoundOnMacCallback`

> For [macOS clients]({{site.getstarted}}platform.html#browsers-on-macos) 

* `OnRemoteWebTwainNotFoundCallback`

> For any client that [connects to a remote Dynamsoft Service]({{site.indepth}}features/input.html#how-to-enable-remote-scan)

All four of these functions eventually call the global API `Dynamsoft.DWT.ShowDialog()` to show the installation dialog. You can use your own method to show the necessary information so that your users know how to proceed. For example

``` javascript
function OnWebTwainNotFoundOnWindowsCallback(ProductName, InstallerUrl, bHTML5, bIE, bSafari, bSSL, strIEVersion) {
    alert(ProductName + " is not installed, please download and install it from " + InstallerUrl);
}
// same for macOS & Linux...
function OnRemoteWebTwainNotFoundCallback(ProductName, ip, port, bSSL) {
    alert("The Dynamsoft Service is not installed or not running on the machine with IP" + ip);
}
```

#### When and where to override these functions

If you are not using `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` . you can simply make the changes in the file `dynamsoft.webtwain.install.js` .

If you are using `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` , the file `dynamsoft.webtwain.install.js` doesn't exist. In this case, you must make the changes before you [create a WebTwain instance]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance) . For example

``` javascript
Dynamsoft.OnWebTwainNotFoundOnWindowsCallback = function(ProductName, InstallerUrl, bHTML5, bIE, bSafari, bSSL, strIEVersion) {
    alert(ProductName + " is not installed, please download and install it from " + InstallerUrl);
}
Dynamsoft.DWT.Load();
```
