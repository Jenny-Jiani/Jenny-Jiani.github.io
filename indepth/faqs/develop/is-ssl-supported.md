---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Is SSL Supported
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Is SSL Supported
description: Is SSL Supported
---

# Development

## Is SSL Supported? 

Yes, as shown in the following line, you just need to make sure the correct protocol is used

``` javascript
var protocol = Dynamsoft.Lib.detect.ssl ? "https://" : "http://"
```
