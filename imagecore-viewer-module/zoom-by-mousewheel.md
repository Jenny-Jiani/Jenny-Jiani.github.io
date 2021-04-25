---
layout: default-layout
title: How to zoom images using mouse wheel
keywords: dynamic .net twain, zoom images, mouse wheel
description: How to zoom images using mouse wheel
needAutoGenerateSidebar: true
---

# How to zoom images using mouse wheel

Dynamic .NET TWAIN allows you to zoom images using hotkeys. Below is a simple sample in C# to use the Ctrl key + mouse wheel to zoom images in Dynamic .NET TWAIN.

```c#
private void btnScan_Click(object sender, EventArgs e)
        {
            //show current image only
            dsViewer1.SetViewMode(-1, -1);
            //enable zooming image using hot key
            dsViewer1.EnableInteractiveZoom = true;
        }
```

