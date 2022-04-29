---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Buffer APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Buffer APIs
breadcrumbText: Buffer
description: Dynamic Web TWAIN SDK Documentation API Reference Buffer APIs Page
---

# {WebTwainObject} Buffer Manage

The properties and methods on this page live in the namespace {WebTwainObject}. {WebTwainObject} denotes the `WebTwain` instance. Learn about [how to create a web twain object](https://www.dynamsoft.com/web-twain/docs/indepth/features/initialize.html?ver=latest#creating-the-webtwain-instance).

**Methods**

|                                                 |
| :---------------------------------------------- | :------------------------------------------------------ | ------------------------------------------------------------------- | --------------------------------------------------- |
| [`ClearImageTags()`](#clearimagetags)           | [`RenameTag()`](#renametag)                             | [`RemoveTag()`](#removetag)                                         | [`GetTagList()`](#gettaglist)                       |
| [`FilterImagesByTag()`](#filterimagesbytag)     | [`ClearFilter()`](#clearfilter)                         | [`SetDefaultTag()`](#setdefaulttag)                                 | [`TagImages()`](#tagimages)                         |
| [`GetImageBitDepth()`](#getimagebitdepth)       | [`GetImageSize()`](#getimagesize)                       | [`GetImageSizeWithSpecifiedType()`](#getimagesizewithspecifiedtype) | [`GetSelectedImagesSize()`](#getselectedimagessize) |
| [`GetImageHeight()`](#getimageheight)           | [`GetImageWidth()`](#getimagewidth)                     | [`GetImagePartURL()`](#getimageparturl)                             | [`GetImageURL()`](#getimageurl)                     |
| [`GetImageXResolution()`](#getimagexresolution) | [`GetImageYResolution()`](#getimageyresolution)         | [`GetSkewAngle()`](#getskewangle)                                   | [`GetSkewAngleEx()`](#getskewangleex)               |
| [`ImageIDToIndex()`](#imageidtoindex)           | [`IndexToImageID()`](#indextoimageid)                   | [`IsBlankImage()`](#isblankimage)                                   | [`IsBlankImageExpress()`](#isblankimageexpress)     |
| [`SelectAllImages()`](#selectallimages)         | [`MoveImage()`](#moveimage)                             | [`SwitchImage()`](#switchimage)                                     | [`RemoveImage()`](#removeimage)                     |
| [`RemoveAllImages()`](#removeallimages)         | [`RemoveAllSelectedImages()`](#removeallselectedimages) | [`SelectImages()`](#selectimages)                                   | [`GetTagListByIndex()`](#gettaglistbyindex)         |
| [`CreateFile()`](#createfile)                   | [`OpenFile()`](#openfile)                               | [`GetCurrentFileName()`](#getcurrentfilename)                       | [`RemoveFile()`](#removefile)                       |
| [`GetFileInfoList()`](#getfileinfolist)         |


<!--* [GetImageBitDepthAsync()](#getimagebitdepthasync)-->

<!--* [RemoveAllImagesAsync()](#removeallimagesasync)-->

<!--* [RemoveAllSelectedImagesAsync()](#removeallselectedimagesasync)-->

**Properties**

|                                                           |
| :-------------------------------------------------------- | :------------------------------------------------ | --------------------------------------------- | ------------------------------------------------- |
| [`BlankImageCurrentStdDev`](#blankimagecurrentstddev)     | [`BlankImageMaxStdDev`](#blankimagemaxstddev)     | [`BlankImageThreshold`](#blankimagethreshold) | [`BufferMemoryLimit`](#buffermemorylimit)         |
| [`CurrentImageIndexInBuffer`](#currentimageindexinbuffer) | [`HowManyImagesInBuffer`](#howmanyimagesinbuffer) | [`IfAllowLocalCache`](#ifallowlocalcache)     | [`SelectedImagesIndices`](#selectedimagesindices) |
| [`MaxImagesInBuffer`](#maximagesinbuffer)                 |

**Events**

|                                       |
| :------------------------------------ | :------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------- |
| [`OnBufferChanged`](#onbufferchanged) | [`OnBitmapChanged`](#onbitmapchanged) | [`OnIndexChangeDragDropDone`](#onindexchangedragdropdone) | [`OnTopImageInTheViewChanged`](#ontopimageintheviewchanged) |

---

## IndexToImageID

**Syntax**

```typescript
/**

* Return the imageId of an image specified by the index.
* @param index The index of the image.

*/
IndexToImageID(index: number): number;
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
<td align="center">not supported  </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## ImageIDToIndex

**Syntax**

```typescript
/**
 * Return the index of an image specified by the imageId.
 * @param imageId The imageId of the image.
 */
ImageIDToIndex(imageId: number): number;
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
<td align="center">not supported  </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

An `imageId` is unique and won't change as long as the Dynamsoft Service process is running. It's a better way to keep track of an image than the `index` which changes easily.

---

## RenameTag

**Syntax**

```typescript
/**
 * Rename a tag.
 * @param oldName Specify the tag to change.
 * @param newName Specify the new tag name.
 */
RenameTag(oldName:string, newName:string): boolean;
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
<td align="center">not supported  </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
</tr>

</table>
</div>

---

## RemoveTag

**Syntax**

```typescript
/**
 * Remove the specified tag from one or more images(if not specified, remove from all).
 * @param tagName Specify the new tag name.
 * @param indices Specify the index.
 */
RemoveTag(tagName: string, indices?: number[]):boolean
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
<td align="center">not supported  </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
</tr>

</table>
</div>

**Usage Notes**
If the index is null, it will remove the tag you specified. If the index is not null, it will remove the specified tag on the image you selected.

---

## GetTagList

**Syntax**

```typescript
/**
 * Return the status of all current tags.
 */
GetTagList():Json

Json:
[
   {
        name: 'TagA',
         imageIds:''
   },
   {
        name: 'TagB',
         imageIds:[239514082, 239514083]
   },
]

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
<td align="center">not supported  </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
</tr>

</table>
</div>

---

## ClearImageTags

**Syntax**

```typescript
/**
 * Remove all tags from the specified image.
 * @param index Specify the image.
 */
ClearImageTags(index: number): boolean;
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
<td align="center">not supported  </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## FilterImagesByTag

**Syntax**

```typescript
/**
 * Filter images by the specified tag.
 * @param tag The tag used as the filter. If nothing or an empty string is used, the filter is cleared.
 */
FilterImagesByTag(tag: string): boolean;
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
<td align="center">not supported  </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## ClearFilter

**Syntax**

```typescript
/**
 * Stop filtering images by tag.
 */
ClearFilter(): boolean;
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
<td align="center">not supported  </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
</tr>

</table>
</div>

---

## SetDefaultTag

**Syntax**

```typescript
/**
 * Set a default tag for newly acquired images.
 * @param tag Specifies the tag.
 */
SetDefaultTag(tag: string): boolean;
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
<td align="center">not supported  </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## TagImages

**Syntax**

```typescript
/**
 * Add a tag to specified images.
 * @param indices Specifies images to be tagged.
 * @param tag Specify the tag.
 */
TagImages(indices: number[], tag: string): boolean;
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
<td align="center">not supported  </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v15.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetImageBitDepth

**Syntax**

```typescript
/**
 * Return the pixel bit depth of the specified image.
 * @param index Specify the image.
 */
GetImageBitDepth(index: number): number;
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
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

<!--

## GetImageBitDepthAsync

**Syntax**

``` typescript
/**
 * Return the pixel bit depth of the specified image.
 * @param index Specify the image.
 */
GetImageBitDepthAsync(index: number): Promise<number>;
```

--->

## GetImageHeight

**Syntax**

```typescript
/**
 * Return the height (in pixels) of the specified image.
 * @param index Specify the image.
 */
GetImageHeight(index: number): number;
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
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetImageWidth

**Syntax**

```typescript
/**
 * Return the width (in pixels) of the specified image.
 * @param index Specify the image.
 */
GetImageWidth(index: number): number;
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
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v6.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetImageXResolution

**Syntax**

```typescript
/**
 * Return the horizontal resolution of the specified image.
 * @param index Specify the image.
 */
GetImageXResolution(index: number): number;
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
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetImageYResolution

**Syntax**

```typescript
/**
 * Return the vertical resolution of the specified image.
 * @param index Specify the image.
 */
GetImageYResolution(index: number): number;
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
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetSkewAngle

**Syntax**

```typescript
/**
 * Return the skew angle of the specified image.
 * @param index Specify the image.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument angle The skew angle.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
GetSkewAngle(
    index: number,
    successCallback?: (
        angle: number) => void,
    failureCallback?: (
        errorCode: number,
        errorString: string) => void
): number | void;
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
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetSkewAngleEx

**Syntax**

```typescript
/**
 * Return the skew angle of the specified rectangle on the specified image.
 * @param index Specify the image.
 * @param left The x-coordinate of the upper-left corner of the rectangle.
 * @param top The y-coordinate of the upper-left corner of the rectangle.
 * @param right The x-coordinate of the lower-right corner of the rectangle.
 * @param bottom The y-coordinate of the lower-right corner of the rectangle.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument angle The skew angle.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
GetSkewAngleEx(
    index: number,
    left: number,
    top: number,
    right: number,
    bottom: number,
    successCallback?: (
        angle: number) => void,
    failureCallback?: (
        errorCode: number,
        errorString: string) => void
): number | void;
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
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">v9.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

After you get the skew angle of an image, you can rotate it with the method [Rotate]({{site.info}}api/WebTwain_Edit.html#rotate) to perform deskewing.

---

## GetImageSize

**Syntax**

```typescript
/**
 * Calculate the size in bytes of the specified image assuming it's resized to the given dimensions.
 * @param index Specify the image.
 * @param width Specify the width.
 * @param height Specify the height.
 */
GetImageSize(index: number, width: number, height: number): number;
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
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetImageSizeWithSpecifiedType

**Syntax**

```typescript
/**
 * Calculate the size in bytes of the specified image assuming an expected file type.
 * @param index Specify the image.
 * @param type Sepcify the expected file type.
 */
GetImageSizeWithSpecifiedType(index: number, type: Dynamsoft.DWT.EnumDWT_ImageType | number): number;
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
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">all versions </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## GetSelectedImagesSize

**Syntax**

```typescript
/**
 * Calculate the size in bytes of all selected images assuming an expected file type.
 * @param type Sepcify the expected file type.
 */
GetSelectedImagesSize(type: Dynamsoft.DWT.EnumDWT_ImageType | number): number;
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
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

If the calculation fails, -1 is returned.

---

## GetImagePartURL

**Syntax**

```typescript
/**
 * Return the internal URL of the specified image.
 * @param index Specify the image.
 * @param width The width of the image (>150).
 * @param height The height of the image (>150).
 */
GetImagePartURL(index: number, width?: number, height?: number): string;
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
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

If width and height are not specified, you get the original image, otherwise you get the image with specified width or height while keeping the same aspect ratio. The returned string is like this 'dwt://dwt_trial_13000404/img?id=306159652&index=0&t=1502184632022'.

---

## GetImageURL

**Syntax**

```typescript
/**
 * Return the direct URL of the specified image.
 * @param index Specify the image.
 * @param width The width of the image (>150).
 * @param height The height of the image (>150).
 */
GetImageURL(index: number, width?: number, height?: number): string;
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
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The returned URL will be like "https://127.0.0.1:18623/dwt/dwt_17110818/img?id=795151779&index=1&t=1640936181588".

If width or height is set to -1, you get the original size of image in PNG in Service Mode，or in JPG, PNG(Black&White) in WASM mode, otherwise you get the image with specified width or height while keeping the same aspect ratio.

---

## SelectAllImages

**Syntax**

```typescript
/**
 * Select all images and return the indices. Viewer will be scrolled to the last image.
 */
SelectAllImages(): number[];
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
<td align="center">v15.3+ </td>
<td align="center">v15.3+ </td>
<td align="center">v15.3+ </td>
<td align="center">v15.3+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SelectImages

**Syntax**

```typescript

/**
 * Select the specified images.
 * @param indices Specify one or multiple images.
 */
SelectImages(indices: number[]): boolean;
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
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## MoveImage

**Syntax**

```typescript
/**
 * Change the position of an image in the buffer.
 * @param from Specify the original position by index.
 * @param to Specify the target position by index.
 */
MoveImage(from: number, to: number): boolean;
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
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SwitchImage

**Syntax**

```typescript
/**
 * Exchange the positions of two images.
 * @param index1 Specify the 1st image.
 * @param index2 Specify the 2nd image.
 */
SwitchImage(index1: number, index2: number): boolean;
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
<td align="center">v5.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## RemoveImage

**Syntax**

```typescript
/**

* Remove the specified image.
* @param index Specify the image.

*/
RemoveImage(index: number): boolean;
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
<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>
</tr>

</table>
</div>

---

## RemoveAllImages

**Syntax**

```typescript
/**
 * Remove all images.
 */
RemoveAllImages(): boolean;
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
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

<!--

## RemoveAllImagesAsync

**Syntax**

``` typescript
/**
 * Remove all images.
 */
RemoveAllImagesAsync(): Promise<boolean>;
```

--->

## RemoveAllSelectedImages

**Syntax**

```typescript
/**
 * Remove all selected images.
 */
RemoveAllSelectedImages(): boolean;
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
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

<!--

## RemoveAllSelectedImagesAsync

**Syntax**

``` typescript
/**
 * Remove all selected images.
 */
RemoveAllSelectedImagesAsync(): Promise<boolean>;
```

----->

## CurrentImageIndexInBuffer

**Syntax**

```typescript
/**
 * Return the index of the current image in the buffer or set the image specified by index as the current image.
 */
CurrentImageIndexInBuffer: number;
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
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## HowManyImagesInBuffer

**Syntax**

```typescript
/**
 * Return how many images are held in the buffer
 */
readonly HowManyImagesInBuffer: number;
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
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## MaxImagesInBuffer

**Syntax**

```typescript
/**
 * Return or set how many images can be held in the buffer.
 */
MaxImagesInBuffer: number;
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
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

When acquiring images and the number of images goes beyond the value set to `MaxImagesInBuffer` , new images will replace old images starting from the 1st one.

---

## SelectedImagesIndices

**Syntax**

```typescript
/**
 * Return the indices of the selected images.
 */
readonly SelectedImagesIndices: number[];
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
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SelectionRectAspectRatio

**Syntax**

```typescript
/**
 * Specify a aspect ratio to be used when selecting a rectangle on an image.
 */
SelectionRectAspectRatio: number;
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
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## BlankImageCurrentStdDev

**Syntax**

```typescript
/**
 * Return the deviation of the pixels in the current image.
 */
readonly BlankImageCurrentStdDev: number;
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
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">v8.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>


**Usage notes**

This property is only valid after `IsBlankImageExpress` is called.

---

## BlankImageMaxStdDev

**Syntax**

```typescript
/**
 * Return or set the maximum deviation of the pixels in an image which is used to determine whether the image is blank.
 */
BlankImageMaxStdDev: number;
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
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

[0, 100] is the interval of allowed values, inclusive. 0 gives a single-color image. The default value is 1.

This property is only valid after `IsBlankImageExpress` is called.

---

## BlankImageThreshold

**Syntax**

```typescript
/**
 * Returns or sets the dividing line between black and white.
 */
BlankImageThreshold: number;
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
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

[0, 255] is the interval of allowed values, inclusive. The default value is 128.
This property is only valid after `IsBlankImageExpress` is called.

---

## BufferMemoryLimit

**Syntax**

```typescript
/**
 * Return or set how much physical memory is allowed for storing images currently
 * loaded in Dynamic Web TWAIN. Once the limit is reached, images will be cached on the hard disk.
 */
BufferMemoryLimit: number;
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
<td align="center">v10.1+ </td>
<td align="center">v10.1+ </td>
<td align="center">v10.1+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

Set this property only when you have a very small physical memory (< 2GB) or a very big one (>4GB). The more memory is allowed, the better the performance will be.
The default value is set to 800 (MB), anything beyond 800MB gets compressed, encrypted and cached on the local disk.

All cached data is encrypted and can only be read by Dynamic Web TWAIN and it will be destroyed when it is no longer used.

---

## IsBlankImage

**Syntax**

```typescript
/**
 * Check whether the specified image is blank.
 * @param index Specify the image.
 */
IsBlankImage(index: number): boolean;
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
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## IsBlankImageExpress

**Syntax**

```typescript
/**
 * Check whether the specified image is blank.
 * @param index Specify the image.
 */
IsBlankImageExpress(index: number): boolean;
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
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

`IsBlankImage` is more accurate than `IsBlankImageExpress` but it works slower.

`BlankImageCurrentStdDev` should be read after either `IsBlankImage()` or `IsBlankImageExpress` .

If you believe an image should be blank but `IsBlankImage()` or `IsBlankImageExpress` is returning `false` , you can read `BlankImageCurrentStdDev` for that image and then set a bigger value to `BlankImageMaxStdDev` .

Both `BlankImageCurrentStdDev` and `BlankImageMaxStdDev` range from 0 to 100.

---

## IfAllowLocalCache

**Syntax**

```typescript
/**
 * Return or set whether the feature of disk caching is enabled.
 */
IfAllowLocalCache: boolean;
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
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The default value of IfAllowLocalCache is true. When the property is true, you can scan as many images as you want as long as you have a big enough disk.  
The default threshold is set to 800 (MB), anything beyond 800MB gets compressed, encrypted and cached on the local disk.  
If neccessary, you can set the threshold using `BufferMemoryLimit` for better performance.  
All cached data is encrypted and can only be read by Dynamic Web TWAIN and it will be destroyed when it is no longer used.

---

## OnBufferChanged

**Syntax**

```typescript
/**
 * An enhanced callback triggered when a change occurs in the buffer.
 * @argument bufferChangeInfo Details about the buffer change.
 */
RegisterEvent('OnBufferChanged',
    function (bufferChangeInfo: BufferChangeInfo) {}
): boolean;

interface BufferChangeInfo {
    /**
     * Action type includes 'add', 'remove', 'modify', 'shift' and 'filter'
     */
    action: string;
    /**
     * The image id (not the index) of the current page.
     */
    currentId: number;
    /**
     * All image ids.
     */
    imageIds: number[];
    /**
     * All selected image ids.
     */
    selectedIds: number[];
}
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
<td align="center">not supported  </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">v16.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

Action types include

- `add`: New pages are added to the buffer.
- `remove`: The existing pages are removed.
- `modify`: The existing pages are modified.
- `shift`: The existing pages are reordered.
- `filter`: The existing pages are filtered by a tag.

---

## OnBitmapChanged

**Syntax**

```typescript
/**
 * A built-in callback triggered when the current image in buffer is changed like flipped, cropped, rotated, etc. or a new image has been acquired.
 * @argument indexString Array of the changed index(indices).
 * @argument type Operation type.
   1 means new image(s) were added at the tail,
   2 means image(s) were inserted before the current index,
   3 means image(s) are deleted,
   4 means image(s) are modified,
 * @argument index Index of the current image.
 */
RegisterEvent('OnBitmapChanged',
    function (
        indexString: number[],
        type: number,
        index: number
    ) {}
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
<td align="center">v8.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.RegisterEvent(
  "OnBitmapChanged",
  function (strUpdatedIndex, operationType, sCurrentIndex) {
    console.log("Image " + sCurrentIndex + " has changed!");
  }
);
```

---

## OnTopImageInTheViewChanged

**Syntax**

```typescript
/**
 * A built-in callback triggered when the top index currently displayed in the viewer changes.
 * @argument index Index of the current image.
 */
RegisterEvent('OnTopImageInTheViewChanged',
    function (index: number) {}
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
<td align="center">v5.1+ </td>
<td align="center">v10.1+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

This API does not work if the view mode of the viewer is set to -1 by -1.

---

## OnIndexChangeDragDropDone

**Syntax**

```typescript
/**
 * A built-in callback triggered when images in the buffer are dragged to new positions.
 * @argument indexPairs The list of index changes.
 */
RegisterEvent('OnIndexChangeDragDropDone',
    function (indexPairs: Pair[]) {}
): boolean;

Pair: [from: number, to: number];
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
<td align="center">not supported  </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v15.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## GetTagListByIndex

**Syntax**

```typescript
/**
 * Return the tag(s) of a specified image.
 * @argument index Index of the image.
 */
GetTagListByIndex(index: number):string[]
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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.GetTagListByIndex(0);
```

---

## CreateFile

**Syntax**

```typescript
/**
 * Create a category for the scanned image(s).
 * @argument categoryName Specify the category name.
 */
CreateFile(categoryName:string):Boolean;
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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>

**Example**

```javascript
//Store the scanned image(s) under 'Category1'.
DWObject.CreateFile("Category1");
DWObject.OpenFile("Category1"); //Need to call OpenFile after CreateFile.
DWObject.AcquireImage(successCallback, failureCallback);

function successCallback() {
  console.log("successful");
}

function failureCallback(errorCode, errorString) {
  alert(errorString);
}
```

**Usage notes**

1. If the documents are already sorted before scanning, you can use <a href="{{site.info}}api/WebTwain_Buffer.html#createfile" target="_blank">CreateFile</a>, <a href="{{site.info}}api/WebTwain_Buffer.html#openfile" target="_blank">OpenFile</a> to group the documents.
2. If the documents are not already sorted before scanning and you want to first scan, then sort, you can use tags to manage that. Relevant APIs: <a href="{{site.info}}api/WebTwain_Buffer.html#setdefaulttag" target="_blank">SetDefaultTag</a>, <a href="{{site.info}}api/WebTwain_Buffer.html#tagimages" target="_blank">TagImages</a>, <a href="{{site.info}}api/WebTwain_Buffer.html#gettaglist" target="_blank">GetTagList</a>, <a href="{{site.info}}api/WebTwain_Buffer.html#filterimagesbytag" target="_blank">FilterImagesByTag</a>

---

## OpenFile

**Syntax**

```typescript
/**
 * Use the specified category for the scanned image(s)
 * @argument categoryName Specify the category name.
 */
OpenFile(categoryName:string):Boolean;
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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>

**Example**

```javascript
//Stored the scanned image(s) under 'Category2'.
DWObject.CreateFile("Category1");
DWObject.CreateFile("Category2");
DWObject.CreateFile("Category3");
DWObject.OpenFile("Category2"); //Need to call OpenFile after CreateFile.
DWObject.AcquireImage(successCallback, failureCallback);

function successCallback() {
  console.log("successful");
}

function failureCallback(errorCode, errorString) {
  alert(errorString);
}
```

---

## GetCurrentFileName

**Syntax**

```typescript
/**
 * Get the current category name. The default value is 'dynamsoft-dvs-file'. Scanned image(s) are stored in this category by default if no category name is created.
 */
GetCurrentFileName():String;
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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>

---

## RemoveFile

**Syntax**

```typescript
/**
 * Delete the specified category and all images in it.
 * @argument categoryName Specify the category name.
 */
RemoveFile(categoryName:string):Boolean;
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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>

---

## GetFileInfoList

**Syntax**

```typescript
/**
 * Get the list of all categories and their information.
 */
GetFileInfoList():Json

Json:
[{
   name: "categoryName",
   imageIds:[23122335, 25566822323]
},
{……}]

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
<td align="center">not supported  </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
<td align="center">v17.2+ </td>
</tr>

</table>
</div>
---
