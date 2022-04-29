---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: When do I need PDF Rasterizer Addon? Can I load existing PDF files into the Dynamic Web TWAIN SDK without the PDF Rasterizer addon?
keywords: Dynamic Web TWAIN, Addon, padf rasterizer
breadcrumbText: When do I need PDF Rasterizer Addon? Can I load existing PDF files into the Dynamic Web TWAIN SDK without the PDF Rasterizer addon?
description: When do I need PDF Rasterizer Addon? Can I load existing PDF files into the Dynamic Web TWAIN SDK without the PDF Rasterizer addon?
---

# Addon

## When do I need PDF Rasterizer Addon? Can I load existing PDF files into the Dynamic Web TWAIN SDK without the PDF Rasterizer addon?

When you load/download a text-based PDF onto the viewer, you need the PDF Rasterizer Add-on. To detect whether a PDF file is text-based or not, you can use the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_PDF.html?ver=latest#istextbasedpdf" target="_blank">IsTextBasedPDF</a>.

Existing PDF files that are image-based can be handled by default and will load without the add-on.

Note that PDF Rasterizer also works when you drag and drop the PDF file to the viewer.
