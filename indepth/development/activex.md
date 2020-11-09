---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Development - About AcitveX
keywords: Dynamic Web TWAIN, Documentation, Development, About AcitveX
breadcrumbText: About AcitveX
description: Dynamic Web TWAIN SDK Documentation About AcitveX Page
---

# About ActiveX

**ActiveX** is a software framework created by Microsoft widely used in Internet Explorer (IE). However, Microsoft has announced plans to end support for older browsers completely and has now deprecated this technology.

## DWT & ActiveX

Although `DWT` is built upon modern technologies like `WebSocket`, `HTML5`, `WebAssemby`, it was born as one of many ActiveX controls in 2003. The ActiveX edition of `DWT` continued to dominate for 11 years. ActveX is still part of `DWT` though only used by a small number of customers who want to stick with IE 8 or 9.

## The Future of ActiveX

Microsoft officially announced the end of support for IE 10 and older on `January 12th, 2016`. While IE 11 continues to be supported on Windows 7, 8.1, and 10, Microsoft is gradually deprecating it too.

That said, since many enterprise applications still and will continue to rely on IE 11 for some time yet, the browser will continue receiving security updates and technical support for the lifecycle of the version of Windows on which it is installed. Windows 10 is among these versions of Windows on which IE 11 is installed, and there is no evidence that Microsoft will release a newer version of Windows soon. Therefore, it is safe to assume that IE 11 will continue to exist for quite some time. Read more [here](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge).

The fate of the ActiveX framework depends on the fate of IE 11. As long as IE 11 is still hanging around, ActiveX will continue to be supported.

> Microsoft Edge offers **Internet Explorer mode**, but ActiveX is not supported on Edge even when it runs in this mode.

## The Future of ActiveX Edition in DWT

Dynamsoft has a substantial customer base and their benefits are our biggest concern. While most of our customers have opted to use the modern browsers like Chrome, Firefox or Safari, a few of them must use IE 8 or 9 of which most cases are imitated by IE 11. In these cases, only the ActiveX edition of `DWT` can be used. Dynamsoft has kept its support of the ActiveX edition as part of the Windows edition until now and will continue to do so as long as IE continues to be supported by Microsoft.

Simultaneously, the ActiveX edition of `DWT` will also be slowly phased out by Dynamsoft, just like IE by Microsoft. On the one hand, IE is reaching its end of life. On the other hand, outdated technologies are incompatible with updated Web standards, which hinders `DWT` development.

If you check our [release notes]({{site.info}}schedule/stable.html), you can find that most of our development has been done to the HTML5-based editions of `DWT`. For ActiveX, the strategy is as follows:

* It'll continue to be a part of the Windows edition
* No new features will be added
* If a major bug is found, Dynamsoft will fix it
* If there is a major feature conflict between two editions, the preference is to upgrade the ActiveX version or tag its behaviour as deprecated

We encourage customers who are still using the ActiveX edition of `DWT` to consider moving to another edition as soon as possible.
