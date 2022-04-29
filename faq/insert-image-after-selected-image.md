---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I insert an image after a selected image in the viewer?
keywords: Dynamic Web TWAIN, Image Viewer, insert after selected image, insert
breadcrumbText: How can I insert an image after a selected image in the viewer?
description: How can I insert an image after a selected image in the viewer?
---

# Image Viewer

## How can I insert an image after a selected image in the viewer?

By default, when you scan or load images, they are appended to the end of the image array in buffer. However, in some business scenarios, the user may want to insert these new images to a specified index. Unfortunately, Dynamic Web Twain does not provide a native method for that. The following code snippet shows how this functionality can be implemented.

<strong>1. Insert when acquiring</strong>

```javascript
function acquireToIndex(index) {
  DWObject.IfAppendImage = false;
  DWObject.CurrentImageIndexInBuffer = index;
  DWObject.RegisterEvent("OnPostTransfer", function () {
    DWObject.CurrentImageIndexInBuffer++;
  });
  DWObject.RegisterEvent("OnPostAllTransfers", function () {
    DWObject.IfAppendImage = true;
  });
  DWObject.AcquireImage();
}
```

<strong>2. Insert when loading</strong>

```javascript
function loadToIndex(index) {
  var oldCount = DWObject.HowManyImagesInBuffer;
  DWObject.RegisterEvent("OnPostLoad", function () {
    var newCount = DWObject.HowManyImagesInBuffer;
    for (var j = 0; j < newCount - oldCount; j++)
      DWObject.MoveImage(oldCount + j, index + j);
  });
  DWObject.LoadImageEx("", 5);
}
```
