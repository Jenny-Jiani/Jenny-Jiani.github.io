---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Scan in Multiple Threads 
keywords: multiple threads, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Scan in Multiple Threads    


To scan barcodes in multiple threads using Dynamsoft Barcode Reader, you need to create multiple instances of `BarcodeReader` and run separate instance in each thread. Dynamsoft Barcode Reader SDK is non-thread safe. Please don't have multiple threads access the same `BarcodeReader` object.     



We have a sample that shows how to use multiple threads to read barcodes from images using the C API.     
      


Get the sample: [Multi-thread scanning in C](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx?SampleID=220#gallery) >


