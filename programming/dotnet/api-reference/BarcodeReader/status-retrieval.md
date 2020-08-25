---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Status Retrieval Methods
keywords: GetVersion, status retrieval methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---

# .Net API Reference - BarcodeReader Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetVersion`](#getversion) | Get version information of SDK.|

  ---


## GetVersion

Get version information of SDK.

```C#
string Dynamsoft.Barcode.BarcodeReader.GetVersion()
```

#### Return value
The version info string. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
string version = reader.GetVersion();
```
