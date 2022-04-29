---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: What are the differences between TWAIN and WIA?
keywords: Dynamic Web TWAIN, Capture/ Image Source, twain, wia, difference
breadcrumbText: What are the differences between TWAIN and WIA?
description: What are the differences between TWAIN and WIA?
---

# Capture/Image Source

## What are the differences between TWAIN and WIA?

TWAIN driver TWAIN is the most widely used protocol for physical document scanners. Almost all scanners in the market come with a TWAIN driver and are supported by TWAIN applications like the Dynamic Web TWAIN SDK.

`WIA` refers to <a href="https://docs.microsoft.com/en-us/windows/win32/wia/-wia-startpage" target="_blank">Windows Image Acquisition</a>, which is the still image acquisition platform in the Windows family that enables imaging/graphics applications to interact with imaging hardware and standardizes the interaction between different applications and scanners.

`WIA` devices can be used by `TWAIN` applications like `DWT` through a `TWAIN compatibility layer`. This means `WIA` is not supported natively; therefore, when a device supports both `TWAIN` and `WIA`, `TWAIN` is the better option.

By comparison, `WIA` can only control a very limited set of general capabilities of the device while `TWAIN` can control all standard and even custom capabilities of the device. Another thing is that `TWAIN` has three transfer modes (Native, Memory, File), while `WIA` only has two (Memory, File).
