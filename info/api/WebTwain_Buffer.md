---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Buffer APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Buffer APIs
breadcrumbText: Buffer
description: Dynamic Web TWAIN SDK Documentation API Reference Buffer APIs Page
---

# WebTwain Buffer Manage

**Methods**

| |
|:-|:-|
|[`ClearImageTags()`](#clearimagetags) | [`RenameTag()`](#renametag) |[`RemoveTag()`](#removetag) |[`GetTagList()`](#gettaglist) |
|[`FilterImagesByTag()`](#filterimagesbytag)|[`ClearFilter()`](#clearfilter) | [`SetDefaultTag()`](#setdefaulttag) | [`TagImages()`](#tagimages)| 
|[`GetImageBitDepth()`](#getimagebitdepth)| [`GetImageSize()`](#getimagesize)| [`GetImageSizeWithSpecifiedType()`](#getimagesizewithspecifiedtype)|[`GetSelectedImagesSize()`](#getselectedimagessize) |
|[`GetImageHeight()`](#getimageheight) |[`GetImageWidth()`](#getimagewidth) | [`GetImagePartURL()`](#getimageparturl) |[`GetImageURL()`](#getimageurl)|
|[`GetImageXResolution()`](#getimagexresolution) |[`GetImageYResolution()`](#getimageyresolution) |[`GetSkewAngle()`](#getskewangle) | [`GetSkewAngleEx()`](#getskewangleex)|
|[`ImageIDToIndex()`](#imageidtoindex) | [`IndexToImageID()`](#indextoimageid)| [`IsBlankImage()`](#isblankimage) | [`IsBlankImageExpress()`](#isblankimageexpress)|  
|[`SelectAllImages()`](#selectallimages)|[`MoveImage()`](#moveimage) | [`SwitchImage()`](#switchimage)| [`RemoveImage()`](#removeimage) |
| [`RemoveAllImages()`](#removeallimages)|[`RemoveAllSelectedImages()`](#removeallselectedimages) |[`SelectImages()`](#selectimages)|

<!--* [GetImageBitDepthAsync()](#getimagebitdepthasync)-->


<!--* [RemoveAllImagesAsync()](#removeallimagesasync)-->


<!--* [RemoveAllSelectedImagesAsync()](#removeallselectedimagesasync)-->

**Properties**

| |
|:-|:-|
|[`BlankImageCurrentStdDev`](#blanimagecurrentstddev) |[`BlankImageMaxStdDev`](#blankimagemaxstddev) |[`BlankImageThreshold`](#blankimagethreshold)| [`
`](#buffermemorylimit)|
|[`CurrentImageIndexInBuffer`](#currentimageindexinbuffer) |[`HowManyImagesInBuffer`](#howmanyimagesinbuffer)| [`IfAllowLocalCache`](#ifallowlocalcache) | [`SelectedImagesIndices`](#selectedimagesindices)|
|[`MaxImagesInBuffer`](#maximagesinbuffer)|

**Events**

| |
|:-|:-|
| [`OnBufferChanged`](#onbufferchanged) |[`OnBitmapChanged`](#onbitmapchanged) | [`OnIndexChangeDragDropDone`](#onindexchangedragdropdone)| [`OnTopImageInTheViewChanged`](#ontopimageintheviewchanged)|

---

## IndexToImageID

**Syntax**

``` typescript
/**

* Return the imageId of an image specified by the index.
* @param index The index of the image.

*/
IndexToImageID(index: number): number;
```

---

## ImageIDToIndex

**Syntax**

``` typescript
/**
 * Return the index of an image specified by the imageId.
 * @param imageId The imageId of the image.
 */
ImageIDToIndex(imageId: number): number;
```

**Usage notes**

An `imageId` is unique and won't change as long as the Dynamsoft Service process is running. It's a better way to keep track of an image than the `index` which changes easily.

---

## RenameTag

**Syntax**

``` typescript
/**
 * Rename a tag.
 * @param oldName Specify the tag to change.
 * @param newName Specify the new tag name.
 */
RenameTag(oldName:string, newName:string): boolean;
```

---

## RemoveTag

**Syntax**

``` typescript
/**
 * Remove the specified tag from one or more images(if not specified, remove from all). 
 * @param tagName Specify the new tag name.
 * @param indices Specify the index.
 */
RemoveTag(tagName: string, indices?: number[]):boolean 
```

**Usage Notes**
If the index is null, it will remove the tag you specified. If the index is not null, it will remove the specified tag on the image you selected.

---

## GetTagList

**Syntax**

``` typescript
/**
 * Return the status of all current tags. 
 */
GetTagList():Json 

Json： 
[ 
   { 
        name: ‘TagA’,  
         imageIds:’ ’ 
   }, 
   { 
        name: ‘TagB’,  
         imageIds:[239514082, 239514083] 
   }, 
] 
 
```

---

## ClearImageTags

**Syntax**

``` typescript
/**
 * Remove all tags from the specified image.
 * @param index Specify the image.
 */
ClearImageTags(index: number): boolean;
```

---

## FilterImagesByTag

**Syntax**

``` typescript
/**
 * Filter images by the specified tag.
 * @param tag The tag used as the filter. If nothing or an empty string is used, the filter is cleared.
 */
FilterImagesByTag(tag: string): boolean;
```

---

## ClearFilter

**Syntax**

``` typescript
/**
 * Stop filtering images by tag.
 */
ClearFilter(): boolean;
```

---

## SetDefaultTag

**Syntax**

``` typescript
/**
 * Set a default tag for newlay acquired images.
 * @param tag Specifies the tag.
 */
SetDefaultTag(tag: string): boolean;
```

---

## TagImages

**Syntax**

``` typescript
/**
 * Add a tag to specified images.
 * @param indices Specifies images to be tagged.
 * @param tag Specify the tag.
 */
TagImages(indices: number[], tag: string): boolean;
```

---

## GetImageBitDepth

**Syntax**

``` typescript
/**
 * Return the pixel bit depth of the specified image.
 * @param index Specify the image.
 */
GetImageBitDepth(index: number): number;
```

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

``` typescript
/**
 * Return the height (in pixels) of the specified image.
 * @param index Specify the image.
 */
GetImageHeight(index: number): number;
```

---

## GetImageWidth

**Syntax**

``` typescript
/**
 * Return the width (in pixels) of the specified image.
 * @param index Specify the image.
 */
GetImageWidth(index: number): number;
```

---

## GetImageXResolution

**Syntax**

``` typescript
/**
 * Return the horizontal resolution of the specified image.
 * @param index Specify the image.
 */
GetImageXResolution(index: number): number;
```

---

## GetImageYResolution

**Syntax**

``` typescript
/**
 * Return the vertical resolution of the specified image.
 * @param index Specify the image.
 */
GetImageYResolution(index: number): number;
```

---

## GetSkewAngle

**Syntax**

``` typescript
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

---

## GetSkewAngleEx

**Syntax**

``` typescript
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

**Usage notes**

After you get the skew angle of an image, you can rotate it with the method [Rotate]({{site.info}}api/WebTwain_Edit.html#rotate) to perform deskewing.

---

## GetImageSize

**Syntax**

``` typescript
/**
 * Calculate the size in bytes of the specified image assuming it's resized to the given dimensions.
 * @param index Specify the image.
 * @param width Specify the width.
 * @param height Specify the height.
 */ 
GetImageSize(index: number, width: number, height: number): number;
```

---

## GetImageSizeWithSpecifiedType

**Syntax**

``` typescript
/**
 * Calculate the size in bytes of the specified image assuming an expected file type.
 * @param index Specify the image.
 * @param type Sepcify the expected file type.
 */ 
GetImageSizeWithSpecifiedType(index: number, type: Dynamsoft.DWT.EnumDWT_ImageType | number): number;
```

---

## GetSelectedImagesSize

**Syntax**

``` typescript
/**
 * Calculate the size in bytes of all selected images assuming an expected file type.
 * @param type Sepcify the expected file type.
 */
GetSelectedImagesSize(type: Dynamsoft.DWT.EnumDWT_ImageType | number): number;
```

**Usage notes**

If the calculation fails, -1 is returned.

---

## GetImagePartURL

**Syntax**

``` typescript
/**
 * Return the internal URL of the specified image. 
 * @param index Specify the image.
 * @param width The width of the image (>150).
 * @param height The height of the image (>150).
 */
GetImagePartURL(index: number, width?: number, height?: number): string;
```

**Usage notes**

If width and height are not specified, you get the original image, otherwise you get the image with specified width or height while keeping the same aspect ratio. The returned string is like this 'dwt://dwt_trial_13000404/img?id=306159652&index=0&t=1502184632022'.

---

## GetImageURL

**Syntax**

``` typescript
/**
 * Return the direct URL of the specified image. 
 * @param index Specify the image.
 * @param width The width of the image (>150).
 * @param height The height of the image (>150).
 */
GetImageURL(index: number, width?: number, height?: number): string;
```

**Usage notes**

If width or height is set to -1, you get the original image, otherwise you get the image with specified width or height while keeping the same aspect ratio.

---

## SelectAllImages

**Syntax**

``` typescript
/**
 * Select all images and return the indices.
 */
SelectAllImages(): number[];
```

---

## SelectImages

**Syntax**

``` typescript

/**
 * Select the specified images.
 * @param indices Specify one or multiple images.
 */
SelectImages(indices: number[]): boolean;
```

---

## MoveImage

**Syntax**

``` typescript
/**
 * Change the position of an image in the buffer.
 * @param from Specify the original position by index.
 * @param to Specify the target position by index.
 */
MoveImage(from: number, to: number): boolean;
```

---

## SwitchImage

**Syntax**

``` typescript
/**
 * Exchange the positions of two images.
 * @param index1 Specify the 1st image.
 * @param index2 Specify the 2nd image.
 */
SwitchImage(index1: number, index2: number): boolean;
```

---

## RemoveImage

**Syntax**

``` typescript
/**

* Remove the specified image.
* @param index Specify the image.

*/
RemoveImage(index: number): boolean;
```

---

## RemoveAllImages

**Syntax**

``` typescript
/**
 * Remove all images.
 */
RemoveAllImages(): boolean;
```

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

``` typescript
/**
 * Remove all selected images.
 */
RemoveAllSelectedImages(): boolean;
```

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

``` typescript
/**
 * Return the index of the current image in the buffer or 
 * Set the image specified by index as the current image.
 */
CurrentImageIndexInBuffer: number;
```

---

## HowManyImagesInBuffer

**Syntax**

``` typescript
/**
 * Return how many images are held in the buffer
 */
readonly HowManyImagesInBuffer: number;
```

---

## MaxImagesInBuffer

**Syntax**

``` typescript
/**
 * Return or set how many images can be held in the buffer.
 */ 
MaxImagesInBuffer: number;
```

**Usage notes**

When acquiring images and the number of images goes beyond the value set to `MaxImagesInBuffer` , new images will replace old images starting from the 1st one.

---

## SelectedImagesIndices

**Syntax**

``` typescript
/**
 * Return the indices of the selected images.
 */
readonly SelectedImagesIndices: number[];
```
---

## SelectionRectAspectRatio

**Syntax**

``` typescript
/**
 * Specify a aspect ratio to be used when selecting a rectangle on an image.
 */
SelectionRectAspectRatio: number; 
```

---

## BlankImageCurrentStdDev

**Syntax**

``` typescript
/**
 * Return the deviation of the pixels in the current image.
 */
readonly BlankImageCurrentStdDev: number;
```

---

## BlankImageMaxStdDev

**Syntax**

``` typescript
/**
 * Return or set the maximum deviation of the pixels in an image which is used to determine whether the image is blank.
 */
BlankImageMaxStdDev: number;
```

---

## BufferMemoryLimit

**Syntax**

``` typescript
/**
 * Return or set how much physical memory is allowed for storing images currently 
 * loaded in Dynamic Web TWAIN. Once the limit is reached, images will be cached on the hard disk.
 */
BufferMemoryLimit: number;
```

**Usage notes**

Set this property only when you have a very small physical memory (< 2GB) or a very big one (>4GB). The more memory is allowed, the better the performance will be.
The default value is set to 800 (MB), anything beyond 800MB gets compressed, encrypted and cached on the local disk.

All cached data is encrypted and can only be read by Dynamic Web TWAIN and it will be destroyed when it is no longer used.

---

## IsBlankImage

**Syntax**

``` typescript
/** 
 * Check whether the specified image is blank.
 * @param index Specify the image.
 */ 
IsBlankImage(index: number): boolean;
```

---

## IsBlankImageExpress

**Syntax**

``` typescript
/** 
 * Check whether the specified image is blank.
 * @param index Specify the image.
 */
IsBlankImageExpress(index: number): boolean;
```

**Usage notes**

`IsBlankImage` is more accurate than `IsBlankImageExpress` but it works slower.

`BlankImageCurrentStdDev` should be read after either `IsBlankImage()` or `IsBlankImageExpress` .

If you believe an image should be blank but `IsBlankImage()` or `IsBlankImageExpress` is returning `false` , you can read `BlankImageCurrentStdDev` for that image and then set a bigger value to `BlankImageMaxStdDev` .

Both `BlankImageCurrentStdDev` and `BlankImageMaxStdDev` range from 0 to 100.

---

## IfAllowLocalCache 

**Syntax**

``` typescript
/**
 * Return or set whether the feature of disk caching is enabled.
 */
IfAllowLocalCache: boolean;
```

---

## OnBufferChanged

**Syntax**

``` typescript
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

**Usage notes**

Action types include 

* `add`: New pages are added to the buffer.
* `remove`: The existing pages are removed.
* `modify`: The existing pages are modified.
* `shift`: The existing pages are reordered.
* `filter`: The existing pages are filtered by a tag.

---

## OnBitmapChanged

**Syntax**

``` typescript
/**
 * A built-in callback triggered when a change occurs in the buffer.
 * @argument indexString A string of the changed index(indices).
 * @argument type Operation type.
 * @argument index Index of the current image.
 */
RegisterEvent('OnBitmapChanged',
    function (indexString: string,
        type: number,
        index: number
    ) {}
): boolean; 
```

**Usage notes**

Operation types include 

* new image(s) were added at the tail
* new image(s) were inserted before the current index
* image(s) are deleted
* image(s) are modified
* indices of images changed

---

## OnTopImageInTheViewChanged

**Syntax**

``` typescript
/**
 * A built-in callback triggered when the top image currently displayed in the viewer changes.
 * @argument index Index of the current image.
 */
RegisterEvent('OnTopImageInTheViewChanged',
    function (index: number) {}
): boolean; 
```

---

## OnIndexChangeDragDropDone

**Syntax**

``` typescript
/**
 * A built-in callback triggered when images in the buffer are dragged to new positions.
 * @argument indexPairs The list of index changes.
 */
RegisterEvent('OnIndexChangeDragDropDone',
    function (indexPairs: Pair[]) {}
): boolean; 

Pair: [from: number, to: number];
```
