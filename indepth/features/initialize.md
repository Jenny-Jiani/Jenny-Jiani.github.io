---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - Initialization
keywords: Dynamic Web TWAIN, Documentation, Initialization 
breadcrumbText: Initialization
description: Dynamic Web TWAIN SDK Documentation Initialization Page
---

# Initialize

Initializing Dynamic Web TWAIN takes a few simple steps, as you can see in the ["Getting Started"]({{site.getstarted}}helloworld.html)chapter. The following guide will dive deeper into how Dynamic Web TWAIN is intialized once the page loads.

## Usage Editions

Dynamic Web TWAIN can operate in two modes: Desktop Service or WebAssembly.

### Desktop Service Edition

#### What is Desktop Service Edition

Desktop Service Edition means Dynamic Web TWAIN operates through the [Dynamsoft Service]({{site.indepth}}deployment/service.html) which is a quiet, background system service that handles the communication between connected devices and the browser client as well as imaging processing, encoding, decoding, etc.

When using Dynamic Web TWAIN on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices), the service mode is used by default (recommended), and the installation of the Dynamsoft Service is mandatory for this mode.

#### Installation of the Dynamsoft Service

[Guide on how to install the Dynamsoft Service]({{site.indepth}}deployment/service.html#dynamsoft-service-is-not-installed-dynamic-web-twain-is-not-installed)

### WebAssembly Edition

#### What is WebAssembly Edition

WebAssembly (WASM) Edition means Dynamic Web TWAIN operates completely within the browser with the help of **Web Worker** and **WebAssembly**. It relieves users from manually installing anything. This relies on some advanced features that only modern [WASM browsers]({{site.getstarted}}platform.html#wasm-browsers) provide though.

If a user decides to access the Dynamic Web TWAIN application via [a mobile browser]({{site.getstarted}}platform.html#browsers-on-mobile-devices) or they don't want to install anything on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices), they can choose the WASM mode.

Read more on how to [expand your application to mobile platforms]({{site.indepth}}development/upgrade.html#expand-your-application-to-mobile-platforms).

#### How to use WebAssembly Edition on desktop

As mentioned previously, [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) users will by default go with Desktop Service Edition, while mobile and tablet users will default to WebAssembly Edition. However, if you would like desktop users to start in WebAssembly Edition and forego the need for a service, you can set [UseLocalService]({{site.info}}api/Dynamsoft_WebTwainEnv.html#uselocalservice) to `false` in the initialization code.

### Comparison of the two modes

A major difference between Desktop Service Edition and WebAssembly Edition is that the latter can not access local devices, which means that it is impossible to [use local scanners]({{site.indepth}}features/input.html#scan-from-a-local-scanner).

Also, the performance and speed of WebAssembly Edition is not as good as Service Edition because it is not able to make use of as many resources.

At Dynamsoft, we tried and are still trying to make these two modes to function as closely to each other as possible. 

## Loading the Core JS Files

This is the first step of the initialization.

### Introduction to the core files

Inside the `Resources` directory that is included with the SDK installation, you will find the following two files which are the main JS files that define the configuration and operation of Dynamic Web TWAIN.

- `dynamsoft.webtwain.config.js`
- `dynamsoft.webtwain.initiate.js`

Let's break down each file's purpose:

- `dynamsoft.webtwain.initiate.js`

  This file is the **core** of the Dynamic Web TWAIN JavaScript Library. You're not supposed to change it without consulting the [Dynamsoft Support Team]({{site.about}}Getsupport.html). 

- `dynamsoft.webtwain.config.js`

  This file is used for basic configuration of Dynamic Web TWAIN. This is where you configure the product key, change the initial viewer size, and more.

**Q: Does it matter which JavaScript file is referenced first**

**A**: Generally, both `dynamsoft.webtwain.initiate.js` and `dynamsoft.webtwain.config.js` need to be referenced. In the former file, it detects whether the latter has been loaded; if not, it'll wait. Therefore, it doesn't matter which file comes first.

**Q: Why do I see `dynamsoft.webtwain.min.js` and `dynamsoft.webtwain.min.mjs` instead of the 2 files above**

**A**: The two files are present in the official [npm package `dwt`](https://github.com/dynamsoft-dwt/web-twain-package). For simplicity, in each of these files Dynamsoft has included all necessary JavaScript code which includes both files mentioned above plus `dynamsoft.webtwain.install.js` and all extra components (add-ons). The `.js` file is a simple combination of the code while the `.mjs` file is built as an ECMAScript 6 (ES6) Module that is used in applications based on Angular, React, and Vue etc.

In a regular application, referencing `dynamsoft.webtwain.min.js` alone would be more than enough than referencing `dynamsoft.webtwain.config.js` and `dynamsoft.webtwain.initiate.js`. 

## Loading Add-on JS files

Dynamic Web TWAIN offers a number of add-ons, including a barcode reader, a PDF rasterizer, two webcam utilizers and two OCR engines. The files for these components reside in the **addon** subfolder in the **Resources** directory. [Learn more about the resource files]({{site.about}}faqs.html#what-are-the-resources-files).

You can reference the respective JavaScript file to include any of these add-on components. Once a JavaScript file is referenced, the member methods/properties of that component are made available in the [Dynamsoft Namespace](#the-dynamsoft-namespace) and can later be used by the `WebTwain` instances.

> Note: As mentioned above, if you use any of the `min` file from the `dwt` package, all add-on components are included by default.

## Loading the supporting files

Once the main JavaScript files are loaded in, the initialization process now moves to loading all the other supporting JS files as well as the CSS files. Depending on the mode `DWT` operates in, the supporting files vary.

### Desktop Service Edition files

Desktop Service Edition requires the following files found in the **Resources** folder:

- `dynamsoft.webtwain.install.js`
- `src/dynamsoft.viewer.js`
- `src/dynamsoft.viewer.css`
- `src/dynamsoft.webtwain.css`

#### `dynamsoft.webtwain.install.js`

This file is used to configure the dialogs which show up when the Dynamsoft Service is not installed or needs upgrade, etc. This file is automatically loaded when the code in `dynamsoft.webtwain.initiate.js` executes. Therefore, it does not need to be referenced in the HTML page.

> Note: As mentioned above, if you use any of the `min` file from the `dwt` package, this `install` file is already included.

#### `dynamsoft.viewer.js`, `dynamsoft.viewer.css` and `dynamsoft.webtwain.css`

These three files are used to build the viewer component of Dynamic Web TWAIN, as well as define the CSS of the other UI elements of the library.

### WebAssembly Edition specific files

Apart from the 4 files that the service mode requires, the WebAssembly Edition also needs the following files:

for image IO (decoding and encoding included)

- `dynamsoft.imageio.js`
- `dynamsoft.imageio_wasm-<version number>.js`
- `dynamsoft.imagecore-<version number>.wasm`
- `dynamsoft.imageio-<version number>.wasm`
- `dynamsoft.imageProc-<version number>.wasm`

for PDF reading & writing

- `dynamsoft.pdfReader-<version number>.wasm`
- `dynamsoft.pdfWriter-<version number>.wasm`

> These 7 files are loaded only when the first `WebTwain` instance in WebAssembly Edition is created.

**Q: Are all 7 files mentioned above used exclusively in WebAssembly Edition**

**A**: No, the library will use the WebAssembly files even in service mode when one of the following conditions is met

* The APIs for the [ `WebTwain.Addon.Camera` ]({{site.info}}api/Addon_Camera.html) component are called.

* The APIs [ `WebTwain.Camera.showVideo()` ]({{site.info}}api/Addon_Camera.html#showvideo) or [ `WebTwain.Camera.closeVideo()` ]({{site.info}}api/Addon_Camera.html#closevideo) are called.

## Creating the WebTwain instance

This is the last step of the initialization.

The leading player of `DWT` is the `WebTwain` "class". Almost all methods and properties are defined in this "class". As [mentioned previously](#installation-of-the-dynamsoft-service), creating a `WebTwain` instance in Service mode requires a successful connection to the Dynamsoft Service. On the other hand, creating a `WebTwain` instance in WASM mode requires these [extra files](#wasm-specific-files).

Read on to learn the three methods to instantiate `DWT` .

### [ `Dynamsoft.DWT.Load` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#load)

This is the default method to create `WebTwain` instances. 

#### Questions

##### Q: Is it necessary to call `Dynamsoft.DWT.Load` manually

**A**: No. It needs to be called only if `Dynamsoft.DWT.AutoLoad` is set to `false` . If `AutoLoad` is `true` , `Load` will be called automatically as soon as the running environment is ready.

`Dynamsoft.DWT.AutoLoad` is defined in the file `dynamsoft.webtwain.config.js` but can be called anywhere before the actual loading begins. It is set to `true` by default.

##### Q: Where can I get the handler(s) of the instance(s)

**A**: When `Load` is called, `DWT` tries to create the `WebTwain` instances. Once it's done, `DWT` triggers the built-in callback `Dynamsoft.DWT.OnWebTwainReady` in which the method [ `Dynamsoft.DWT.GetWebTwain` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#getwebtwain) can be used to get the handler(s) of the instance(s). For simplicity, the `OnWebTwainReady` callback points to a global function called `Dynamsoft_OnReady` . The following snippets are equivalent

Snippet one

``` javascript
Dynamsoft.DWT.OnWebTwainReady = function() {
    DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
}
```

Snippet two

``` javascript
Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);
function Dynamsoft_OnReady() {
    DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
}
```

##### Q: How can I customize the instances

**A**: The instances are defined by this line in `dynamsoft.webtwain.config.js`

``` javascript
Dynamsoft.DWT.Containers = [{
    ContainerId: 'dwtcontrolContainer',
    Width: '585px',
    Height: '513px'
}];
```

> Note that `Containers` is an array of the `Container` type

``` typescript
interface Container {
    WebTwainId?: string;
    ContainerId?: string;
    Width?: string | number;
    Height?: string | number;
}
```

`WebTwainId` and `ContainerId` are both optional but one must exist as the identifier for that `WebTwain` instance.

`Width` and `Height` determine the initial viewer size of the instance.

When instantiating with `Dynamsoft.DWT.Load` , `ContainerId` , `Width` and `Height` are required. `DWT` will try to locate an HTML element with the id defined by `ContainerId` and use `Width` and `Height` as the viewer size.

To create multiple instances, simply provide multiple `Containers` , for example, the following creates two `WebTwain` instances

``` javascript
Dynamsoft.DWT.Containers = [{
    ContainerId: 'dwtcontrolContainer1',
    Width: '585px',
    Height: '513px'
}, {
    ContainerId: 'dwtcontrolContainer2',
    Width: '585px',
    Height: '513px'
}];
```

### [ `Dynamsoft.DWT.CreateDWTObject` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#createdwtobject)

This method manually creates a `WebTwain` instance with a default built-in viewer.

#### Questions

##### Q: Can this method create a `WebTwain` instance that does not come with a default viewer

**A**: No, only [ `CreateDWTObjectEx` ](#dynamsoftwebtwainenvcreatedwtobjectex) can do that.

##### Q: Can this method be used alongside [Load](#dynamsoftwebtwainenvload)

**A**: Yes, this method can create more `WebTwain` instances after  [Load](#dynamsoftwebtwainenvload) has created the initial one.

##### Q: How do I use this method to create `WebTwain` instances without using [Load](#dynamsoftwebtwainenvload)

**A**: [Load](#dynamsoftwebtwainenvload) is called automatically if `Dynamsoft.DWT.AutoLoad` is set to `true` . Therefore, to ignore [Load](#dynamsoftwebtwainenvload), `Dynamsoft.DWT.AutoLoad` must be set to `false` .

##### Q: How do I use `CreateDWTObject`

**A**: This method has the following syntax

``` javascript
/**
 * Create a WebTwain instance with UI.
 * @param ContainerId Specify the HTML element (typically of the type HTMLDivElement) to hold the UI.
 * @param host Specify the host.
 * @param port Specify the port.
 * @param portSSL Specify the SSL port.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 */
CreateDWTObject(
    ContainerId: string,
    host ? : string,
    port ? : string | number,
    portSSL ? : string | number,
    successCallBack: (DWObject: WebTwain) => void,
    failureCallBack: (errorString: string) => void
): void;
```

The following would be equivalent to using [Load](#dynamsoftwebtwainenvload) with the configuration `Dynamsoft.DWT.Containers = [{ContainerId: 'dwtcontrolContainer', Width: '585px', Height: '513px'}`

``` javascript
Dynamsoft.DWT.CreateDWTObject(
    'dwtcontrolContainer',
    function(obj) {
        obj.Width = 585;
        obj.Height = 513;
    },
    function(err) {
        console.log(err);
    }
);
```

The method can also do something that [Load](#dynamsoftwebtwainenvload) can't. The following code creates a `WebTwain` instance that connects to the Dynamsoft Service running on another machine with the IP 192.168.8.221 and ports 18622 and 18623 (SSL)

> NOTE that [ `Dynamsoft.DWT.UseLocalService` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#uselocalservice) must be `true` for this usage.

``` javascript
Dynamsoft.DWT.UseLocalService = true;
Dynamsoft.DWT.CreateDWTObject(
    'dwtcontrolContainer',
    "192.168.8.221",
    "18622", "18623"
    function(obj) {},
    function(err) {
        console.log(err);
    }
);
```

For more information, check out [how to enable remote scan]({{site.indepth}}features/input.html#how-to-enable-remote-scan).

### [ `Dynamsoft.DWT.CreateDWTObjectEx` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#createdwtobjectex)

This method manually creates a `WebTwain` instance without a default built-in viewer.

#### Questions

##### Q: Can this method be used alongside [Load](#dynamsoftwebtwainenvload)

**A**: Yes, same as  [ `CreateDWTObject` ](#dynamsoftwebtwainenvcreatedwtobject).

##### Q: How do I use this method to create `WebTwain` instances without using [Load](#dynamsoftwebtwainenvload)

**A**: Same as  [ `CreateDWTObject` ](#dynamsoftwebtwainenvcreatedwtobject).

##### Q: How to use `CreateDWTObjectEx`

**A**: This method has the following syntax

``` typescript
/**
 * Create a WebTwain instance without UI.
 * @param WebTwainId Specify the Id of the instance.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
*/
CreateDWTObjectEx(
    dwtInitialConfig: DWTInitialConfig,
    successCallBack: (DWObject: WebTwain) => void,
    failureCallBack: (errorString: string) => void
): void;
```

The following is the interface `DWTInitialConfig`

``` typescript
interface DWTInitialConfig {
    WebTwainId: string;
    Host?: string;
    Port?: string;
    SSLPort?: string;
}
```

Compared with [ `CreateDWTObject` ](#dynamsoftwebtwainenvcreatedwtobject), `CreateDWTObjectEx` requires a `WebTwainId` instead of a `ContainerId` .

The following would be equivalent to using [Load](#dynamsoftwebtwainenvload) with the configuration `Dynamsoft.DWT.Containers = [{ContainerId: 'dwtcontrolContainer', Width: '585px', Height: '513px'}`

> NOTE that the created instance doesn't have a built-in viewer but instead used the method [ `bind()` ]({{site.info}}api/WebTwain_Viewer.html#bind) to add a viewer.

``` javascript
var DWObject = null;
Dynamsoft.DWT.CreateDWTObjectEx({
        WebTwainId: 'dwtcontrol'
    },
    function(obj) {
        DWObject = obj;
        DWObject.Viewer.bind(document.getElementById('dwtcontrolContainer'));
        DWObject.Viewer.height = 600;
        DWObject.Viewer.width = 800;
        DWObject.Viewer.show();
    },
    function(err) {
        console.log(err);
    }
);
```

Similar to [ `CreateDWTObject` ](#dynamsoftwebtwainenvcreatedwtobject), `CreateDWTObjectEx` can also connect to the Dynamsoft Service running on another machine

> NOTE that `Dynamsoft.DWT.UseLocalService` must be `true` for this usage.

``` javascript
Dynamsoft.DWT.UseLocalService = true;
Dynamsoft.DWT.CreateDWTObjectEx({
        WebTwainId: 'dwtcontrolContainer1',
        Host: "192.168.8.221",
        Port: "18622",
        SSLPort: "18623"
    },
    function(obj) {},
    function(err) {
        console.log(err);
    }
);
```

For more information, check out [how to enable remote scan]({{site.indepth}}features/input.html#how-to-enable-remote-scan).

## The Dynamsoft Namespace

Dynamic Web TWAIN operates under the `Dynamsoft` namespace.

`Dynamsoft` is the top-level namespace. Dynamic Web TWAIN and other Dynamsoft libraries are all defined under `Dynamsoft`. For Dynamic Web TWAIN, the major members of this namespace are:

* [`DWT`]({{site.info}}api/Dynamsoft_WebTwainEnv.html)

    Includes global methods, properties to help with `WebTwain` initialization and instantiation, etc. as shown in previous context.

* `Lib`

    Includes information like environment detection results (`Dynamsoft.Lib.env`) and global methods like `showMask()`, `hideMask()`, etc.

* `Enumerations`

    Example: [`Dynamsoft.DWT.EnumDWT_PixelType`]({{site.info}}api/Dynamsoft_Enum.html#dynamsoftenumdwt_pixeltype)
