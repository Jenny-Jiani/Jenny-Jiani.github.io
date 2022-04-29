---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to know ResourcesPath is wrong
keywords: Dynamic Web TWAIN, Documentation, Distribution and Deployment
breadcrumbText: How to know ResourcesPath is wrong
description: How to know ResourcesPath is wrong
---

# Distribution and Deployment

## How to know ResourcesPath is wrong

When you set `ResourcesPath` wrong, static files such as `dynamsoft.webtwain.install.js` , `dynamsoft.viewer.css` will fail to load and you see 404 errors in the browser console.

In some cases, you might not be able to *calculate* the correct relative path for these files and wishes to use an absolute path instead such as "https://www.dynamsoft.com/dwt/demo/resources/". This is supported but keep in mind that if you want to use the new [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras) or run Dynamic Web TWAIN in the [WASM mode]({{site.indepth}}features/initialize.html#wasm-mode), you must make sure the absolute path stays in the same domain to avoid cross-origin issues.
