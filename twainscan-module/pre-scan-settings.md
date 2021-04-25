---
layout: default-layout
title: Pre-scan settings
keywords: dynamic .net twain, Pre-scan settings
description: Pre-scan settings
needAutoGenerateSidebar: true
---

# Pre-scan settings

This KB is for Dynamic .NET TWAIN v7.x and higher only.

## How to select scanner by its name

Dynamic .NET TWAIN offers a method named `SelectSourceByIndex` which allows you to select the index of the source in `SourceNameItems` property as the current source.

However, in some cases, you may want to select a source by source name. There isn’t such a method, but that can be achieved by a few lines of code.

Following is the sample code:

```c#
for (short i = 0; i < m_TwainManager.SourceCount; i++)
{
    string PSourceName = 7500"; //"7500" is part of the source name   
    if (m_TwainManager.SourceNameItems(i).IndexOf(PSourceName) != -1)
    {
        m_TwainManager.SelectSourceByIndex(i);
        break;
    }         
}
```

In the sample, we use a scanner named HP Scanjet Enterprise 7500. So the PSourceName can be "7500".

Please change `PSourceName` accordingly. In order to select the right source as you wanted, please make sure that the PSourceName is unique to all the source.

## How to Discard blank pages automatically

There are two main ways that you may discard blank pages in Dynamic .NET TWAIN automatically.

1. If the TWAIN driver of your device supports discarding blank pages, you can use the driver's built-in feature.

a) You can set the `IfShowUI` property to true to display the User Interface (UI) of the source and you can check the option there (it normally reads 'discard blank').

b). If you don't want to show the user interface of the source, you can negotiate the `ICAP_AUTODISCARDBLANKPAGES` capability in codes to discard blank page automatically. Please NOTE that this property or capability only works if the scanner itself supports the feature (on the hardware level).

2. If the scanner itself doesn't support discarding blank pages, you can also use the `IsBlankImage(Int16)` method to do this as a workaround. To detect and discard blank pages automatically, you can do it in `OnPostTransfer` event which fires after each transfer. The following code snippet will discard blank pages automatically based on a defined standard deviation.

```c#
public bool OnPostTransfer(Bitmap bit)
        {
            m_ImageCore.IO.LoadImage(bit);
            m_ImageCore.ImageProcesser.BlankImageMaxStdDev = 10;
            int i = m_ImageCore.ImageBuffer.HowManyImagesInBuffer - 1;
            if (m_ImageCore.ImageProcesser.IsBlankImage((short)i))
            {
                m_ImageCore.ImageBuffer.RemoveImage((short)i);
                MessageBox.Show("Removed image" + i.ToString());
            }
            GC.Collect(); //make garbage collector work to release memory
            return true;
        }
```

In this sample, the value of `BlankImageMaxStdDev` will define how sensitive the blank page detection is. If you are finding pages are not being detected blank often enough then you can increase the value. If you are having issues with the borders of images affecting the blank page detection you may also use the function:

```c#
public bool IsBlankImage(short sImageIndex, int iLeft, int iTop, int iRight, int iBottom, bool bFuzzyMatch)
```

This will allow you to specify a certain region within the page to detect if it's blank. With this, you can detect an area inside the borders of the full page.

## How to use ADF

You can use Dynamic .NET TWAIN's IfFeederEnabled property to set whether the Source enables automatic document feeding process.

Note: The default maximum number of images can be held in the buffer is 64. If you want to scan more images, you should use `MaxImagesInBuffer` property to set the maximum number to a larger number.

```c#
private void btnScan_Click(object sender,EventArgs e)
{
            m_TwainManager.SelectSource(); //Please make sure you open the data source before calling the IfFeederEnabled property
            m_ImageCore.ImageBuffer.MaxImagesInBuffer = 100;//set the maximum number of images can be held in buffer 
            m_TwainManager.IfShowUI = false;
            m_TwainManager.IfFeederEnabled = true;
            m_TwainManager.IfAutoFeed = true;
            m_TwainManager.XferCount = -1;
            m_TwainManager.AcquireImage(this as IAcquireCallback);
}
```