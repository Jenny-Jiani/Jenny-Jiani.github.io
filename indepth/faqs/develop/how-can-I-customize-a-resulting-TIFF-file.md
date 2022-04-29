---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I customize a resulting TIFF file
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How can I customize a resulting TIFF file
description: How can I customize a resulting TIFF file
---

# Development

## How can I customize a resulting TIFF file

There are a few ways

* Change its compression type with [ `TIFFCompressionType` ]({{site.info}}api/WebTwain_IO.html#tiffcompressiontype); 
* Specify whether it is multi-page or single-page with [ `IfTiffMultiPage` ]({{site.info}}api/WebTwain_IO.html#iftiffmultipage); 
* Set TIFF tags with [ `ClearTiffCustomTag()` ]({{site.info}}api/WebTwain_IO.html#cleartiffcustomtag) and [ `SetTiffCustomTag()` ]({{site.info}}api/WebTwain_IO.html#settiffcustomtag); 
