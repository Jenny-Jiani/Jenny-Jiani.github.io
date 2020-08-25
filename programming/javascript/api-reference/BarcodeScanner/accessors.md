---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Accessors
keywords: defaultUIElementURL, singleFrameMode, soundOnSuccessfullRead, accessors, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeScanner` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`defaultUIElementURL`](#defaultuielementurl) | Get or set the default scanner UI. | 
| [`singleFrameMode`](#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfullRead`](#soundonsuccessfullread) | Get or set the sound to play when a barcode is read successfully. | 

&nbsp;

### Inherited Accessors from `BarcodeReader` 

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](../BarcodeReader/accessors.md#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](../BarcodeReader/accessors.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](../BarcodeReader/accessors.md#version) | Get current version. |


&nbsp;

## defaultUIElementURL

Get or set the default scanner UI. The default scanner UI is defined in the file `dist/dbr.scanner.html`. Follow [these steps](https://www.dynamsoft.com/help/Barcode-Reader-wasm/index.html#customizing-the-ui) to customize the UI. 

### get
```javascript
defaultUIElementURL() returns string
```

#### Return Value

`string`


### set
```javascript
defaultUIElementURL(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`


#### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)


#### :+1: Tips and Tricks 

* Be sure to set `defaultUIElementURL` before you call `createInstance`.



&nbsp;

## singleFrameMode

Get or set the camera mode. If `true`, single video frames will be used instead of a continuous video stream. It's especially useful for cameras that lack webcam access (lack of WebRTC support, e.g. Chrome on iOS).

### get
```javascript
singleFrameMode() returns Boolean
```

#### Return Value

`Boolean`


### set
```javascript
singleFrameMode(value) returns void
```

#### Parameters

`value` *Boolean*  

#### Return Value

`void`


#### Sample

```javascript
let scanner = await Dynamsoft.BarcodeScanner.createInstance();
scanner.singleFrameMode = true; // use singleFrameMode anyway
scanner.show();
```


#### :+1: Tips and Tricks 

* `singleFrameMode` is based on WebRTC support, not actual camera connection. In other words, if a browser supports WebRTC, it won't be using `singleFrameMode` by default even when there is no camera attached.

* By default, when the default UI is used, a camera icon will appear for the `singleFrameMode` which is defined by a SVG (`className` is `dbrScanner-bg-camera`). If you have customized the UI, you will have to provide your own UI implementation for this mode.



&nbsp;

## soundOnSuccessfullRead

Get or set the sound played when a barcode is read successfully. 

### get
```javascript
soundOnSuccessfullRead() returns HTMLAudioElement
```

#### Return Value

`HTMLAudioElement`


### set
```javascript
soundOnSuccessfullRead(value) returns void
```

#### Parameters

`value` *HTMLAudioElement*  

#### Return Value

`void`


#### Sample

```javascript
scanner.soundOnSuccessfullRead = new Audio("./pi.mp3");
```

