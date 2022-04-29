---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Limit The Size Of The Uploaded File
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Limit The Size Of The Uploaded File
description: Can I Limit The Size Of The Uploaded File
---

# Development

## Can I limit the size of the uploaded file? 

 Yes, you can set the limit (in bytes) using the API [ `MaxUploadImageSize` ]({{site.info}}api/WebTwain_IO.html#maxuploadimagesize). After that, `Dynamic Web TWAIN` will refuse to perform an upload should the size of the file exceeds the limit.

> NOTE 
>  
> The API `MaxUploadImageSize` doesn't limit other fields of the upload. Therefore, if you append a very big string as a field or perhaps a few big *Blobs* as files, they will not be limited.
