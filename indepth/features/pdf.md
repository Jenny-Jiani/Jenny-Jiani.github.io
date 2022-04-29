---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - Handle PDF
keywords: Dynamic Web TWAIN, Documentation, Handle PDF
breadcrumbText: Handle PDF
description: Dynamic Web TWAIN SDK Documentation Handle PDF Page
---

# PDF Handling 

PDFs are widely used in many and various industries, and presently are the only non-image file type that `DWT` supports. In this next section, we will address all the input and output operations that allow the user to properly handle PDF files.

## Environment

* Supported on [Desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [Mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices).

* Available in both [Service mode]({{site.indepth}}features/initialize.html#service-mode) and [WASM mode]({{site.indepth}}features/initialize.html#wasm-mode).

## Including the PDF addon 

To include the PDF addon, simply add a reference to the corresponding JavaScript file, included in the [resources folder]({{site.about}}faqs.html#what-are-the-resources-files).

``` html
<script src="Resources/addon/dynamsoft.webtwain.addon.pdf.js"></script>
```

> If you are using the [dwt package](https://www.npmjs.com/package/dwt), the pdf addon is already included in the main JavaScript file ( `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` ) which means you can skip this step.

## Input

### Open an image-only PDF file

When loading in a PDF file, `DWT` tries to extract images from that file, which is why the SDK can handle image-based PDF documents by default. 

### Open a searchable PDF file

However, most existing PDF files contain much more than just images. For image-and-text PDF files, we need to make use of the PDF Rasterizer (`PDFR` for short), the main component of the PDF addon.

> How PDFR works: As the name suggests, `PDFR` rasterizes a PDF file page by page much like a scanner. You set a resolution, and you get the resulting images in that resolution after the rasterization. 

The following code shows the basic usage

``` javascript
var onSuccess = function() {
    console.log("Loaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.IfShowFileDialog = true;
// PDF Addon is used here to ensure text-based PDF support
DWObject.Addon.PDF.SetResolution(300);
DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
DWObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL, onSuccess, onFailure);
```

The method [ `SetConvertMode()` ]({{site.info}}api/Addon_PDF.html#setconvertmode) decides how `PDFR` works and [ `SetResolution()` ]({{site.info}}api/Addon_PDF.html#setresolution) specifies the resolution. These two methods configure `PDFR` to detect and, if necessary, rasterize any PDF file that comes thereafter.

#### Sample code

See full sample <a href="https://github.com/Dynamsoft/Dynamic-Web-TWAIN/blob/master/samples/4.PDFRasterizer.html" target="_blank">here</a>.

#### Other methods

* [ `GetConvertMode()` ]({{site.info}}api/Addon_PDF.html#getconvertmode): This method returns the current convert mode.
* [ `SetPassword()` ]({{site.info}}api/Addon_PDF.html#setpassword): This method sets a password which is used to open encrypted PDF file(s).

## Output as PDF

### Save images as image-based PDFs

`DWT` can output one or multiple images in the buffer as image-based PDF file(s). This feature is built into the core module, and no addon is required as was covered in the [output]({{site.indepth}}features/output.html) section.

### PDF save settings

However, some advanced features are only possible with the help of the PDF addon. At present, that means configuring the resulting file(s) with the API [ `Write.Setup()` ]({{site.info}}api/Addon_PDF.html#writesetup) as shown below

``` javascript
DWObject.Addon.PDF.Write.Setup({
    author: "Dynamsoft-Support-Team",
    compression: Dynamsoft.DWT.EnumDWT_PDFCompressionType.PDF_JP2000,
    pageType:Dynamsoft.DWT.EnumPDF_Page_A4,
    creator: "DWT",
    creationDate: "D:20200930",
    keyWords: "TWAIN, DWT, Dynamsoft",
    modifiedDate: "D:20200930",
    producer: "Dynamsoft Corporation",
    subject: "Demoing File",
    title: "Sample PDF Made by DWT",
    version: 1.5,
    quality: 80
});
DWObject.IfShowFileDialog = true;
DWObject.SaveAllAsPDF(' ', function() {}, function() {})
```

Note: Only the core module license is required to use this method.
