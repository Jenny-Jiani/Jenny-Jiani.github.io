---
layout: default-layout
title: How to rotate video
keywords: dynamic .net twain, camera module, webcam, rotate video
description: How to rotate video for Dynamic .NET TWAIN camera module
needAutoGenerateSidebar: true
---

# How to rotate video

This KB is for Dynamic .NET TWAIN v7.x and higher only.

Dynamic .NET TWAIN offers an event named `OnFrameCaptrue` which is triggered when a frame is captured by the camera. You can set some preview features with that.

Following is the sample code for rotating the video:

```c#
private void Rotate_Click(object sender, EventArgs e)
 {
 m_CurrentCamera.RotateVideo(Dynamsoft.UVC.Enums.EnumVideoRotateType.Rotate_180);
 m_CurrentCamera.OnFrameCaptrue += M_CurrentCamera_OnFrameCaptrue;
  
 }
 int i = 0;
 private void SetPicture(Image img)
 {
 Bitmap temp = ((Bitmap)(img)).Clone(new Rectangle(0, 0, img.Width, img.Height), img.PixelFormat);
 if (pictureBox2.InvokeRequired)
 {
 pictureBox2.BeginInvoke(new MethodInvoker(
 delegate ()
 {
 pictureBox2.Image = temp;
 if (i == 0)
 {
 m_ImageCore.IO.LoadImage(temp);
 i++;
 }
 
 }));
 }
 else
 {
 pictureBox2.Image = temp;
 }
 }
 private void M_CurrentCamera_OnFrameCaptrue(Bitmap bitmap)
 {
 SetPicture(bitmap);
 //pictureBox2.Image = bitmap; // If you use this API directly, the app will throw an exception. 
 }
 ```

 You can also set other customized settings like adding grids.