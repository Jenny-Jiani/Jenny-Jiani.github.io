---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Development - Upgrade Guide
keywords: Dynamic Web TWAIN, Documentation, Development, Upgrade Guide
breadcrumbText: Upgrade Guide
description: Dynamic Web TWAIN SDK Documentation Upgrade Guide Page
---

# Upgrade

This upgrade section talks about how to upgrade Dynamic Web TWAIN to the latest version. 

#### IMPORTANT

Please be aware of the following namespace changes introduced in version 17.0.

| v17.0+ |v16.2- |
|:-|:-|
|`Dynamsoft.DWT` |`Dynamsoft.WebTwainEnv`|
|`Dynamsoft.DWT.EnumDWT_` |`Dynamsoft.EnumDWT_`|
|`Dynamsoft.DBR.EnumBarcodeFormat` |`Dynamsoft.EnumBarcodeFormat`|

More barcode enumeration can be found <a href="https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/enum/EnumBarcodeColourMode.html?ver=latest" target="_blank">here</a>

Please review our <a href="{{site.info}}schedule/stable.html" target="_blank">changelog</a> for all breaking changes.

Please refer to <a href="{{site.info}}schedule/deprecated.html" target="_blank">this list</a> for all deprecated features.

## Update the resources files

The resources files refer to the Resources folder in the installation directory, C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK 17.0. For more details, you can check <a href="{{site.indepth}}faqs/general/what-are-the-resources-files.html" target="_blank">here</a>

### Regular Web application 

#### Uninstall the old version

* **Windows**: Search `Dynamic Web TWAIN` in `Control Panel -> Programs and Features` , and remove all the relevant components there.

* **macOS**: Execute `Applications > Dynamsoft > Dynamic Web TWAIN SDK {Version Number} > Uninstall.pkg`

#### Install the new version

You can use the <a href="{{site.about}}resources.html#how-to-get-dwt" target="_blank"> official installer</a> to install the new verion.

<a href="https://www.dynamsoft.com/web-twain/downloads" class="downloadBtn fr textUpperCase">Download SDK</a>

#### Replace the resources files

If you haven't renamed the official folder, the resources files should reside in a folder named "Resources". In this step, copy the new resources files and replace the old ones. The new files are typically found in the following location after the installation

* **Windows**: `C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK {Version Number}\`
* **macOS**: `Applications > Dynamsoft > Dynamic Web TWAIN SDK {Version Number}`

### Applications that make use of the `dwt` package

If your application uses a framework or library like `Angular` , `React` , `Vue` , etc., the upgrade is easier as you just need to install the new version to replace the old one. For example

``` cmd
npm install dwt
```

or 

``` cmd
yarn add dwt
```

You may want to update the types definition as well

``` cmd
npm install @types/dwt
```

or 

``` cmd
yarn add @types/dwt
```

## Update the Product Key

The Product Key needs to be updated when your current license is no longer valid (expired, for example) or when you upgrade across major versions. The Product Key is set using the global API `Dynamsoft.DWT.ProductKey` and the change is only effective before <a href="{{site.indepth}}features/initialize.html#creating-the-webtwain-instance" target="_blank">creating `WebTwain` instances</a> 

In most cases, you can just make the change in the file `dynamsoft.webtwain.config.js` .

``` javascript
// If you have multiple license keys, just separate them with semicolons.
Dynamsoft.DWT.ProductKey = 't0076lQAAAGNcO61He******; t0076lQAAAGNcO61He******';
```

If it is set elsewhere, you need to find it and replace it. For example, if you are making use of the [dwt package](https://www.npmjs.com/package/dwt) (`dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs`), the file `dynamsoft.webtwain.config.js` doesn't exist and you should already have the above line of code in your own JavaScript where you can update the license when needed.

But if you are using <a href="https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client" target="_blank">Per Client Device License </a>,  you need to use <a href="{{site.info}}api/Dynamsoft_WebTwainEnv.html#organizationid" target="_blank">organizationID</a>

``` javascript
Dynamsoft.DWT.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID. 
//Note: organizationID and ProductKey cannot be used together
```

Please note that this licensing model is only supported from `DWT` 17.0 and needs to be used with Dynamsoft License Server (`DLS` for short). See more about <a href="https://www.dynamsoft.com/license-server/docs/about/terms.html?ver=latest#dynamsoft-license-server" target="_blank">What is a DLS</a>

## Update `Dynamsoft Service` on the client-side 

### Service mode

 Starting in version 16.*, `Dynamsoft Service` is designed to be backward compatible (unfortunately, just as far back as 16.0). The compatibility is done in two ways

* For minor versions like 16.1 to 16.2, if the newer version of `Dynamsoft Service` has been installed on a desktop, websites utilizing both the newer version and the older version can work without reinstallation of `Dynamsoft Service`
* For major versions like 16.* to 17.*, the newer version will be installed to a different directory which can coexist with the service directory of the old version. The user can choose to uninstall the old version if necessary

That means, once you, as the maintainer, have finished upgrading your application to a newer `Dynamic Web TWAIN` on the server side, the clients could face one of two situations

* If the clients have installed the same or even newer minor version of `Dynamsoft Service` themselves (probably from another application that uses `Dynamic Web TWAIN` ), they don't need to do anything; 
* If the clients never installed `Dynamsoft Service` or have an older version or a different new major version of it, they will be required to do a reinstallation of `Dynamsoft Service`. The process is described <a href="{{site.indepth}}deployment/service.html#how-to-install-dwt" target="_blank">here</a> 

### WASM mode

By comparison, if `Dynamic Web TWAIN` runs only in the <a href="{{site.indepth}}features/initialize.html#wasm-mode" target="_blank">WASM mode</a>, the clients don't need to install anything themselves as the <a href="{{site.getstarted}}platform.html#wasm-browsers" target="_blank">WASM browsers</a> will take care of the upgrade process. What the clients may encounter is a slower-than-usual page load when they visit the application for the first time after the upgrade.

Once upgraded, the old WASM files will continue to exist in the browser as cached data until it's purged by the browser or by the user.

## Other Topics

### Expand your application to mobile platforms

If you are upgrading to version 17 for mobile functionality (basically, `DWT` in <a href="{{site.indepth}}features/initialize.html#wasm-mode" target="_blank">WASM mode</a>, there are some considerations to be made. As mobile support is one of the newest offerings from Dynamsoft, not all of the old `DWT` features are fully available at present. That said, we are constantly working on increasing the supported mobile feature set, so we recommend reviewing our <a href="{{site.info}}schedule/stable.html" target="_blank">release notes</a>, and if you have any questions, contact <a href="{{site.about}}getsupport.html" target="_blank">Dynamsoft Support</a> 

As an example for how some existing `DWT` features will work on <a href="{{site.getstarted}}platform.html#browsers-on-mobile-devices" target="_blank">mobile platforms</a> 

#### Scanning

This will become either capturing from mobile cameras or <a href="{{site.indepth}}features/input.html#how-to-enable-remote-scan" target="_blank">capturing from a Remote Windows machine</a> in the LAN.

#### Loading

This will be either loading or capturing.

#### Saving

This will become an in-browser download operation as mentioned <a href="{{site.indepth}}features/output.html#save-as-a-download" target="_blank">here</a>

#### Editing

Similar to existing desktop functionality but the performance is not as good.

#### Uploading

Similar to existing desktop browser functionality but is limited to only one API <a href="{{site.info}}api/WebTwain_IO.html#httpupload" target="_blank">`HTTPUpload()`</a> 

#### Viewing

Identical to current desktop browser functionality.

#### Barcode reading

Identical to current desktop browser functionality.

#### PDF Handling

Similar to current desktop browser functionality but the rasterizing feature depends on embeded fonts in the PDF file whereas the on desktop, the system fonts can also be used.

#### OCR

Client-side support is to be added in a later version.
