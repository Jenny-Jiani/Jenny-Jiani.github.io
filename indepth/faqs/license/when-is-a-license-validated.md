---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: When is a license validated? 
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: When Is A License Validated
description: When is a license validated? 
---

# License

## When is a license validated? 

`Dynamic Web TWAIN` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). For individual modules, such as the PDF Rasterizer, or the Barcode Reader, the add-on license is validated when the respective add-on api is invoked.
