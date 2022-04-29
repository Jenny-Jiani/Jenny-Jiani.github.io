---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I insert newly scanned pages to an existing document?
keywords: Dynamic Web TWAIN, Document Saving, insert new page to existing document
breadcrumbText: Can I insert newly scanned pages to an existing document?
description: Can I insert newly scanned pages to an existing document?
---

# Document Saving

## Can I insert newly scanned pages to an existing document?

By default, when you scan or load images, they are appended to the end of the image array in buffer. However, in some business scenarios, the user might want to insert these new images to a specified index.  

Unfortunately, Dynamic Web TWAIN does not provide a native method for that, but you can utilize  the property <a href="{{site.info}}api/WebTwain_IO.html#ifappendimage" target="_blank">IfAppendImage</a> to achieve it. You can load some images from your local disk first, and then acquire images from your device with IfAppendImage set to 'false'. 

The following code snippet shows how it can be done.

<strong>Insert when acquiring</strong>

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

<strong>Insert when loading</strong>

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
