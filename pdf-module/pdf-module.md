---
layout: default-layout
title: PDF Module
keywords: dynamic .net twain, pdf load & save
description: PDF Module index page
breadcrumbText: PDF Module
needAutoGenerateSidebar: true
---


# PDF Module

## How to load a partial number of pages of a PDF in DNT

You can use the codes below to show the partial pages.

```c#
m_PDFRasteizer.ConvertMode = Dynamsoft.PDF.Enums.EnumConvertMode.enumCM_RENDERALL;
m_PDFRasteizer.ConvertToImage(@"<Path of the file>", "", 100, this as IConvertCallback);
public void LoadConvertResult(ConvertResult result)
{
     if (result.CurrentPage > 3 && result.CurrentPage < 6) // show the fifth (index 4) and sixth (index 5) pages
        {
         m_ImageCore.IO.LoadImage(result.Image);
        }
}
```

## How to save a PDF with a specific page size

This KB is for Dynamic .NET TWAIN v7.x and higher only.

There is an API called `PageSize`, please set it like following to change the saved PDF size:

```c#
m_Creator.PageSize = Dynamsoft.PDF.Enums.EnumPageSize.A5;
```