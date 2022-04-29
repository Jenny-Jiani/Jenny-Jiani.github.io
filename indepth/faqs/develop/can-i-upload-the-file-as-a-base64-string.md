---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Upload The File As A Base64 String
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Upload The File As A Base64 String
description: Can I Upload The File As A Base64 String
---

# Development

## Can I upload the file as a base64 string?

Yes, the 4th parameter of the method `HTTPUpload()` is `dataFormat` and it has two allowed values which are `Dynamsoft.DWT.EnumDWT_UploadDataFormat.Binary` and `Dynamsoft.DWT.EnumDWT_UploadDataFormat.Base64` . The code snippet uses the former but you can feel free to use the latter to upload the file as a base64 string.
