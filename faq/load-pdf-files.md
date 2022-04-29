---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I load PDF/A files into the Dynamic Web TWAIN SDK?
keywords: Dynamic Web TWAIN, Addon, load pdf/a
breadcrumbText: How can I load PDF/A files into the Dynamic Web TWAIN SDK?
description: How can I load PDF/A files into the Dynamic Web TWAIN SDK?
---

# Addon

## How can I load PDF/A files into the Dynamic Web TWAIN SDK?

You can use the PDF Rasterizer add-on which supports reading PDF/A images.

If the PDF Rasterizer add-on is used, the file will automatically be rasterized when it’s loaded to the viewer.

### When is PDF Rasterizer effective

Once `PDFR` has been configured, it will automatically detect if a file needs to be rasterized and if so, it will convert it to an image(s) with the set resolution(if no resolution is set, the default is 200). This happens when you call any of the following methods

> `PDFR` also works when you drag and drop the file onto the viewer to load it

- [ `LoadImage()` ]({{site.info}}api/WebTwain_IO.html#loadimage)
- [ `LoadImageEx()` ]({{site.info}}api/WebTwain_IO.html#loadimageex)
- [ `LoadImageFromBase64Binary()` ]({{site.info}}api/WebTwain_IO.html#loadimagefrombase64binary)
- [ `LoadImageFromBinary()` ]({{site.info}}api/WebTwain_IO.html#loadimagefrombinary)
- [ `FTPDownload()` ]({{site.info}}api/WebTwain_IO.html#ftpdownload)
- [ `FTPDownloadEx()` ]({{site.info}}api/WebTwain_IO.html#ftpdownloadex)
- [ `HTTPDownload()` ]({{site.info}}api/WebTwain_IO.html#httpdownload)
- [ `HTTPDownloadEx()` ]({{site.info}}api/WebTwain_IO.html#httpdownloadex)
- [ `HTTPDownloadThroughPost()` ]({{site.info}}api/WebTwain_IO.html#httpdownloadthroughpost)
- [ `HTTPDownloadDirectly()` ]({{site.info}}api/WebTwain_IO.html#httpdownloaddirectly)

You can also generate PDF/A files with our OCR add-on by setting the output format. Please refer to the FAQ: [generate PDF/A files]({{site.faq}}/generate-pdf-files.html)
