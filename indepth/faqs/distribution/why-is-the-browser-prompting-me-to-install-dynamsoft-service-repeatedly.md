---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Why is the browser prompting me to install Dynamsoft Service repeatedly? 
keywords: Dynamic Web TWAIN, Documentation, Distribution and Deployment 
breadcrumbText: Why Is The Browser Prompting Me To Install Dynamsoft Service Repeatedly
description: Why is the browser prompting me to install Dynamsoft Service repeatedly? 
---

# Distribution and Deployment

## Why is the browser prompting me to install Dynamsoft Service repeatedly? 

#### Scenario

The browser prompting me to install Dynamsoft Service repeatedly and keep getting the error 'The Dynamic Web TWAIN module is not installed' in the console.

#### There are a few possible causes

* The Dynamsoft Service is not installed properly.
* The Dynamsoft Service is installed correctly but not started.
* The requests sent to the Service are redirected because you are using a proxy server on IE.
* The service's listening ports are blocked by another software, like anti-virus software.
* The service is blocked by plugins you have installed in the browser. (e.g. NoScript)
* If you are accessing an HTTPS site on a Linux machine.

#### The respective fixes are listed below

* Check the path `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17` or `C:\Users\{UserName}\AppData\Roaming\Dynamsoft\DynamsoftService` and make sure you have <a href="{{site.indepth}}deployment/service.html#related-files-and-folders" target="_blank">the correct files</a>.
* Check `Local Services` and make sure Dynamsoft Service is listed and Running.
* On IE, go to `Internet Options` --> `Security` tab, select `Local Intranet`, then click `Sites`,  uncheck 'Include all sites that bypass the proxy server' 
 
  ![why-is-the-browser-prompting-me-to-install-dynamsoft-service-repeatedly-1]({{site.assets}}imgs/why-is-the-browser-prompting-me-to-install-dynamsoft-service-repeatedly-1.png)
  ![why-is-the-browser-prompting-me-to-install-dynamsoft-service-repeatedly-2]({{site.assets}}imgs/why-is-the-browser-prompting-me-to-install-dynamsoft-service-repeatedly-2.png)

* Check your anti-virus software or any other software that can block local ports and make sure the ports 18622, 18623, 18625 and 18626 are not blocked.
* Disable all the plugins in the browser, refresh and try again.
* On your Linux client machine, visit https://127.0.0.1:18626 and https://127.0.0.1:18623 separately in Chrome and FireFox, manually add both certificates to the exception lists.

