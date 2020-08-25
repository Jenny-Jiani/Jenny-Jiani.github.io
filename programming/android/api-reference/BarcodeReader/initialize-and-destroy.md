---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - BarcodeReader initialization and Destroy
keywords: ddestroy, BarcodeReader, initialization and destroy, api reference, android
needAutoGenerateSidebar: true
---

# Android API Reference - BarcodeReader Initialization and Destroy

  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](#barcodereader) | Initialization of `BarcodeReader` object.|
  | [`destroy`](#destroy) | Destroys an instance of `BarcodeReader` object.|

---





## BarcodeReader

Initialization of `BarcodeReader` object.

```java
com.dynamsoft.barcode.BarcodeReader.BarcodeReader() throws BarcodeReaderException
```

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Remarks
If you initialize DynamsoftBarcodeReader by this method without license, the decoding results maybe unreliable.


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader();
```

&nbsp;

Initialization of `BarcodeReader` with license.

```java
com.dynamsoft.barcode.BarcodeReader.BarcodeReader(String license)	throws Exception
```

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
```


&nbsp;

## Destroy

```java
void com.dynamsoft.barcode.BarcodeReader.destroy()	
```


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.destroy();
```

