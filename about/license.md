---
layout: default-layout
needAutoGenerateSidebar: true
noTitleIndex: true
title: Dynamic Web TWAIN License
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: License
description: Dynamic Web TWAIN SDK Documentation License Page
---

# License

## Terms


View the [Dynamic Web TWAIN License Agreement](https://www.dynamsoft.com/Products/WebTwain_license.aspx).

## Questions

### Q: When is a license validated?

**A**: `DWT` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). For individual modules, such as the PDF Rasterizer, or the Barcode Reader, the add-on license is validated when the respective add-on api is invoked.

### Q: How do I set my DWT license?

**A**: The `DWT` license is set using the global API `Dynamsoft.WebTwainEnv.ProductKey`. For more information, please refer to [Update the License Key]({{site.indepth}}development/upgrade.html#update-the-license-key).
