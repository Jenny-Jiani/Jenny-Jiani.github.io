---
layout: default-layout
title: Dynamsoft Barcode Reader Introduction - FAQs
keywords: faqs
needAutoGenerateSidebar: false
---


# Dynamsoft Barcode Reader - Frequently Asked Questions (FAQs)

- [Licensing](#licensing)
   - [How to find my license key for the full version?](#L1)
   - [Does Dynamsoft Barcode Scanner SDK require an Internet connection?](#L2)
   - [When does a device counts as an activated device?](#L3)
   - [For an environment with no internet connection allowed, can I use your barcode reader SDK?](#L4)

- [Using Barcode Reader](#using-barcode-reader)
   - [When I scan barcodes, why are the barcode results marked with asterisks (*)?](#U1)
   - [I saw you have Windows Edition, Linux Edition, JavaScript Edition, etc. Which is the right one for my application?](#U2)
   - [Why does it return strange characters (messy code, gibberish, or non-printable) as a result?](#U3)
   - [How to get the “result image” with overlays once barcodes are found in the image?](#U4)
   - [The barcode reader SDK sometimes return false results with four or less characters. How to avoid it?](#U5)
   - [Can I scan barcodes on US Driver’s Licenses?](#U6)


## Licensing

#### <span id="L1">How to find my license key for the full version?</span>
You can find the license key from the license email. It is also available under the “License Center” -> “Barcode Reader SDK” section inside your [Dynamsoft account](https://www.dynamsoft.com/CustomerPortal/Login.aspx).


#### <span id="L2">Does Dynamsoft Barcode Scanner SDK require an Internet connection?</span>
For web applications, it doesn’t require any Internet connection.    

For mobile apps, the device must go online to complete the device registration for the first time of using the barcode scanning feature. Afterwards, the mobile device can work offline until the current runtime license key expires.    

For desktop applications, an Internet connection is required the first time the device opens the barcode scanner (i.e. the InitLicenseFromServer() method is executed). After the device connects to our license server successfully, you can use the OutputLicenseToString API to get the information of the license and store the information to the device. Afterwards, you can use initLicenseFromServerContent API to use the SDK in offline mode. For more information, please refer to [this page]({{ site.introduction}}licensing/).    

#### <span id="L3">When does a device counts as an activated device?</span>
Invoking InitLicenseFromServer() method automatically activated the device.

#### <span id="L4">For an environment with no internet connection allowed, can I use your barcode reader SDK?</span>
Yes. You can follow the instruction [here]({{ site.introduction}}licensing/) to manually register the device. For enterprise customers who can't manually register devices, we offer a few flexible options, please [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) for details.



## Using Barcode Reader

#### <span id="U1">When I scan barcodes, why are the barcode results marked with asterisks (*)?</span>
Your trial license has expired or you don’t have a valid license key included in the code. You can log into the [customer portal](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx?product=dbr) to generate a free 30-day trial license or purchase a full license on the [Online Store](https://www.dynamsoft.com/Secure/Barcode-Reader-BuyIt.aspx).

#### <span id="U2">I saw you have Windows Edition, Linux Edition, JavaScript Edition, etc. Which is the right one for my application?</span>
Check out [Dynamsoft Barcode Reader SDK Edition Comparison](https://www.dynamsoft.com/blog/insights/barcode-reader-sdk-editions/) to identify the right product/edition.

#### <span id="U3">Why does it return strange characters (messy code, gibberish, or non-printable) as a result?</span>
Some barcodes are encoded with non-printable characters (such as \0) or other different types (UTF-16, GB2312, etc.). We are using UTF-8 encoding type in our sample applications for demonstration purposes. In your application, you need to use BarcodeBytes to get the raw data and then convert it to the desired encoding instead of using BarcodeText directly.

#### <span id="U4">How to get the “result image” with overlays once barcodes are found in the image?</span>
It is possible to get the resulting image with overlays. When a barcode is found, our library will not only return the barcode text, but also the coordinates of the barcode. You can add a rectangle on the barcode to highlight it so that users know which barcode is being scanned.

#### <span id="U5">The barcode reader SDK sometimes return false results with four or fewer characters. How to avoid it?</span>
You may get results with four or fewer characters for Industrial_25 and ITF barcode symbologies. This is because these two symbologies have weak error protection and checksum. To avoid such cases, you can try:

- Use MinResultConfidence to filter out barcode results having Confidence of less than 35. The Confidence tells us how confident it is about the decoding result. The value ranges from 0 (uncertain) to 100 (100% correct).
- Use MinBarcodeTextLength to set a minimum character length for the barcode results. For more information to filter out unwanted barcode results, please refer to [this article]({{ site.scenario_settings }}decode-result.html).

#### <span id="U6">Can I scan barcodes on US Driver’s Licenses?</span>
Yes, the barcode on US Driver’s Licenses is a PDF417 code and can be scanned with our library. The result is returned in raw data and you’ll need to parse it into human-readable formats.