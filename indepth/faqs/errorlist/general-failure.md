---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: General failure
keywords: Dynamic Web TWAIN, Documentation, ErrorList
breadcrumbText: General failure
description: General failure
---

# ErrorList

## General failure

- Symptom

When you try scanning an image with Dynamic Web TWAIN, you may receive the error message "General failure" in the ErrorString property.

- Cause

The problem occurs when the source (scanner) is _not_ disabled completely after a scanning session or the source is currently unavailable.

- Resolution

You can call <a href="{{site.info}}api/WebTwain_Acquire.html#closesource" target="_blank">CloseSource</a> & <a href="{{site.info}}api/WebTwain_Acquire.html#closesourcemanager" target="_blank">CloseSourceManager</a> to close the source before <a href="{{site.info}}api/WebTwain_Acquire.html#selectsource" target="_blank">SelectSource</a>.

```javascript
function AcquireImage() {
  DWObject.CloseSource();
  DWObject.CloseSourceManager();
  DWObject.SelectSource();
  DWObject.OpenSource();
  DWObject.AcquireImage();
}
```
