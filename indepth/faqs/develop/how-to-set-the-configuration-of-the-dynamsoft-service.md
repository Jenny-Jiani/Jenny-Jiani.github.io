---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Set The Configuration Of The Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Set The Configuration Of The Dynamsoft Service
description: How To Set The Configuration Of The Dynamsoft Service
---

# Development

## How to set the configuration of the Dynamsoft Service? 

Generally, we configure the service in the file `DSConfiguration.ini`

``` javaScript
[DS]
DSVersion = 1, 6, 1, 0728 // Version of the service, readonly
Port_mn_0 = dcp
Port_mp_0 = 18625 // Port of the Service
Port = 2
SSLPort_mn_0 = dcp
SSLPort_mp_0 = 18626 // SSL Port of the Service
SSLPort = 2
Port_mn_1 = dwt
Port_mp_1 = 18622 // Port of the core scanning module
SSLPort_mn_1 = dwt
SSLPort_mp_1 = 18623 // SSL Port of the core scanning module
LogLevel = 1 // Whether to output detailed information for debugging purposes
```
