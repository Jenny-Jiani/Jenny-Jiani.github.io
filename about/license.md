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

Dynamic Web TWAIN has the following licensing options:

### [Per Browser Client](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client)/ [Per Page](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_page)

For Per Browser Client/ Per Page license, you need to use [handshakeCode]({{site.info}}api/Dynamsoft_WebTwainEnv.html#handshakecode) to set.

``` javascript
Dynamsoft.DWT.handshakeCode = "DynamsoftID-CustomCode";
```

Please note that this licensing mode is only supported from `DWT` 17.0 and needs to be used with License Tracking Server (`LTS` for short). See more about [What is a LTS](https://www.dynamsoft.com/license-tracking/docs/selfhosting/managelts.html?ver=latest)

LTS supports two deployment methods: [Dynamsoft-hosting](https://www.dynamsoft.com/license-tracking/docs/dshosting/index.html?ver=latest) and [Self-hosting](https://www.dynamsoft.com/license-tracking/docs/selfhosting/index.html?ver=latest). See [How secure is the License Tracking Server](https://www.dynamsoft.com/license-tracking/docs/about/licensefaq.html?ver=latest#how-secure-is-the-license-tracking-server)

### [Per Server License](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_server)

For [Per Server License](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client) license, you need to use [ProductKey]({{site.info}}api/Dynamsoft_Util.html#productkey) to set.

In most cases, you can just make the change in the file `dynamsoft.webtwain.config.js` .

``` javascript
// If you have multiple license keys, just separate them with semicolons.
Dynamsoft.DWT.ProductKey = 't0076lQAAAGNcO61He******; t0076lQAAAGNcO61He******';
```

If it is set elsewhere, you need to find it and replace it. For example, if you are making use of the [dwt package](https://www.npmjs.com/package/dwt) ( `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` ), the file `dynamsoft.webtwain.config.js` doesn't exist and you should already have the above line of code in your own JavaScript where you can update the license when needed.

### Other Licenses

The license setting way is the same as Per Server License, please refer to the above Per Server License section.

## Notes:
Please note that `LTS` license handshakeCode and ProductKey cannot be used together. And you need to connect to `LTS` to track license usage. 

All license usage data is submitted to the `LTS` hosted by Dynamsoft. You can

* [View activated license items](https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html)
* [View the license usage statistics](https://www.dynamsoft.com/license-tracking/docs/common/statistics.html)
* [Get notified about license status](https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html)

> Read more about [the mechanism](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html) behind license tracking.

## Terms

View the [Dynamic Web TWAIN License Agreement](https://www.dynamsoft.com/Products/WebTwain_license.aspx).

## Questions

### Q: When is a license validated?

**A**: `DWT` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). For individual modules, such as the PDF Rasterizer, or the Barcode Reader, the add-on license is validated when the respective add-on api is invoked.

### Q: How do I set my DWT license?

**A**: The `DWT` license is set using the global API `Dynamsoft.DWT.ProductKey` or `Dynamsoft.DWT.handshakeCode`. For more information, please refer to [Update the License Key]({{site.indepth}}development/upgrade.html?ver=latest#update-the-product-key).
