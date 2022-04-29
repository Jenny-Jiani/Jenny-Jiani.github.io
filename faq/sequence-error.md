---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Sequence error
keywords: Dynamic Web TWAIN, Error Troubleshooting, sequence
breadcrumbText: Sequence error
description: Sequence error
---

# Error Troubleshooting

## Sequence error

### Symptom

When you fail to acquire images from your scanner, you may get this error.

### Cause

This problem occurs when the correct order of operations is not followed for the TWAIN sequence.

### Resolution

Check if you followed the acquisition sequence to get images from your device. For example, some methods and properties, like the [PixelType]({{site.info}}api/WebTwain_Acquire.html#pixeltype) property, can only be used after calling the [OpenSource()]({{site.info}}api/WebTwain_Acquire.html#opensource) method. Please check the TWAIN State Transition Diagram below for more information

![TWAIN State Transition]({{site.assets}}imgs/TWAIN-State-Transition.png)
