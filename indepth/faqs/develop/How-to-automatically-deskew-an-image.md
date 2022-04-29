---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to automatically deskew an image
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to automatically deskew an image
description: How to automatically deskew an image
---

# Development

## How to automatically deskew an image

Generally, there are two ways to automatically deskew an image.

### Enable the capability of a scanner

> Applicable only to compatible [TWAIN scanners]({{site.getstarted}}hardware.html#twain-scanners)

There is a standard TWAIN capability called `ICAP_AUTOMATICDESKEW` which, when enabled, does the deskewing of all scanned images automatically. If your scanner supports this capability, you can enable the functionality through `Dynamic Web TWAIN` using the API [ `IfAutomaticDeskew` ]({{site.info}}api/WebTwain_Acquire.html#ifautomaticdeskew)

``` javascript
DWObject.OpenSource();
DWObject.IfAutomaticDeskew = true;
```

### Use Dynamic Web TWAIN to deskew an image as it is scanned

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
