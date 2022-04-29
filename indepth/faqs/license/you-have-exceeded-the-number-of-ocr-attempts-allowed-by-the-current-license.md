---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: You have exceeded the number of OCR attempts allowed by the current license
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: You Have Exceeded The Number Of OCR Attempts Allowed By The Current License
description: You have exceeded the number of OCR attempts allowed by the current license
---

# License

## You have exceeded the number of OCR attempts allowed by the current license

* Symptom

When you use the OCRPro addon, you may receive this error message returned by the member method GetErrorString() of the OCRResult class.

* Cause

It is a license issue. The OCRPro licenses are yearly licenses and each license has a limitation on the number of pages allowed to be OCR'ed. The SDK will throw this error when the limitation is reached.

* Solution

The license quota has been used up and extra quota needs to be purchased. Contact [Dynamsoft Support]({{site.about}}getsupport.html) for any assistance.
