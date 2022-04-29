---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Many Images Can Be Scanned
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Many Images Can Be Scanned
description: How Many Images Can Be Scanned
---

# Development

## How many images can be scanned? 

You can set the properties [`IfAllowLocalCache`]({{site.info}}api/WebTwain_Buffer.html#ifallowlocalcache) and [BufferMemoryLimit]({{site.info}}api/WebTwain_Buffer.html#buffermemorylimit) so that you can scan thousands of images at a time. Images over the set memory limit will be cached temporarily.

The cache data will be stored at [AppData]/Roaming/Dynamsoft/DynamsoftService/cache and be encrypted. When the scan application is closed, cache data will be removed from disk automatically.

``` javascript

function AcquireImage() {
    DWObject.IfAllowLocalCache = true;  //The default value of IfAllowLocalCache is false. When the property is set to true, you can scan as many images as you want as long as you have a big enough disk.
    DWObject.BufferMemoryLimit = 800;   //This property is only valid when IfAllowLocalCache is set to true.
    DWObject.SelectSource();
    DWObject.OpenSource();
    DWObject.AcquireImage();
}

```
