---
layout: default-layout
needAutoGenerateSidebar: true
noTitleIndex: true
title: Dynamic Web TWAIN Schedule - Deprecated Features
keywords: Dynamic Web TWAIN, Documentation, Schedule, Deprecated Features
breadcrumbText: Deprecated
description: Dynamic Web TWAIN SDK Documentation Deprecated Features Page
---

# All Deprecated Features & APIs

## Future deprecation planned

### SHA-1 signatures

To comply with Windows security updates, we will deprecate SHA-1 signatures in a future version. The impact is described below (we take 64bit Windows 7 as an example in below screenshots).

*If the deprecation is implemented:*

* When you try to install the Dynamsoft Service, you will get the following two error for "Unknown Publisher".

![Deprecation-1]({{site.assets}}imgs/Deprecation-1.png)

![Deprecation-2]({{site.assets}}imgs/Deprecation-2.png)

* When you run the ActiveX Edition in IE, you will get a prompt to allow its execution.

![Deprecation-3]({{site.assets}}imgs/Deprecation-3.png)

For more information, check out [Preparing for the deprecation of SHA-1 signatures](https://docs.microsoft.com/en-us/sysinternals/announce/sha1deprecation) from Microsoft.

The prompts are one-time, once you accept the "risk", the software will install and run as usual.

The recommended fix is to patch the operating system, you can find the patch [here](http://www.catalog.update.microsoft.com/search.aspx?q=kb4474419).

## New deprecations in 16.2 

* Internet Explorer 8 is no longer supported.

* Check out the [Viewer related API changes in version 16.2]({{site.info}}api/appendix.html#viewer-related-api-changes-in-version-162).

## As of version 16.1.1.

### Related to TWAIN Capability Negotiation

> [Alternative] Use [getCapabilities()]({{site.info}}api/WebTwain_Acquire.html#getcapabilities) and [setCapabilities()]({{site.info}}api/WebTwain_Acquire.html#setcapabilities) instead.

* [CapGet()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGet) 
* [CapGetHelp()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetHelp)
* [CapGetCurrent()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetCurrent) 
* [CapGetDefault()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetDefault)
* [CapGetFrameBottom()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetFrameBottom) 
* [CapGetFrameLeft()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetFrameLeft)
* [CapGetFrameRight()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetFrameRight) 
* [CapGetFrameTop()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetFrameTop)
* [CapGetLabel()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetLabel) 
* [CapGetLabels()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapGetLabels)
* [CapSet()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapSet) 
* [CapReset()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapReset)
* [CapSetFrame()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapSetFrame) 
* [CapIfSupported()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapIfSupported)
* [GetCapItems()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#GetCapItems) 
* [GetCapItemsString()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#GetCapItemsString)
* [SetCapItems()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#SetCapItems) 
* [SetCapItemsString()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#SetCapItemsString)
* [Capability](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#Capability) 
* [CapNumItems](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapNumItems)
* [CapMaxValue](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapMaxValue) 
* [CapMinValue](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapMinValue)
* [CapCurrentValue](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapCurrentValue) 
* [CapCurrentIndex](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapCurrentIndex)
* [CapDefaultValue](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapDefaultValue) 
* [CapDefaultIndex](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapDefaultIndex)
* [CapType](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapType) 
* [CapValueType](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapValueType)
* [CapStepSize](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapStepSize)
* [CapValue](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapValue) 
* [CapValueString](https://www.dynamsoft.com/docs/dwt15.3.1/API/Capability-Negotiation.html#CapValueString)

### Related to Buffer Management

> [Alternative] Use [SelectedImagesIndices]({{site.info}}api/WebTwain_Buffer.html#selectedimagesindices), [SelectAllImages()]({{site.info}}api/WebTwain_Buffer.html#selectallimages) and [SelectImages()]({{site.info}}api/WebTwain_Buffer.html#selectimages) instead.

* [GetSelectedImageIndex()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Runtime-Info.html#GetSelectedImageIndex) 
* [SetSelectedImageIndex](https://www.dynamsoft.com/docs/dwt15.3.1/API/Basic-Edit.html#SetSelectedImageIndex)
* [SelectedImagesCount](https://www.dynamsoft.com/docs/dwt15.3.1/API/Runtime-Info.html#SelectedImagesCount)

### Related to Image Editing

> [Alternative] Annotation feature to be added in a later version.

* [AddText()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Basic-Edit.html#AddText) 
* [CreateTextFont()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Basic-Edit.html#CreateTextFont)
* [OverlayRectangle()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Basic-Edit.html#OverlayRectangle)

### Related to Input and Output

> [Alternative] Use new methods like [ConvertToBase64()](({{site.info}}api/WebTwain_IO.html#converttobase64), [ `PDF.Write.Setup()` ](({{site.info}}api/Addon_PDF.html#writesetup)

* [SaveSelectedImagesToBase64Binary()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Load-Save.html#SaveSelectedImagesToBase64Binary) 
* SetCookie()
* [IfOpenImageWithGDIPlus](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#IfOpenImageWithGDIPlus)
* [PDFAuthor](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFAuthor) 
* [PDFCompressionType](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFCompressionType)
* [PDFCreationDate](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFCreationDate) 
* [PDFCreator](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFCreator)
* [PDFKeywords](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFKeywords) 
* [PDFModifiedDate](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFModifiedDate)
* [PDFProducer](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFProducer) 
* [PDFSubject](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFSubject)
* [PDFTitle](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFTitle) 
* [PDFVersion](https://www.dynamsoft.com/docs/dwt15.3.1/API/Encode-Decode.html#PDFVersion)
* MaxInternetTransferThreads

### Related to Viewer

> [Alternative] Use methods like [Viewer.setViewMode()]({{site.info}}api/WebTwain_Viewer.html#setviewmode), [Viewer.setViewMode()]({{site.info}}api/WebTwain_Viewer.html#setviewmode)

* [SetViewMode()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Display-UI.html#SetViewMode) 
* [SetSelectedImageArea()](https://www.dynamsoft.com/docs/dwt15.3.1/API/Basic-Edit.html#SetSelectedImageArea)
