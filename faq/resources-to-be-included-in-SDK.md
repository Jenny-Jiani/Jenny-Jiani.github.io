---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: What resources of the SDK should be included in my web application?
keywords: Dynamic Web TWAIN, Project Deployment and End-user Installation, resources
breadcrumbText: What resources of the SDK should be included in my web application?
description: What resources of the SDK should be included in my web application?
---

# Project Deployment and End-user Installation

## What resources of the SDK should be included in my web application?

You can include all the files under the Resources folder, but not all are required.

Under the `\addon` folder, you do not need the files for add-ons which are not used by your web application.
Under the `\dist` folder, you can include the installers required per your OS requirements.

If you are using the Desktop edition, you do not need the <a href="https://www.dynamsoft.com/web-twain/docs/indepth/features/initialize.html?ver=latest#webassembly-edition-specific-files" target="_blank">WebAssembly Edition specific files</a> under the `\src` folder.

For more information, please check <a href="https://www.dynamsoft.com/web-twain/docs/about/FAQs.html?ver=latest#what-are-the-resources-files" target="_blank">What are the Resources files</a> and <a href="https://www.dynamsoft.com/web-twain/docs/indepth/features/initialize.html?ver=latest#loading-the-core-js-files" target="_blank">Loading the Resource Files</a>.
