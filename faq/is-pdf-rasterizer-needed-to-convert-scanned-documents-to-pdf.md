---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Do I need the PDF Rasterizer addon to convert scanned documents to PDF files?
keywords: Dynamic Web TWAIN, Addon, separate, license
breadcrumbText: Do I need the PDF Rasterizer addon to convert scanned documents to PDF files?
description: Do I need the PDF Rasterizer addon to convert scanned documents to PDF files?
---

# Addon

## Do I need the PDF Rasterizer addon to convert scanned documents to PDF files?

No. Dynamic Web TWAIN can output images as image-based PDF files and this is built into the core module, so no addon is required to convert scanned documents to PDF files.

You need the PDF Rasterizer Add-on only if you load/download text-based PDF onto the viewer. To detect whether a PDF file is text-based or not, you can use the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_PDF.html?ver=latest#istextbasedpdf" target="_blank">IsTextBasedPDF</a>.
