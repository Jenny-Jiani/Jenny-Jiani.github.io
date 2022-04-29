---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
keywords: Dynamic Web TWAIN, Project Deployment and End-user Installation, backward compatibility, two different versions
breadcrumbText: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
description: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
---

# Project Deployment and End-user Installation

## Running two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer

Dynamic Web TWAIN has limited backward compatibility between different versions and only one version is expected to be used on an end-user's computer.

However, as Dynamic Web TWAIN is a popular document scanning SDK and has been integrated to many web applications all over the world. It is not uncommon that some end users use two different websites (developed by two different vendors) integrated with different versions of Dynamic Web TWAIN on the same computer.

As a result, we have provided the following instructions for backward compatibility between **version 17.1.1** and some of the older versions, in order to support running both versions on the same computer.

NOTE:
* The instructions below also apply to all future versions after version 17.1.1.
* There is a known issue for versions 17.2 and 17.2.*,  please use version 17.1.1 as a workaround.

### Compatibility with version 17 minor versions

Version 17.1.1 is compatible with other minor versions: 17.1 and 17.0.

### Compatibility with older versions
For older versions to work with version 17.1.1, please copy the following .dll files to the version 17 Service Installation folder: `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17`

**Version 16.x (16.2, 16.1.1,  16.1, 16.0)**
```javascript
dwt_16.2.0.0112.dll
DynamicPdfCorex64_11.1.0.0112.dll
DynamicPdfRx64_11.1.0.0112.dll
```

**Version 15.3.1**
```javascript
dwt_15.3.0.0116.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
```

**Version 15.3**
```javascript
dwt_15.3.0.0107.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
```

**Version 15.2**
```javascript
dwt_15.2.0.0924.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
```

**Version 15.1**
```javascript
dwt_15.1.0.0806.dll
DynamicPdfCorex64_10.3.2.0806.dll
DynamicPdfRx64_10.3.2.0806.dll
```

**Version 15.0**
```javascript
dwt_15.0.0.0625.dll
DynamicPdfCorex64_10.3.1.0124.dll
DynamicPdfRx64_10.3.1.0124.dll
```