---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Where Can I Get The WebTWAIN Instance(s)
keywords: Dynamic Web TWAIN, Documentation, Develop 
breadcrumbText: Where Can I Get The WebTWAIN Instance(s)
description: Where Can I Get The WebTWAIN Instance(s)
---

# Development

## Where Can I Get The WebTWAIN Instance(s)? 

When `Load` is called, `Dynamic Web TWAIN` tries to create the `WebTwain` instances. Once it's done, `Dynamic Web TWAIN` triggers the built-in callback `Dynamsoft.DWT.OnWebTwainReady` in which the method [ `Dynamsoft.DWT.GetWebTwain` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#getwebtwain) can be used to get the handler(s) of the instance(s). For simplicity, the `OnWebTwainReady` callback points to a global function called `Dynamsoft_OnReady` . The following snippets are equivalent

Snippet one

``` javascript
Dynamsoft.DWT.OnWebTwainReady = function() {
    DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
}
```

Snippet two

``` javascript
Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);
function Dynamsoft_OnReady() {
    DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
}
```
