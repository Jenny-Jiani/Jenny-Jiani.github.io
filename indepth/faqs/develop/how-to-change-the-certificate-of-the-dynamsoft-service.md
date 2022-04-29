---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Change The Certificate Of The Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Change The Certificate Of The Dynamsoft Service
description: How To Change The Certificate Of The Dynamsoft Service
---

# Development

## How to change the certificate of the Dynamsoft Service? 

To replace the default certificates, the steps are:

* Generate a certificate for `127.0.0.1`
* Install that certificate
* Use that certificate to generate public /private keys (pem)
* Rename these two keys to `server.pem` (public) and `server_key.pem` (private)
* Replace the old keys in `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17\cert`
* Restart the service
