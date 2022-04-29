---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Do You Configure The Scan
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Configure The Scan
description: How Do You Configure The Scan
---

# Development

## How do you configure the scan? 

`Dynamic Web TWAIN` provides two ways to set up a scan operation.

* Change one setting at a time. Below are a few APIs, for example
  + [PageSize]({{site.info}}api/WebTwain_Acquire.html#pagesize) 
  + [PixelType]({{site.info}}api/WebTwain_Acquire.html#pixeltype)
  + [Resolution]({{site.info}}api/WebTwain_Acquire.html#resolution) 
  + [SourceCount]({{site.info}}api/WebTwain_Acquire.html#sourcecount)
* Change all settings at once. Use one of the two APIs below to achieve this.
  + [AcquireImage()]({{site.info}}api/WebTwain_Acquire.html#acquireimage)
  + [startScan()]({{site.info}}api/WebTwain_Acquire.html#startscan)
