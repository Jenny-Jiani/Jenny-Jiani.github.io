---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to insert images to a specified index
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to insert images to a specified index
description: How to insert images to a specified index
---

# Development

## How to insert images to a specified index

By default, when you scan or load images, they are appended to the end of the image array in buffer. However, in some business scenarios, the user might want to insert these new images to a specified index. Unfortunately, `Dynamic Web TWAIN` doesn't provide a native method for that. The following code snippet shows how it can be done

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
