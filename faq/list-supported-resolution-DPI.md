---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I get a list of supported resolution/DPI values from the document scanner?
keywords: Dynamic Web TWAIN, Capture/ Image Source, supported resolution, DPI
breadcrumbText: How can I get a list of supported resolution/DPI values from the document scanner?
description: How can I get a list of supported resolution/DPI values from the document scanner?
---

# Capture/Image Source

## How can I get a list of supported resolution/DPI values from the document scanner?

You can use capability negotiation to get all the resolutions supported by the scanner.

Steps:

- Step-1: Use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#getcapabilities" target="_blank">getCapabilities</a> to get all capabilities of the current data source,

```javascript
DWObject.OpenSource();
DWObject.getCapabilities(
  function () {
    console.log(arguments);
  },
  function (error) {
    console.log(error);
  }
);
```

and then find the capability corresponding to the resolution. Normally, it is called ICAP_XRESOLUTION.

![Capability Resolution]({{site.assets}}imgs/capability-resolution.png)

- Step-2: Call the following code to get all the resolutions supported by the scanner.

```javascript
DWObject.OpenSource();
DWObject.getCapabilities(
  function (result) {
    for (var i = 0; i < result.length; i++) {
      if (
        result[i].capability.value ===
        Dynamsoft.DWT.EnumDWT_Cap.ICAP_XRESOLUTION
      )
        dpi = result[i].values;
    }
    console.log(dpi);
  },
  function (error) {
    console.log(error);
  }
);
```
