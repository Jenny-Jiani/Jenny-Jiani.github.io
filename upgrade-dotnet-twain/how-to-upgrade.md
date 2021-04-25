---
layout: default-layout
title: Upgrade Dynamic .NET TWAIN
keywords: upgrade Dynamic .NET TWAIN SDK
description: How to upgrade Dynamic .NET TWAIN SDK
breadcrumbText: Upgrade Dynamic .NET TWAIN
needAutoGenerateSidebar: true
---


# How to Upgrade

## From trial to full

If you have finished the development with the trial version, please simply replace the license key with the one sent in the email along with the installer. Below is a sample code for inserting the keys:

```c#
TwainManager m_TwainManager = new TwainManager("<The license for TWAINScan Module>");
PDFRasterizer m_Rasterizer = new PDFRasterizer("<The license for PDF Module>");
PDFCreator m_Creator = new PDFCreator("<The license for PDF Module>");
BarcodeGenerator m_Generator = new BarcodeGenerator("<The license for Barcode Generator>");
Tesseract m_OCR = new Tesseract("<The license for OCR Module>");

```

If you are new to Dynamic .NET TWAIN, please install it from the installer in the email and follow the guide in {installation folder}\Documentation\Dynamic .NET TWAIN {version number}\Documentation\Developer's Guide.pdf and create the application.

## From v7.x to higher major versions

Step 1: [Optional] Remove the old version of Dynamic .NET TWAIN through Control Panel -> Uninstall a program

Step 2: Install the new version. There are two options to get the latest installer of Dynamic .NET TWAIN.

- Option 1: Get an installer from downloading [a 30-day free trial version](https://www.dynamsoft.com/dotnet-twain/downloads/).

- Option 2: Once your upgrade request is processed, our sales team will process the upgrade and you can find the new version license and the download link along with the new upgrade order in your customer portal.

Step 3: License your app **via code**

```c#
TwainManager m_TwainManager = new TwainManager("<The license for TWAINScan Module>");
PDFRasterizer m_Rasterizer = new PDFRasterizer("<The license for PDF Module>");
PDFCreator m_Creator = new PDFCreator("<The license for PDF Module>");
BarcodeGenerator m_Generator = new BarcodeGenerator("<The license for Barcode Generator>");
Tesseract m_OCR = new Tesseract("<The license for OCR Module>");
```

Step 4: Update the DLL in Visual Studio after opening the app.

NOTE: In Solution Explorer, expand **References** -> right-click DynamicDotNetTWAIN -> Properties, and you will see the path there.

Step 5: Rebuild the solution.

Step 6: Go to the bin folder of your solution and verify the modification date of the DLL to see if it's using the new one. You can also right-click the DLL, click **Properties** -> **Details** tab to check its version number. If it's still the old one, please delete the DLL in VS and Rebuild.

## From older versions to v7.x or higher

From v7.0，the SDK has been completely re-constructed and separated into a few independent modules. Therefore, this new version is very different from any previous version. 

If you are upgrading from v4.x/5.x/6/x to v7.x or higher version, we would suggest that you refer to the new version Developer's Guide and start from scratch.

## For v6.x and lower versions only

Please refer to this old [Knowledge Base](http://kb.dynamsoft.com/questions/567/How+to+upgrade+Dynamic+.NET+TWAIN+to+the+latest+version%3F).



