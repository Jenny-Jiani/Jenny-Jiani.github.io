---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Deployment - Server Deployment
keywords: Dynamic Web TWAIN, Documentation, Deployment, Server
breadcrumbText: Server Deployment
description: Dynamic Web TWAIN SDK Documentation Server Deployment Page
---

# Deploy your application on the server

Once you have finished integrating `DWT` in your application, you can deploy it on your server to test it. As far as `DWT` is concerned, all related files are to be served as static files which makes the deployment very easy.

> If you are using the OCR feature on the server side, please refer to [Use OCRPro on the Server Side]({{site.indepth}}features/OCR.html#use-ocrpro-on-the-server-side) or [Use OCRB on the Server Side]({{site.indepth}}features/OCR.html#use-ocrb-on-the-server-side).

## Make sure the static files can be served correctly

`DWT` comes with lots of static resources files, for the full list, check out [What are the Resources files]({{site.about}}FAQs.html#what-are-the-resources-files). The following table shows each file type and its MIME type which must be configured in your webserver in order for that type of file(s) to be correctly served to the client browsers.

| File Type | MIME Type | Required by |
|:-:|:-:|:-:|
| `.js` | `application/javascript` | All Browsers |
| `.css` | `text/css` | All Browsers |
| `.wasm` | `application/wasm` | [WASM Browsers]({{site.getstarted}}Platform.html#wasm-browsers) |
| `.msi` | `application/octet-stream` | [Browsers on Windows]({{site.getstarted}}Platform.html#browsers-on-windows) |
| `.pkg` | `application/pkg-mac` | [Browsers on macOS]({{site.getstarted}}Platform.html#browsers-on-macos) |
| `.deb` | `application/x-debian-package` | [Browsers on Linux]({{site.getstarted}}Platform.html#browsers-on-linux) |
| `.rpm` | `application/x-redhat-package-manager` | [Browsers on Linux]({{site.getstarted}}Platform.html#browsers-on-linux) |

### How to set the MIME type

Different servers are configured differently. Here are some popular ones:

NGINX: [ `mime.types` ](https://www.nginx.com/resources/wiki/start/topics/examples/full/#mime-types)
IIS: [ `Web.config` ](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/staticcontent/mimemap#how-to-add-a-mime-type-to-a-web-site-or-application)
Java™ EE web app: [ `web.xml` ](https://docs.oracle.com/cd/E24329_01/web.1211/e21049/web_xml.htm#WBAPP533)
Node.js: [ `npm mime` ](https://www.npmjs.com/package/mime-types)

## Enable HTTPS

If you need to use any of the following features, you must enable HTTPS on the server.

* Use the new [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras)
* Upload or Download via SSL
* Any other features that require a secure connection

For how to enable HTTPS, please check out the manual of your webserver.

## Set ResourcesPath

The global API [ `Dynamsoft.WebTwainEnv.ResourcesPath` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#resourcespath) sets a relative or absolute path that tells `DWT` where to look for the resources files at runtime. Its default value is `Resources` which means all these files are put in a directory called *Resources* that is in the same location as the web page on which `DWT` is running. This is the simplest situation possible, in most cases, it's a lot more complicated and you must make sure the correct value is set.

### How to know ResourcesPath is wrong

When you set `ResourcesPath` wrong, static files such as `dynamsoft.webtwain.install.js` , `dynamsoft.viewer.css` will fail to load and you see 404 errors in the browser console.

### Using an absolute path

In some cases, you might not be able to *calculate* the correct relative path for these files and wishes to use an absolute path instead such as "https://www.dynamsoft.com/dwt/demo/resources/". This is supported but keep in mind that if you want to use the new [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras) or run `DWT` in the [WASM mode]({{site.indepth}}features/initialize.html#wasm-mode), you must make sure the absolute path stays in the same domain to avoid cross-origin issues.
