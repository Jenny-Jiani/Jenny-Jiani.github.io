---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I OCR multiple zones at the same time
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I OCR multiple zones at the same time
description: Can I OCR multiple zones at the same time
---

# Development

## Can I OCR multiple zones at the same time

Yes, but only with `OCRPro` . The code is like

``` javascript
var aryRects = [{
        left: 213,
        top: 105,
        right: 419,
        bottom: 166
    },
    {
        left: 112,
        top: 256,
        right: 303,
        bottom: 325
    }
];
DWObject.Addon.OCRPro.RecognizeRect(
    0, aryRects,
    function(sImageIndex, aryRects, result) {
        if (result == null)
            return null;
        var bRet = "",
            pageCount = result.GetPageCount();
        if (pageCount == 0) {
            alert("OCR result is Null.");
            return;
        } else {
            for (var i = 0; i < pageCount; i++) {
                var page = result.GetPageContent(i);
                var letterCount = page.GetLettersCount();
                for (var n = 0; n < letterCount; n++) {
                    var letter = page.GetLetterContent(n);
                    bRet += letter.GetText();
                }
            }
            console.log(bRet);
        }
    },
    function(errorcode, errorstring, result) {
        if (errorcode != -2600 && errorcode != -2601) {
            //-2600:LicenseChecker cannot be empty.  
            //-2601:Cannot connect to the LicenseChecker, please check and make sure it's set correctly.
            alert(errorstring);
        }
        var strErrorDetail = "";
        var aryErrorDetailList = result.GetErrorDetailList();
        for (var i = 0; i < aryErrorDetailList.length; i++) {
            if (i > 0)
                strErrorDetail += ";";
            strErrorDetail += aryErrorDetailList[i].GetMessage();
        }
        if (strErrorDetail.length > 0 && errorstring != strErrorDetail)
            alert(strErrorDetail);
    }
);
```
