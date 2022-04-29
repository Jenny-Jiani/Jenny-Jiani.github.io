---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to improve the OCR accuracy
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to improve the OCR accuracy
description: How to improve the OCR accuracy
---

# Development

## How to improve the OCR accuracy

There are several ways to improve the OCR accuracy, they involve either adjusting the scanner settings or choosing high-quality source files.

* Adjust resolution -- 300DPI is usually recommended
* Adjust color of scanned document - greyscale is recommended
* Adjust brightness settings. You would use the [Brightness]({{site.info}}api/WebTwain_Acquire.html#brightness) property for this. A 50% brightness is usually suitable
* File type and compression - Lossless compression types would be the better option (i.e. `TIFF` or `PNG` but not `JPEG` )

> For more elaboration, please see our [blog post](https://www.dynamsoft.com/blog/insights/scan-settings-for-best-ocr-accuracy/) on the matter.
