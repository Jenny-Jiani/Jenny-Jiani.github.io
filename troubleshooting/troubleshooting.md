---
layout: default-layout
title: Troubleshooting
keywords: dynamic .net twain, troubleshooting, application crash, LogLevel, watermark
description: Troubleshooting index page
breadcrumbText: Troubleshooting
needAutoGenerateSidebar: true
---


# Troubleshooting

## Why does the application crash when there is a large number of images in the buffer

**Symptom:**

Once you scan, load or capture a large number of pages, the application may crash.

**Cause:**

The images in buffer are out of memory.

**Solutions:**

- If your application is a 32-bit application, you could compile it as a 64-bit application. It is because a 32-bit application can only use up to 2GB memory, however, a 64-bit application has no memory limit.

- For the large volume scanning requirement, you can choose to save the images to the disk instead of holding all in the memory.  You could set `TwainManager.TransferMode` to Disk File Mode. 
In this mode, the scanned images are transferred to a specified file directly. The Disk File Mode is ideal when transferring large images that might encounter memory limitations with Native Mode. Check out `TwainManager.SetFileXFERInfo` for more information.

- You could control the buffer memory use.
1. Release memory use by using `RemoveImage`, `RemoveImages`, `RemoveAllImages` when the number of images in the buffer is large.
2. Limit memory use by setting `MaxImagesInbuffer` to limit the number of images in the buffer.

## How to catch detailed information by using LogLevel Property

`LogLevel` is requested. The property returns or sets the log level for debug purpose.

**Data type:** Short

**Syntax:** ObjectName. LogLevel

**Remark:**

0 - The default value for LogLevel.

1 - More output information will be provided for debug


### From v8.x

**Step-by-Step Usage Guide:**

1. Add LogLevel property to your codes before calling any Dynamic .NET TWAIN properties and methods, such as:

```c#
public Form_Name(){
InitializeComponent();
m_TwainManager.LogLevel=1; // please change m_TwainManager according to your setting
}
```

2. Debug the code and open the Task Manager.
Find the app progress under Progress - Apps and Dynamsoft Scanning New Module.

![Loglevel-1]({{site.assets}}img/Loglevel-1.png)

Right-click Dynamsoft Scanning New Module and click Open file location.

![Loglevel-2]({{site.assets}}img/Loglevel-2.png)

You will find the log folder under this location.

![Loglevel-3]({{site.assets}}img/Loglevel-3.png)

3. Then please reproduce the issue you are experiencing with Dynamic .NET TWAIN. Collect the log folder after that.

4. Please send it to <support@dynamsoft.com>.
 We will then check the files and give you a proper solution.

### From v3.x to v7.x

**Step-by-Step Usage Guide:**

1. Add `LogLevel` property to your codes before calling any Dynamic .NET TWAIN properties and methods, such as:

```c#
public Form_Name(){
InitializeComponent();
m_TwainManager.LogLevel=1; // please change m_TwainManager according to your setting
}
```

2. Download DebugView [here](http://technet.microsoft.com/en-us/sysinternals/bb896647), and unzip locally.
3. Run Dbgview.exe.
4. Then please reproduce the issue you are experiencing with Dynamic .NET TWAIN. The DebugView will record detailed information during the process, as shown below.
5. Please click on Save to save the log file and send it to <support@dynamsoft.com>.
We will then check the files and give you a proper solution.




## Why did I get the exception "Could not open input file" when encrypt and merge pdf

This KB is for Dynamic .NET TWAIN v7.x and higher only.

Because the PDF you are trying to encrypt or merge has annotations on it. For now, Dynamic .NET TWAIN doesn't support this kind of PDF in `encrypt()` and `merge()` methods.

## Why am I getting a watermark saying "Unlicensed Demo Version" on the image

**Symptom:**

You are trying to use Dynamic .NET TWAIN and are seeing a watermark on the image.

![WaterMark]({{site.assets}}img/Watermark.png)

**Cause:**

The license you are using for this module has expired or is invalid/empty.

**Solution:**

Please contact us <support@dynamsoft.com> for an extension to the trial license or the purchase of a permanent license. After that, please replace the old license with the following line:

```c#
TwainManager m_TwainManager = new TwainManager("<The license for TWAINScan Module>");
PDFRasterizer m_Rasterizer = new PDFRasterizer("<The license for PDF Module>");
PDFCreator m_Creator = new PDFCreator("<The license for PDF Module>");
BarcodeGenerator m_Generator = new BarcodeGenerator("<The license for Barcode Generator>");
Tesseract m_OCR = new Tesseract("<The license for OCR Module>");
```