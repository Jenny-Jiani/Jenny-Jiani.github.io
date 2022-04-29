---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Change The Fields Of The HTTP Form
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Change The Fields Of The HTTP Form
description: Can I Change The Fields Of The HTTP Form
---

# Development

## Can I change the fields of the HTTP form? 

 Yes, you can use the method [ `SetHTTPFormField()` ]({{site.info}}api/WebTwain_IO.html#sethttpformfield) to add extra fields to the form. In <a href="{{site.indepth}}faqs/develop/can-i-upload-multiple-images-as-separate-files-in-one-go.html" target="_blank">this KB</a>, the method is used to add files to the form. But you can also use the method to add extra text information to the form as shown below

``` javascript
// Clear old fields before adding new ones
DWObject.ClearAllHTTPFormField();
DWObject.SetHTTPFormField("FileType", "Insurance Doc");
```
