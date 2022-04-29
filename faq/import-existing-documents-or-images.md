---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I import existing images or PDF documents using the Dynamic Web TWAIN SDK?
keywords: Dynamic Web TWAIN, Capture/ Image Source, import, exisiting images
breadcrumbText: Can I import existing images or PDF documents using the Dynamic Web TWAIN SDK?
description: Can I import existing images or PDF documents using the Dynamic Web TWAIN SDK?
---

# Capture/Image Source

## Can I import existing images or PDF documents using the Dynamic Web TWAIN SDK?

Yes, Dynamic Web TWAIN supports loading PNG, JPG, BMP, image-only PDF, and TIFF files. But if you need to support text-based PDF files, you also require the <a href="https://www.dynamsoft.com/web-twain/pdf-to-image-javascript/" target="_blank">PDF Rasterizer Addon</a>. See more <a href="https://www.dynamsoft.com/web-twain/docs/indepth/features/pdf.html?ver=latest#input" target="_blank">here</a>.

**Code snippet**

```javascript
var onSuccess = function() {
    console.log("Loaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.IfShowFileDialog = true;
// PDF Rasterizer Addon is used here to ensure text-based PDF support
DWObject.Addon.PDF.SetResolution(300);
DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
DWObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL, onSuccess, onFailure);
```
