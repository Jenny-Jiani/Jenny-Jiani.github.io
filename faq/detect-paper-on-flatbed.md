---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can the Dynamic Web TWAIN SDK detect whether papers exist on the flatbed?
keywords: Dynamic Web TWAIN, Capture/ Image Source, detect paper, flatbed
breadcrumbText: Can the Dynamic Web TWAIN SDK detect whether papers exist on the flatbed?
description: Can the Dynamic Web TWAIN SDK detect whether papers exist on the flatbed?
---

# Capture/Image Source

## Can the Dynamic Web TWAIN SDK detect whether papers exist on the flatbed?

Yes. You can use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#iffeederloaded" target="_blank">IfFeederLoaded</a> API to inspect whether papers are loaded in the feeder of your current scanner. Before calling this API, please use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#ifpaperdetectable" target="_blank">IfPaperDetectable</a> to inspect whether your current scanner hardware has a sensor to detect papers.

Code Example:

```javascript
DWObject.SelectSource();
DWObject.OpenSource;
if(DWObject.IfPaperDetectable)
if(DWObject.IfFeederLoaded)
DWObject.AcquireImage();
else
alert("There is no paper in the feeder.");
...
...
```
