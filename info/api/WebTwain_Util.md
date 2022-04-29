---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Utility APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Utility APIs
breadcrumbText: Utility
description: Dynamic Web TWAIN SDK Documentation API Reference Utility APIs Page
---

# {WebTwainObject} Util

The properties and methods on this page live in the namespace {WebTwainObject}. {WebTwainObject} denotes the `WebTwain` instance. Learn about [how to create a web twain object](https://www.dynamsoft.com/web-twain/docs/indepth/features/initialize.html?ver=latest#creating-the-webtwain-instance).

**Methods**

|                                                                        |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`RegisterEvent()`]({{site.info}}api/WebTwain_Util.html#registerevent) | [`UnregisterEvent()`]({{site.info}}api/WebTwain_Util.html#unregisterevent)                   | [`SetProductKeyAsync()`]({{site.info}}api/WebTwain_Util.html#setproductkeyasync) |
| [`SetLanguage()`]({{site.info}}api/WebTwain_Util.html#setlanguage)     | [`GenerateURLForUploadData()`]({{site.info}}api/WebTwain_Util.html#generateurlforuploaddata) |

**Properties**

|                                       |
| :------------------------------------ | :---------------------------- | ----------------------------- | ------------------------------- |
| [`ErrorCode`](#errorcode)             | [`ErrorString`](#errorstring) | [`LogLevel`](#loglevel)       | [`Manufacturer`](#manufacturer) |
| [`ProductFamily`](#productfamily)     | [`ProductName`](#productname) | [`VersionInfo`](#versioninfo) | [`ProductKey`](#productkey)     |
| [`UseLocalService`](#uselocalservice) |

---

## isUsingActiveX

**Syntax**

```typescript
/**
 * Return whether the WebTwain object is running the ActiveX edition.
 */
isUsingActiveX(): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">all versions </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## RegisterEvent

**Syntax**

```typescript
/**
 * Specify an event listener for the specified built-in event.
 * @param name Specify the event
 * @param callback The event listener
 */
RegisterEvent(name: string, callback: () => void): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v9.2+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## UnregisterEvent

**Syntax**

```typescript
/**
 * Remove an event listener from the specified built-in event.
 * @param name Specify the event
 * @param callback The event listener
 */
UnregisterEvent(name: string, callback: () => void): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v9.2+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

There can only be one listener for each built-in event. If you call `RegisterEvent` on the same event again, the new callback will replace the old one.

---

## SetProductKeyAsync

**Syntax**

```typescript
/**
 * Set the product key.
 * @param productKey Specify the key.
 */
SetProductKeyAsync(
    productKey: string
): Promise<any>;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

## SetLanguage

**Syntax**

```typescript
/**
 * Set the language for the authorization dialogs.
 * @param language Specify the language.
 */
SetLanguage(
    language: Dynamsoft.DWT.EnumDWT_Language | number
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The language set with this method is only for the built-in security dialogs which show up when the user tries to access a scanner, a camera or a local file.

---

## GenerateURLForUploadData

**Syntax**

```typescript
/**
 * Generate a URL to be used by a FileUpoader instance to fetch the data to upload.
 * @param indices Specify the images to upload.
 * @param type Specify the file type.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument resultURL The generated URL.
 * @argument indices The indices of the images.
 * @argument type The file type.
 */
GenerateURLForUploadData(
    indices: number[],
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: (
        resultURL: string,
        indices: number[],
        type: Dynamsoft.DWT.EnumDWT_ImageType | number
    ) => void,
    failureCallback: (
        errorCode: number,
        errorString: string
    ) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v14.0+ </td>
<td align="center">v15.1+ </td>
<td align="center">v15.1+ </td>
<td align="center">v15.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The language set with this method is only for the built-in security dialogs which show up when the user tries to access a scanner, a camera or a local file.

---

## ErrorCode

**Syntax**

```typescript
/**
 * Return the error code.
 */
readonly ErrorCode: number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

The `ErrorCode` and `ErrorString` always reflect the result of the last API call. So make sure you read them in time.

---

## ErrorString

**Syntax**

```typescript
/**
 * Return the error string.
 */
readonly ErrorString: string;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

The `ErrorCode` and `ErrorString` always reflect the result of the last API call. So make sure you read them in time.

---

## LogLevel

**Syntax**

```typescript
/**
 * Return or set the log level for debugging.
 */
LogLevel: number;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.3+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

The logs for the Dynamic Web TWAIN library are saved in the directory `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17\log\`. By default, `LogLevel` is 0 and nothing is recorded. When it is set to 1, all debugging information is recorded. This setting in your application will apply to all machines.

To enable logging on a specific machine, you can set `LogLevel` to 14 in this file: `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17\DSConfiguration.ini`.

---

## Manufacturer

**Syntax**

```typescript
/**
 * Manufacturer in the identity string of the Dynamic Web TWAIN library.
 */
readonly Manufacturer: string;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

`Manufacturer` , `ProductFamily` , `ProductName` and `VersionInfo` together form the identity string of the Dynamic Web TWAIN library.

---

## ProductFamily

**Syntax**

```typescript
/**
 * ProductFamily in the identity string of the Dynamic Web TWAIN library.
 */
readonly ProductFamily: string;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

`Manufacturer` , `ProductFamily` , `ProductName` and `VersionInfo` together form the identity string of the Dynamic Web TWAIN library.

---

## ProductName

**Syntax**

```typescript
/**
 * ProductName in the identity string of the Dynamic Web TWAIN library.
 */
readonly ProductName: string;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

`Manufacturer` , `ProductFamily` , `ProductName` and `VersionInfo` together form the identity string of the Dynamic Web TWAIN library.

---

## VersionInfo

**Syntax**

```typescript
/**
 * VersionInfo in the identity string of the Dynamic Web TWAIN library.
 */
readonly VersionInfo: string;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v1.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

`Manufacturer` , `ProductFamily` , `ProductName` and `VersionInfo` together form the identity string of the Dynamic Web TWAIN library.

---

## ProductKey

**Syntax**

```typescript
/**
 * Return or set the ProductKey.
 */
ProductKey: string;
```

**Availability**

<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v9.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The ProductKey contains the license to use the Dynamic Web TWAIN library. From version 16.1, if the license needs to be changed at runtime, use the method `SetProductKeyAsync()` instead.

## UseLocalService

**Syntax**

```typescript
/**
 * Return whether this WebTwain instance is in Local-Service mode or WASM mode.
 */
UseLocalService: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td colspan="5" align="center">Desktop Service Edition</td>
<td>WebAssembly Edition</td>
</tr>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
<td align="center">v16.1+ </td>
</tr>

</table>
</div>
