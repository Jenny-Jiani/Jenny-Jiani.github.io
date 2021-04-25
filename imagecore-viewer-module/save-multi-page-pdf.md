---
layout: default-layout
title: How to save selected images as multi-page PDF
keywords: dynamic .net twain, save pdf file, multi-page pdf
description: How to save selected images as multi-page PDF
needAutoGenerateSidebar: true
---

# How to save selected images as multi-page PDF

From Dynamic .NET TWAIN v7.0, `SaveAsMultiPagePDF` is removed. `ISave` interface in PDF module will do the same job. Below is simple code for that:

```c#
using Dynamsoft.PDF;
public partial class Form1 : Form,ISave{
            public object GetAnnotations(int iPageNumber)
        {
            return true;      
        }
 
        public Bitmap GetImage(int iPageNumber)
        {
            return m_ImageCore.ImageBuffer.GetBitmap((short)dsViewer1.CurrentSelectedImageIndicesInBuffer[iPageNumber]);
        }
 
        public int GetPageCount()
        {
            return dsViewer1.CurrentSelectedImageIndicesInBuffer.Count; //gets the number of selected images 
        }
}
```

