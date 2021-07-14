---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Parameter and Runtime Settings Methods
keywords: getModeArgument, setModeArgument, getRuntimeSettings, resetRuntimeSettings, updateRuntimeSettings, parameter and runtime settings methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeReader` Parameter and Runtime Settings Methods

| Method               | Description |
|----------------------|-------------|
| [`getModeArgument`](#getmodeargument) | Get argument value for the specified mode parameter. |
| [`setModeArgument`](#setmodeargument) | Set argument value for the specified mode parameter. |
| [`getRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
| [`resetRuntimeSettings`](#resetruntimesettings) | Reset runtime settings to default. |
| [`updateRuntimeSettings`](#updateruntimesettings) | Modify and update the current runtime settings. |

---

## getModeArgument

Get the argument value for the specified mode parameter.

```javascript
getModeArgument(modeName, index, argumentName) returns Promise
```

#### Parameters

`modeName` *string*  
`index` *number*  
`argumentName` *string*

#### Return Value

`Promise<string>`

#### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)


&nbsp;

## setModeArgument

Set the argument value for the specified mode parameter.

```javascript
setModeArgument(modeName, index, argumentName, argumentValue) returns Promise
```


#### Parameters

`modeName` *string*  
`index` *number*  
`argumentName` *string*  
`argumentValue` *string*

#### Return Value

`Promise<void>`


#### Sample
```javascript
await reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
```

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

#### :+1: Tips and Tricks 

* Check out our [list of modes and arguments](https://www.dynamsoft.com/help/Barcode-Reader/_modes_argument.html).  
Note: Javascript Edition may not support all available modes listed. 


&nbsp;

## getRuntimeSettings

Get the current runtime settings.

```javascript
getRuntimeSettings() returns Promise
```



#### Return Value

<code>Promise<<a href="/global-interfaces.md#RuntimeSettings">RuntimeSettings</a>></code>


#### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)



&nbsp;

## resetRuntimeSettings

Reset all runtime settings to default values.

```javascript
resetRuntimeSettings() returns Promise
```


#### Return Value

`Promise<void>`


#### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)


&nbsp;

## updateRuntimeSettings

Update the runtime settings with a given object or use the string `speed`, `balance`, or `coverage` to use our preset settings for `BarcodeReader`. The default setting is `coverage`.

```javascript
updateRuntimeSettings(settings) returns Promise
```


#### Parameters

`settings` [*RuntimeSettings*](/global-interfaces.md#runtimesettings) | *string* 

#### Return Value

`Promise<void>`


#### Sample

```javascript
await reader.updateRuntimeSettings('balance');
let settings = await reader.getRuntimeSettings();
settings.barcodeFormatIds = Dynamsoft.EnumBarcodeFormat.BF_ONED;
await reader.updateRuntimeSettings(settings);
```

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
