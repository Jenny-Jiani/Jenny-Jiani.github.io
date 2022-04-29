---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Exclude WIA Sources In The Source List
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Exclude WIA Sources In The Source List
description: How To Exclude WIA Sources In The Source List
---

# Development

## How to exclude WIA sources in the source list? 

> Applicable to Windows only

There are two ways to achieve this:

Way 1. Set `IfUseTwainDSM` to `true`

``` javascript
DWObject.IfUseTwainDSM = true;
```

Way 2. Filter sources before listing them

``` javascript
var sources = DWObject.GetSourceNames();
for (var i = 0; i < sources.length; i++) {
    if (sources[i].toLowerCase().indexOf('epson') != -1) {
        sources.splice(i, 1);
    }
}
```

