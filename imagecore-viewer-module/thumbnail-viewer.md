---
layout: default-layout
title: How to create a thumbnail viewer
keywords: dynamic .net twain, thumbnail viewer
description: How to create a thumbnail viewer
needAutoGenerateSidebar: true
---


# How to create a thumbnail viewer

There isn't a built-in thumbnail for Dynamic .NET TWAIN. To show the thumbnails, you can put two Dynamic .NET TWAIN Viewers on the form. Below is just one possible way to do this.

1. Create the Viewers and bind it with ImageCore.

```c#
m_CoreForImageViewer = new ImageCore();
m_CoreForImageThum = new ImageCore();
 
dsViewer.Bind(m_CoreForImageViewer);
dsViewerThum.Bind(m_CoreForImageThum);
```

2. Add a function to update the thumbnail view with the original view.

```c#
private void UpdateImageInfo()
   {
       if (m_CoreForImageThum.ImageBuffer.CurrentImageIndexInBuffer >= 0)
       {
           if (this.m_CoreForImageViewer.ImageBuffer.CurrentImageIndexInBuffer < 0)
           {
               m_CoreForImageViewer.IO.LoadImage(m_CoreForImageThum.ImageBuffer.GetBitmap(m_CoreForImageThum.ImageBuffer.CurrentImageIndexInBuffer));
           }
           else
           {
               m_CoreForImageViewer.ImageBuffer.SetBitmap(this.m_CoreForImageViewer.ImageBuffer.CurrentImageIndexInBuffer, m_CoreForImageThum.ImageBuffer.GetBitmap(m_CoreForImageThum.ImageBuffer.CurrentImageIndexInBuffer));
           }
        }
   }
```
Note: you will need to update the image info whenever you load/edit/acquire the image.

