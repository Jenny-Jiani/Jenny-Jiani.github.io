---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I OCR multiple languages at the same time
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I OCR multiple languages at the same time
description: Can I OCR multiple languages at the same time
---

# Development

## Can I OCR multiple languages at the same time

Yes, but only with `OCRPro` . The code is like

``` javascript
// Reads both English and Arabic
settings.Languages = "eng,arabic"
```
