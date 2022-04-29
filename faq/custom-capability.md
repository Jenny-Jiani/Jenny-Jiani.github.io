---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I use a custom capability of my scanner hardware when there is no direct API to set it?
keywords: Dynamic Web TWAIN, Capture/ Image Source, custom capability
breadcrumbText: How can I use a custom capability of my scanner hardware when there is no direct API to set it?
description: How can I use a custom capability of my scanner hardware when there is no direct API to set it?
---

# Capture/Image Source

## How can I use a custom capability of my scanner hardware when there is no direct API to set it?

You can use Capability Negotiation to set it. Capability Negotiation is the way a TWAIN application communicates with a TWAIN source. This is how Dynamic Web TWAIN communicates with a scanner. The process looks something like this:

- [Dynamic Web TWAIN] Are you capable of \*\*\*?
- [Scanner] Yes, and here is what I can do…
- [Dynamic Web TWAIN] Great, here is what I want done…
- [Scanner] Consider it done

The steps are:

- Step-1 - Use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#getcapabilities" target="_blank">getCapabilities</a> to find the capability you want to set.

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

- Step-2 - Use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#setcapabilities" target="_blank">setCapabilities</a> to set the capability.

```javascript
DWObject.setCapabilities(
  {
    exception: "ignore",
    capabilities: [
      {
        capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_CONTRAST,
        curValue: 500, // set the contrast to 500
        exception: "fail",
      },
    ],
  },
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
```
