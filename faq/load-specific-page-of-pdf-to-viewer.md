---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I load specific page numbers of a PDF file into the viewer?
keywords: Dynamic Web TWAIN, Addon, specific page, pdf
breadcrumbText: Can I load specific page numbers of a PDF file into the viewer?
description: Can I load specific page numbers of a PDF file into the viewer?
---

# Addon

## Can I load specific page numbers of a PDF file into the viewer?

Dynamic Web TWAIN does not provide a native method that supports loading specific page numbers of a PDF file. However, it can be done by following the steps below
- a. register the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#onpostload" target="_blank">OnPostLoad</a> event which is triggered once the entire file has been loaded to the viewer
- b. In the event function, remove the unwanted pages (API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Buffer.html?ver=latest#removeimage" target="_blank">RemoveImage</a>)
- c. load the file to the viewer (e.g. API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#loadimage" target="_blank">LoadImage</a>)
