---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Why Is The Browser Prompting Me To Install Dynamsoft Service Repeatedly
keywords: Dynamic Web TWAIN, Documentation, Develop 
breadcrumbText: Why Is The Browser Prompting Me To Install Dynamsoft Service Repeatedly
description: Dynamic Web TWAIN SDK Documentation FAQs Why Is The Browser Prompting Me To Install Dynamsoft Service Repeatedly
---

# Develop

## Why is the browser prompting me to install Dynamsoft Service repeatedly? 

There are a few possible causes

* The Dynamsoft Service is not installed properly.
* The Dynamsoft Service is installed correctly but not started.
* The requests sent to the Service are redirected because you are using a proxy server.
* The service's listening ports are blocked by another software, like anti-virus software.
* The service is blocked by plugins you have installed in the browser. (e.g. NoScript)
* If you are accessing an HTTPS site on a Linux machine.

The respective fixes are listed below

* Check the path `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17` and make sure you have [the correct files](#related-files-and-folders).
* Check `Local Services` and make sure Dynamsoft Service is listed and Running.
* Disable the proxy server to confirm it's the cause. Once confirmed, try to reconfigure the proxy to make sure it doesn't redirect requests sent to '127.0.0.1'
* Check your anti-virus software or any other software that can block local ports and make sure the ports 18622, 18623, 18625 and 18626 are not blocked.
* Disable all the plugins in the browser, refresh and try again.
* On your Linux client machine, visit https://127.0.0.1:18626 and https://127.0.0.1:18623 separately in Chrome and FireFox, manually add both certificates to the exception lists.
