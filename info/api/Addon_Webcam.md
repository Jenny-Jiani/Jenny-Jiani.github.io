---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Webcam Addon APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Webcam Addon APIs
breadcrumbText: Webcam Addon
description: Dynamic Web TWAIN SDK Documentation API Reference Webcam Addon APIs Page
---

# `{WebTwainObject}.Addon.Webcam`

> {WebTwainObject} denotes the `WebTwain` instance.

**Methods**

|                                                         |
| :------------------------------------------------------ | :-------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`CaptureImage()`](#captureimage)                       | [`CloseSource()`](#closesource)                                 | [`GetCameraControlPropertySetting()`](#getcameracontrolpropertysetting) | [`GetCameraControlPropertyMoreSetting()`](#getcameracontrolpropertymoresetting) |
| [`GetVideoPropertySetting()`](#getvideopropertysetting) | [`GetVideoPropertyMoreSetting()`](#getvideopropertymoresetting) | [`SetCameraControlPropertySetting()`](#setcameracontrolpropertysetting) | [`SetVideoPropertySetting()`](#setvideopropertysetting)                         |
| [`GetFrameRate()`](#getframerate)                       | [`SetFrameRate()`](#setframerate)                               | [`GetMediaType()`](#getmediatype)                                       | [`SetMediaType()`](#setmediatype)                                               |
| [`GetResolution()`](#getresolution)                     | [`SetResolution()`](#setresolution)                             | [`GetFramePartURL()`](#getframeparturl)                                 | [`GetFrameURL()`](#getframeurl)                                                 |
| [`GetSourceList()`](#getsourcelist)                     | [`SelectSource()`](#selectsource)                               | [`PauseVideo()`](#pausevideo)                                           | [`PlayVideo()`](#playvideo)                                                     |
| [`SetVideoRotateMode()`](#setvideorotatemode)           | [`StopVideo()`](#stopvideo)                                     |

## CaptureImage

**Syntax**

```typescript
/**
 * Capture an image from the current camera.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error String
 */
CaptureImage(
    successCallback: () => void,
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetSourceList

**Syntax**

```typescript
/**
 * Return a list of all available cameras.
 */
GetSourceList(): string[];
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SelectSource

**Syntax**

```typescript
/**
 * Select a camera to use.
 * @param name Specify the camera.
 */
SelectSource(name: string): boolean;
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## CloseSource

**Syntax**

```typescript
/**
 * Close the current camera.
 */
CloseSource(): boolean;
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetSourceList

**Syntax**

```typescript
/**
 * Return a list of all available cameras.
 */
GetSourceList(): string[];
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SelectSource

**Syntax**

```typescript
/**
 * Select a camera to use.
 * @param name Specify the camera.
 */
SelectSource(name: string): boolean;
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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## CloseSource

**Syntax**

```typescript
/**
 * Close the current camera.
 */
CloseSource(): boolean;
```

**Usage notes**

When you close the camera, the video stream will stop at the last frame.

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
<td align="center">v10.2+ </td>
<td align="center">v10.2+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## PlayVideo

**Syntax**

```typescript
/**
 * Start to play the video stream from the current camera.
 * @param DWObject Specify a WebTwain instance to show the video.
 * @param quality Specify the quality of the video.
 * @param frameDidShow A callback function that is triggered after each video frame is shown.
 */
PlayVideo(
    DWObject: WebTwain,
    quality: number,
    frameDidShow?: function () {}
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## PauseVideo

**Syntax**

```typescript
/**
 * Pause the video.
 */
PauseVideo(): boolean;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
---

## StopVideo

**Syntax**

```typescript
/**
 * Stop the video.
 */
StopVideo(): boolean;
```

**Usage notes**

When you capture a frame, it's always the actual latest frame from the camera even if you have paused the video.

When you close the camera, the video stream will stop at the last frame.

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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetCameraControlPropertySetting

**Syntax**

```typescript
/**
 * Return information about the specified camera property.
 * @param property Specify the property.
 */
GetCameraControlPropertySetting(
    property: Dynamsoft.DWT.EnumDWT_CameraControlProperty | number
): CameraControlProperty;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetCameraControlPropertyMoreSetting

**Syntax**

```typescript
/**
 * Return detailed information about the specified camera property.
 * @param property Specify the property.
 */
GetCameraControlPropertyMoreSetting(
    property: Dynamsoft.DWT.EnumDWT_CameraControlProperty | number
): CameraControlPropertyExtra;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetCameraControlPropertySetting

**Syntax**

```typescript
/**
 * Set the specified camera property.
 * @param property Specify the property.
 * @param value Specify the value.
 * @param auto Specify whether the propery should change automatically.
 */
SetCameraControlPropertySetting(
    property: Dynamsoft.DWT.EnumDWT_CameraControlProperty | number,
    value: number,
    auto: boolean
): boolean;

interface CameraControlProperty {
    /**
     * Return the value of the property.
     */
    GetValue(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}

interface CameraControlPropertyExtra {
    /**
     * Return the minimum value of the property.
     */
    GetMinValue(): number;
    /**
     * Return the maximum value of the property.
     */
    GetMaxValue(): number;
    /**
     * Return the default value of the property.
     */
    GetDefaultValue(): number;
    /**
     * Return the smallest increment by which the property can change.
     */
    GetSteppingDelta(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
```

**Usage notes**

Check out <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_cameracontrolproperty" target="_blank">Dynamsoft.DWT.EnumDWT_CameraControlProperty</a>.

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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetVideoPropertySetting

**Syntax**

```typescript
/**
 * Return information about the specified video property.
 * @param property Specify the property.
 */
GetVideoPropertySetting(
    property: Dynamsoft.DWT.EnumDWT_VideoProperty | number
): VideoControlProperty;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetVideoPropertyMoreSetting

**Syntax**

```typescript
/**
 * Return detailed information about the specified video property.
 * @param property Specify the property.
 */
GetVideoPropertyMoreSetting(
    property: Dynamsoft.DWT.EnumDWT_VideoProperty | number
): VideoControlPropertyExtra;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetVideoPropertySetting

**Syntax**

```typescript
/**
 * Set the specified video property.
 * @param property Specify the property.
 * @param value Specify the value.
 * @param auto Specify whether the propery should change automatically.
 */
SetVideoPropertySetting(
    property: Dynamsoft.DWT.EnumDWT_VideoProperty | number,
    value: number,
    auto: boolean
): boolean;

interface VideoControlProperty {
    /**
     * Return the value of the property.
     */
    GetValue(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}

interface VideoControlPropertyExtra {
    /**
     * Return the minimum value of the property.
     */
    GetMinValue(): number;
    /**
     * Return the maximum value of the property.
     */
    GetMaxValue(): number;
    /**
     * Return the default value of the property.
     */
    GetDefaultValue(): number;
    /**
     * Return the smallest increment by which the property can change.
     */
    GetSteppingDelta(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
```

**Usage notes**

Check out <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_videoproperty" target="_blank">Dynamsoft.DWT.EnumDWT_VideoProperty</a>.

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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetFrameRate

**Syntax**

```typescript
/**
 * Return the frame rates supported by the current camera.
 */
GetFrameRate(): FrameRate;
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
<td align="center">v14.3.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetMediaType

**Syntax**

```typescript
/**
 * Return the media types supported by the current camera.
 */
GetMediaType(): MediaType;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetResolution

**Syntax**

```typescript
/**
 * Return the resolutions supported by the current camera.
 */
GetResolution(): Resolution;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetFrameRate

**Syntax**

```typescript
/**
 * Set the frame rate.
 * @param rate Specify the frame rate.
 */
SetFrameRate(rate: number): boolean;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetMediaType

**Syntax**

```typescript
/**
 * Set the media type.
 * @param type Sepcify the media type.
 */
SetMediaType(type: string): boolean;
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetResolution

**Syntax**

```typescript
/**
 * Set the resolution.
 * @param resolution Specify the resolution.
 */
SetResolution(resolution: string): boolean;

interface FrameRate {
    /**
     * Return the number of available frame rates.
     */
    GetCount(): number;
    /**
     * Return the specified frame rate.
     */
    Get(index: number): number;
    /**
     * Return the current frame rate.
     */
    GetCurrent(): number;
}

interface MediaType {
    /**
     * Return the number of available media types.
     */
    GetCount(): number;
    /**
     * Return the specified media type.
     */
    Get(index: number): string;
    /**
     * Return the current media type.
     */
    GetCurrent(): string;
}

interface Resolution {
    /**
     * Return the number of available resolutions.
     */
    GetCount(): number;
    /**
     * Return the specified resolution.
     */
    Get(index: number): string;
    /**
     * Return the current resolution.
     */
    GetCurrent(): string;
}
```

**Example**

```javascript
DWObject.Addon.Webcam.SetResolution("640 x 480");
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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SetVideoRotateMode

**Syntax**

```typescript
/**
 * Rotate the video.
 * @param mode Specify the rotate mode
 */
SetVideoRotateMode(
    mode: Dynamsoft.DWT.EnumDWT_VideoRotateMode | number
): boolean;
```

**Usage notes**

Check out <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_videorotatemode" target="_blank">Dynamsoft.DWT.EnumDWT_VideoRotateMode</a>.

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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetFrameURL

**Syntax**

```typescript
/**
 * Return the URL (http(s)://) for the latest frame.
 */
GetFrameURL(): string;
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
<td align="center">v14.3.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetFramePartURL

**Syntax**

```typescript
/**
 * Return the internal URL (dwt://) for the latest frame.
 */
GetFramePartURL(): string;
```

**Usage notes**

`GetFrameURL()` returns a public URL that can be used to access the frame directly by any applicatoin capable of HTTP requests that runs on the same machine. For example: 'https://127.0.0.1:18623/dwt/dwt_16000428/img?id=853407158&index=-1&width=-1&height=-1&webcam=80&t=1590481406860'.

`GetFramePartURL()` returns an internal URL that only Dynamsoft libraries such as the Barcode Reader add-on can read. For example: `dwt://dwt_16000428/img?id=853407158&index=-1&width=-1&height=-1&webcam=80&t=1590481403659` .

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
<td align="center">v14.3.1+ </td>
<td align="center">v14.3.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
