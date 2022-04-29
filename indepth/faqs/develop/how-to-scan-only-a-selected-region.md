---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Scan Only A Selected Region
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Scan Only A Selected Region
description: How To Scan Only A Selected Region
---

# Development

## How to scan only a selected region?

#### Set `PageSize`

``` javascript
DWObject.SelectSource(function() {
    DWObject.OpenSource();
    DWObject.IfShowUI = false;
    DWObject.PageSize = Dynamsoft.DWT.EnumDWT_CapSupportedSizes.TWSS_USLEGAL;
    DWObject.AcquireImage();
});
```

#### Set a layout with `SetImageLayout`

``` javascript
DWObject.SelectSource(function() {
    DWObject.OpenSource();
    DWObject.IfShowUI = false;
    DWObject.Unit = Dynamsoft.DWT.EnumDWT_UnitType.TWUN_INCHES;
    DWObject.SetImageLayout(0, 0, 5, 5);
    DWObject.AcquireImage();
});
```

