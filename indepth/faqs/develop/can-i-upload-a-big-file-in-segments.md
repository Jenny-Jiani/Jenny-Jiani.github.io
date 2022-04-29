---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Upload A Big File In Segments
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Upload A Big File In Segments
description: Can I Upload A Big File In Segments
---

# Development

## Can I upload a big file in segments? 

 Yes, when the file to upload is quite large, you can use the method [ `SetUploadSegment()` ]({{site.info}}api/WebTwain_IO.html#setuploadsegment) to configure a segmented upload operation

``` javascript
// For a file bigger than 1 MB, upload it in 500-KB segments 
DWObject.SetUploadSegment(1, 500);
```

For segmented upload, the server-side script is quite different. Check out how it is done in C# [here]({{site.indepth}}development/Server-script.html#segmented-upload).
