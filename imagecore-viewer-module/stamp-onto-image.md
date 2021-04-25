---
layout: default-layout
title: Stamp onto Images
keywords: stamp, icon, text
description: How to stamp text & icons onto acquired images in Dynamic .NET TWAIN
needAutoGenerateSidebar: true
---

# How to stamp text & icons onto acquired images in Dynamic .NET TWAIN

Microsoft .NET Framework has its built-in method Graphics.DrawImage to add an image on another at the specified location.

Here is a simple sample in C#:

```c#
private void button2_Click(object sender, EventArgs e)
{
    short index = m_ImageCore.ImageBuffer.CurrentImageIndexInBuffer;
    System.Drawing.Bitmap original = m_ImageCore.ImageBuffer.GetBitmap(index);
    System.Drawing.Image icon = System.Drawing.Image.FromFile("<the path for the stamp>");
    Graphics g = Graphics.FromImage(original);
    g.DrawImage(icon, itop, ileft, iwidth, iheight);
    g.Dispose();
    m_ImageCore.ImageBuffer.SetBitmap(index, original);
}
```

