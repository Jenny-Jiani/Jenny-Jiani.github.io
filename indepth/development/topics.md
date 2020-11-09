---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Development - Other Topics
keywords: Dynamic Web TWAIN, Documentation, Development, Other Topics
breadcrumbText: Other Topics
description: Dynamic Web TWAIN SDK Documentation Other Topics Page
---

# Topics

## How to automatically deskew an image

Generally, there are two ways to automatically deskew an image.

### Enable the capability of a scanner

> Applicable only to compatible [TWAIN scanners]({{site.getstarted}}hardware.html#twain-scanners)

There is a standard TWAIN capability called `ICAP_AUTOMATICDESKEW` which, when enabled, does the deskewing of all scanned images automatically. If your scanner supports this capability, you can enable the functionality through `DWT` using the API [ `IfAutomaticDeskew` ]({{site.info}}api/WebTwain_Acquire.html#ifautomaticdeskew)

``` javascript
DWObject.OpenSource();
DWObject.IfAutomaticDeskew = true;
```

### Use DWT to deskew an image as it is scanned

> The function `deskew()` below is applicable to all platforms. The event `OnPostTransferAsync` is only triggered during scanning

``` javascript
function deskew(index) {
    DWObject.GetSkewAngle(
        index,
        function(angle) {
            console.log("skew angle: " + angle);
            DWObject.Rotate(index, angle, true,
                function() {
                    console.log("Successfully deskewed an image!");
                },
                function(errorCode, errorString) {
                    console.log(errorString);
                }
            );
        },
        function(errorCode, errorString) {
            console.log(errorString);
        }
    );
}
DWObject.RegisterEvent("OnPostTransferAsync", function(info) {
    deskew(DWObject.ImageIDToIndex(info.imageId));
});
```

## How to insert images to a specified index

By default, when you scan or load images, they are appended to the end of the image array in buffer. However, in some business scenarios, the user might want to insert these new images to a specified index. Unfortunately, `DWT` doesn't provide a native method for that. The following code snippet shows how it can be done

### Insert when acquiring

``` javascript
function acquireToIndex(index) {

    DWObject.IfAppendImage = false;
    DWObject.CurrentImageIndexInBuffer = index;
    DWObject.RegisterEvent('OnPostTransfer', function() {
        DWObject.CurrentImageIndexInBuffer++;
    });
    DWObject.RegisterEvent('OnPostAllTransfers', function() {
        DWObject.IfAppendImage = true;
    });
    DWObject.AcquireImage();

}
```

### Insert when loading

``` javascript
function loadToIndex(index) {

    var oldCount = DWObject.HowManyImagesInBuffer;
    DWObject.RegisterEvent('OnPostLoad', function() {
        var newCount = DWObject.HowManyImagesInBuffer;
        for (var j = 0; j < newCount - oldCount; j++)
            DWObject.MoveImage(oldCount + j, index + j);
    });
    DWObject.LoadImageEx('', 5);

}
```

<!--

## How to achieve automation

* Event-driving workflow
* Next-gen API like `startScan`

https://www.dynamsoft.com/docs/dwt/KB/Dev-Customize.html

https://developer.dynamsoft.com/dwt/kb/2797

https://developer.dynamsoft.com/dwt/kb/2892

https://developer.dynamsoft.com/dwt/kb/2870

https://developer.dynamsoft.com/dwt/kb/2873
https://developer.dynamsoft.com/dwt/kb/2905

https://developer.dynamsoft.com/dwt/kb/develop-with-dynamic-web-twain/how-to-asynchronously-load-dynamsoft-webtwain-initate-js

https://developer.dynamsoft.com/dwt/kb/develop-with-dynamic-web-twain/About-document-scanning-performance-and-speed

https://developer.dynamsoft.com/dwt/kb/develop-with-dynamic-web-twain/performance-with-drag-to-load-in-dwt-14

https://developer.dynamsoft.com/dwt/kb/develop-with-dynamic-web-twain/how-to-change-the-default-ssl-certificates

https://developer.dynamsoft.com/dwt/kb/distribution-deployment/bypass-proxy-server-for-local-addresses
https://developer.dynamsoft.com/dwt/kb/trouble-shooting-for-end-users/the-install-popup-shows-up-if-6-or-more-web-twain-object-are-opened-on-ie
-->
