---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Do You Use Capability Negotiation
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Use Capability Negotiation
description: How Do You Use Capability Negotiation
---

# Development

## How do you use Capability Negotiation? 

> This feature is only available for <a href="{{site.getstarted}}hardware.html#twain-scanners" target="_blank">TWAIN scanners</a>.

**A**: Capability Negotiation is the way a TWAIN application communicates with a TWAIN source. This is how `Dynamic Web TWAIN` communicates with a scanner. The process looks something like this:

* [Dynamic Web TWAIN] Are you capable of ***?
* [Scanner] Yes, and here is what I can do...
* [Dynamic Web TWAIN] Great, here is what I want done...
* [Scanner] Consider it done


`Dynamic Web TWAIN` provides two methods, <a href="{{site.info}}api/WebTwain_Acquire.html#getcapabilities" target="_blank">`getCapabilities()`</a> and <a href="{{site.info}}api/WebTwain_Acquire.html#setcapabilities" target="_blank">`setCapabilities()`</a> , for negotiation. The following shows how to ask for supported page sizes and set it to A4 using Capability Negotiation.

##### Ask for supported sizes

``` javascript
DWObject.getCapabilities(function(result) {
    for (var i = 0; i < result.length; i++) {
        if (result[i].capability.value === Dynamsoft.DWT.EnumDWT_Cap.ICAP_SUPPORTEDSIZES)
            sizes = result[i].values;
    }
    console.log(sizes);
}, function(error) {
    console.log(error);
});
```

##### Set page size to A4

``` javascript
DWObject.setCapabilities({
        exception: "ignore",
        capabilities: [{
            capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_SUPPORTEDSIZES,
            curValue: 1, // 1 means 'A4' in our case
            exception: "fail"
        }]
    },
    function(result) {
        console.log(result)
    },
    function(error) {
        console.log(error);
    }
);
```
