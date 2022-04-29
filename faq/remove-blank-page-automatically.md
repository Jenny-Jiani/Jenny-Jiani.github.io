---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can the Dynamic Web TWAIN SDK automatically remove blank pages during the document scanning process?
keywords: Dynamic Web TWAIN, Capture/ Image Source, detect, discard blank pages
breadcrumbText: Can the Dynamic Web TWAIN SDK automatically remove blank pages during the document scanning process?
description: Can the Dynamic Web TWAIN SDK automatically remove blank pages during the document scanning process?
---

# Capture/Image Source

## Can the Dynamic Web TWAIN SDK automatically remove blank pages during the document scanning process?

### Method One

If the TWAIN driver of your device supports discarding blank pages, you can use the driver's built-in feature.

1. You can set the [ `IfShowUI` ]({{site.info}}api/WebTwain_Acquire.html#ifshowui) property to true to display the User Interface (UI) of the source and you can check the option there (It normally reads 'discard blank'.).
2. If you don't want to show the user interface of the source, you can set [ `IfAutoDiscardBlankpages` ]({{site.info}}api/WebTwain_Acquire.html#ifautodiscardblankpages) to true or negotiate the ICAP_AUTODISCARDBLANKPAGES capability to discard blank pages automatically. Please NOTE that this property or capability only works if the scanner itself supports the feature (on the hardware level).

```javascript
DWObject.SelectSource();
DWObject.OpenSource;
DWObject.IfShowUI = false;
//*Use the property
DWObject.IfAutoDiscardBlankpages = true;
//*Use capability negotiation
DWObject.Capability = Dynamsoft.DWT.EnumDWT_Cap.ICAP_AUTODISCARDBLANKPAGES;
DWObject.CapType = Dynamsoft.DWT.EnumDWT_CapType.TWON_ONEVALUE;
DWObject.CapValue = -1; //Auto
if (DWObject.CapSet) {
  alert("Successful!");
}
DWObject.AcquireImage();
```

### Method Two

If the scanner itself doesn't support discarding blank pages, you can also use the [ `IsBlankImageExpress` ]({{site.info}}api/WebTwain_Buffer.html#isblankimageexpress) method to do this as a workaround. To detect and discard blank pages automatically, you can do it in the [ `OnPostTransfer` ]({{site.info}}api/WebTwain_Acquire.html#onposttransfer) event which fires after each transfer.

```javascript
function DWObject_OnPostTransfer() {
  DWObject.BlankImageMaxStdDev = 20;
  if (DWObject.IsBlankImageExpress(DWObject.CurrentImageIndexInBuffer)) {
    DWObject.RemoveImage(DWObject.CurrentImageIndexInBuffer);
  }
}
```

NOTE: In many cases, the scanned blank image may come with some noises which would affect the result returned by IsBlankImageExpress. To improve the result, you may adjust the value of the [ `BlankImageMaxStdDev` ]({{site.info}}api/WebTwain_Buffer.html#blankimagemaxstddev) property. The default value is 1 (0 means single-color image). Thus, by increasing the value a little bit (e.g. to 20), noises on images are ignored so a blank image can be detected faster.
