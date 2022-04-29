---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Can I Customize The WebTWAIN Instance(s)
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Can I Customize The WebTWAIN Instance(s)
description: How Can I Customize The WebTWAIN Instance(s)
---

# Development

## How can I customize the WebTWAIN instance(s)? 

The instances are defined by this line in `dynamsoft.webtwain.config.js`

``` javascript
Dynamsoft.DWT.Containers = [{
    ContainerId: 'dwtcontrolContainer',
    Width: '585px',
    Height: '513px'
}];
```

> Note that `Containers` is an array of the `Container` type

``` typescript
interface Container {
    WebTwainId?: string;
    ContainerId?: string;
    Width?: string | number;
    Height?: string | number;
}
```

`WebTwainId` and `ContainerId` are both optional but one must exist as the identifier for that `WebTwain` instance.

`Width` and `Height` determine the initial viewer size of the instance.

When instantiating with `Dynamsoft.DWT.Load` , `ContainerId` , `Width` and `Height` are required. `Dynamic Web TWAIN` will try to locate an HTML element with the id defined by `ContainerId` and use `Width` and `Height` as the viewer size.

To create multiple instances, simply provide multiple `Containers` , for example, the following creates two `WebTwain` instances

``` javascript
Dynamsoft.DWT.Containers = [{
    ContainerId: 'dwtcontrolContainer1',
    Width: '585px',
    Height: '513px'
}, {
    ContainerId: 'dwtcontrolContainer2',
    Width: '585px',
    Height: '513px'
}];
```
