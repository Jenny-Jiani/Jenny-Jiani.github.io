---
layout: default-layout
title: How to add other languages support in the OCR Demo
keywords: dynamic .net twain, ocr languages
description: How to add other languages support in the OCR Demo
needAutoGenerateSidebar: true
---

# How to add other languages support in the OCR Demo

1. Open the solution in IDE
You can find it in *C:\Program Files (x86)\Dynamsoft\Dynamic .NET TWAIN {Version number}\Samples\C# Samples\OCRDemo* after installation. After opening it, please navigate to *Form1.cs*.

2. Download the language package from [this link](https://github.com/tesseract-ocr/tessdata_fast) into the language folder.
In our sample, it's *C:\Program Files (x86)\Dynamsoft\Dynamic .NET TWAIN {Version number}\Samples\Bin\tessdata*. Let's take Arabic as an example. You can download from [this page](https://github.com/tesseract-ocr/tessdata_fast/blob/master/ara.traineddata) and put it to that folder.

3. Add the code in Form1_Load function.

```c#
languages.Add("Arabic", "ara"); // the first value represents the string shown in the form and the second one should be the same as the file name of the language package.
```

4. Run the solution to see how it works

![ArabicOCR]({{site.assets}}img/ArabicOCR.png)