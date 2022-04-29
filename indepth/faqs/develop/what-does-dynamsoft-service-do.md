---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title:  What Does Dynamsoft Service Do
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: What Does Dynamsoft Service Do
description: What Does Dynamsoft Service Do
---

# Development

## What does Dynamsoft Service do? 

Dynamsoft Service sets up a local HTTP service that accepts requests from JavaScript code running in the browser and performs operations accordingly. The following are a few examples.

> NOTE
> 
> These requests are handled by the JavaScript client of the library. Please do not try to make similar requests in your own code without consulting [Dynamsoft Support]({{site.about}}getsupport.html).

#### Return availability

* Request

``` 
https://127.0.0.1:18623/fa/VersionInfo?ts=1603161807908
```

* Response in case of success

``` json
{
   "id" : "1",
   "method" : "VersionInfo",
   "result" : [ "16, 1, 0, 0728", "", "64" ],
	"cmdId" : ""
}
```

#### Perform image removal

* Request

``` 
https://127.0.0.1:18623/f/RemoveAllImages?753350643
```

* Response in case of success

``` json
{
   "id" : "414778098",
   "method" : "RemoveAllImages",
   "result" : [ true ],
	"cmdId" : ""
}
```

#### Return an image

* Request

``` 
https://127.0.0.1:18623/dwt/dwt_16100728/img?id=414778098&index=5&width=585&height=513&ticks=1603162807999
```

* Response in case of success

  The image data.
