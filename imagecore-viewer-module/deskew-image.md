---
layout: default-layout
title: How to automatically deskew an image
keywords: dynamic .net twain, deskew an image
description: How to automatically deskew an image
needAutoGenerateSidebar: true
---

# How to automatically deskew an image

Generally, there are two ways to automatically deskew an image with Dynamic .NET TWAIN.

1. The first option is to use Dynamic .NET TWAIN's built-in methods. Below are the basic steps:
- Calculate the skew angle by using GetSkewAngle Method,
```c#
double Angle;
Angle = m_ImageCore.ImageProcesser.GetSkewAngle(m_ImageCore.ImageBuffer.CurrentImageIndexInBuffer);
```
- Use Rotate method to de-skew the image,
```c#
m_ImageCore.ImageProcesser.Rotate(m_ImageCore.ImageBuffer.CurrentImageIndexInBuffer, -Angle, true, Dynamsoft.Core.Enums.EnumInterpolationMethod.BestQuality);
```
If you want to do de-skew to each scanned image, you can call the above code in OnPostTransfer Event.

2. The second option is to use custom capability of the scanner, which requires the support of the scanner itself.
you can use CapSet functionality and the code is as follows,
```c#
m_TwainManager.Capability = (Dynamsoft.TWAIN.Enums.TWCapability)4433; //AutoDeskew
m_TwainManager.CapType = Dynamsoft.TWAIN.Enums.TWCapType.TWON_ONEVALUE;
m_TwainManager.CapValue = 0;
bool bRet = m_TwainManager.CapSet();
```

If you need any assistance or have any problem, please feel free to contact <support@dynamsoft.com>.