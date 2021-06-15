---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs
keywords: Dynamic Web TWAIN, Documentation, FAQs
breadcrumbText: FAQs
description: Dynamic Web TWAIN SDK Documentation FAQs Page
hasCustomLdJson: true
customLdJsonScript: 
---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "For what purposes can I use DWT",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DWT can be used for controlling any work of scanners, digital cameras and any other devices that support the protocols/interfaces TWAIN / ICA / SANE / DirectShow / MediaDevices, etc. Please check out hardware for more details.
DWT can open/decode files in the formats BMP / JPG / TIF / PNG / PDF or save the resulting images back to any of these formats.
DWT can upload and download files through FTP or HTTP(s).
DWT can read barcode or recognize characters on images or PDFs."
    }
  },{
    "@type": "Question",
    "name": "Does DWT support all scanners",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Not all scanners follow the standard protocols, therefore not all scanners are supported. A known example is the ScanSnap series. Check out more here."
    }
  },{
    "@type": "Question",
    "name": "Are all scanners in the source list available",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Although some smart scanner drivers will hide themselves when the scanners are unplugged, most scanner drivers still show up even if the scanners are no longer hooked. This is something DWT can not control. Therefore, please make sure a device is connected before you try to use it."
    }
  },{
    "@type": "Question",
    "name": "Can I use DWT for free",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DWT is a commercial software. Generally, Dynamsoft allows it to be used free of charge for up to 60 days with automatically generated trial licenses after which a commercial license needs to be purchased."
    }
  },{
    "@type": "Question",
    "name": "What can I do when my trial license expires",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "DWT comes with a 30-day free trial license from the day the software is installed with the Official installer. After that, a developer can extend the trial twice on this page."
    }
  },{
    "@type": "Question",
    "name": "What if I want Dynamsoft help with the implementation",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dynamsoft provides detailed documentation including multiple samples for DWT . However, if you don’t want to do the development yourself, you can take advantage of the Professional Virtual Developer Service."
    }
  },{
    "@type": "Question",
    "name": "What are the most common issues when clients start to use my scan application",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When end clients visit your scan page for the first time on a desktop, they will be automatically asked to download and manually install the Dynamsoft Service. Make sure the clients are aware of this.
DWT is NOT the scanner driver. Instead, it works with scanners via their own vendor-developed drivers. Make sure the proper driver is installed and the scanner itself already works on the system before attempting to use it with DWT."
    }
  },{
    "@type": "Question",
    "name": "What are the Resources files",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Resources files help you include DWT in your application. The following shows the purpose of these files.
Resources is the default name of the folder that contain these files. It can be changed. For example, in the dwt package, it’s called dist."
    }
  }]
}
</script>


# Frequently Asked Questions

## For what purposes can I use DWT

`DWT` can be used for controlling any work of scanners, digital cameras and any other devices that support the protocals/interfaces [TWAIN](https://www.twain.org/about/) / [ICA](https://developer.apple.com/documentation/imagecapturecore) / [SANE](http://www.sane-project.org/) / [DirectShow](https://docs.microsoft.com/en-us/windows/win32/directshow/introduction-to-directshow) / [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices), etc. Please check out [hardware]({{site.getstarted}}hardware.html) for more details.

`DWT` can open/decode files in the formats BMP / JPG / TIF / PNG / PDF or save the resulting images back to any of these formats.

`DWT` can upload and download files through FTP or HTTP(s).

`DWT` can read barcode or recognize characters on images or PDFs.

Check out more on [dwt features]({{site.about}}features.html).

## Does DWT support all scanners

Not all scanners follow the standard protocols, therefore not all scanners are supported. A known example is the ScanSnap series. Check out more [here](https://scansnapcommunity.net/why-doesnt-scansnap-have-twain-drivers/).

## Are all scanners in the source list available

No. Although some smart scanner drivers will hide themselves when the scanners are unplugged, most scanner drivers still show up even if the scanners are no longer hooked. This is something `DWT` can not control. Therefore, please make sure a device is connected before you try to use it.

## Can I use DWT for free

`DWT` is a commercial software. Generally, Dynamsoft allows it to be used free of charge for up to 60 days with automatically generated trial licenses after which a commercial license needs to be purchased.

## What can I do when my trial license expires

`DWT` comes with a 30-day free trial license from the day the software is installed with the [Official installer](https://www.dynamsoft.com/Downloads/WebTWAIN_Download.aspx). After that, a developer can extend the trial twice on [this page](https://www.dynamsoft.com/customer/license/trialLicense).

If more time is required for evaluation purposes, you can contact [Dynamsoft Support]({{site.about}}Getsupport.html).

## What if I want Dynamsoft help with the implementation

Dynamsoft provides detailed documentation including multiple samples for `DWT` . However, if you don't want to do the development yourself, you can take advantage of the [Professional Virtual Developer Service]({{site.indepth}}development/Pro-service.html#virtual-developer-service).

## What are the most common issues when clients start to use my scan application

* When end clients visit your scan page for the first time on a desktop, they will be automatically asked to download and manually [install the Dynamsoft Service]({{site.indepth}}deployment/Service.html#how-to-install-dwt). Make sure the clients are aware of this.
* `DWT` is NOT the scanner driver. Instead, it works with scanners via their own vendor-developed drivers. Make sure the proper driver is installed and the scanner itself already works on the system before attempting to use it with `DWT` .

## What are the Resources files

Resources files help you include `DWT` in your application. The following shows the purpose of these files.

> *Resources* is the default name of the folder that contain these files. It can be changed. For example, in the [dwt package](https://github.com/dynamsoft-dwt/web-twain-package), it's called *dist*.

### Default files

* dynamsoft.webtwain.config.js

> This file is used to make basic configuration of the Dynamic Web TWAIN library. It's where you enter the product key for the product and to change the initial viewer size, etc.

* dynamsoft.webtwain.initiate.js

> This file is the core of the Dynamic Web TWAIN library. 

* dynamsoft.webtwain.install.js

> This file is used to configure the dialogs which are shown when the Dynamic Web TWAIN library is not installed or needs to be upgraded. This file is already referenced inside the dynamsoft.webtwain.initiate.js

* Readme.txt
* addon
  + dynamsoft.upload.js

  > This file contains the functionalities of the Dynamsoft Upload Module. 

  + dynamsoft.webtwain.addon.camera.js

  > This file contains the functionalities of the Camera addon. 

  + dynamsoft.webtwain.addon.ocr.js

  > This file contains the functionalities of the OCR Basic addon. It's not included by default, contact [Dynamsoft Support]({{site.about}}Getsupport.html) to get it.

  + dynamsoft.webtwain.addon.ocrpro.js

  > This file contains the functionalities of the OCR Professional addon. It's not included by default, contact [Dynamsoft Support]({{site.about}}Getsupport.html) to get it.

  + dynamsoft.webtwain.addon.pdf.js

  > This file contains the functionalities of the PDF Rasterizer addon. 

  + dynamsoft.webtwain.addon.webcam.js

  > This file contains the functionalities of the Webcam addon. 

  + dynamsoft.webtwain.addon.barcodereader.js

  > This file contains the functionalities of the Barcode addon. 

  + dbrjs

  > These files are meant for the barcode reader addon under [WASM mode]({{site.indepth}}initialize.html#wasm-mode).

    - dbr.js
    - dbr-7.4.0.1.full.wasm
    - dbr-7.4.0.1.full.wasm.js
    - dbr-7.4.0.1.worker.js
* dist

  > Under this directory are the installers for the Dynamsoft Service which needs to be manually installed on each client machine that uses the Dynamic Web TWAIN library as a service.

    - DynamsoftServiceSetup.deb

    > For Linux (Debian)

    - DynamsoftServiceSetup.rpm

    > For Linux (Redhat)

    - DynamsoftServiceSetup.msi

    > For Windows

    - DynamsoftServiceSetup.pkg

    > For macOS

    - LICENSE
  + src

  > These files contain the following functionalities for the [WASM-mode]({{site.indepth}}features/initialize.html#wasm-mode)
  > - image input & output
  > - decode & encode
  > - PDF read & write
  > - Viewer & UI

    - dynamsoft.imageio.js
    - dynamsoft.imageio_wasm-<version number>.js
    - dynamsoft.imagecore-<version number>.wasm
    - dynamsoft.imageio-<version number>.wasm
    - dynamsoft.imageProc-<version number>.wasm
    - dynamsoft.pdfReader-<version number>.wasm
    - dynamsoft.pdfWriter-<version number>.wasm
    - dynamsoft.viewer.css
    - dynamsoft.viewer.js
    - dynamsoft.webtwain.css

### Other Resources files

The following two files are present in the [dwt package](https://github.com/dynamsoft-dwt/web-twain-package).

* dynamsoft.webtwain.min.js

> This is an all-in-one JavaScript file that consists of the files dynamsoft.webtwain.initiate.js , dynamsoft.webtwain.config.js , dynamsoft.webtwain.install.js as well as all the add-on JavaScript files. If you include this file in the application, you no longer need to include these constituent files separately.

* dynamsoft.webtwain.min.mjs

> This file is like dynamsoft.webtwain.min.js but is built by the ECMAScript 6 (ES6) standard. It's used by applications (Angular, React, Vue, etc.) that import the `dwt` package as a module.
