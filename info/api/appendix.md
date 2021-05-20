---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API - Appendix
keywords: Dynamic Web TWAIN, Documentation, API Appendix
breadcrumbText: API Appendix
description: Dynamic Web TWAIN SDK Documentation API Appendix Page
---

# API Appendix

## Error List

|Code |String|
|:-|:-|
|0 | Successful |
|-1001 | General failure |
|-1002 | Not enough memory to perform operation |
|-1003 | Source Manager unable to find the specified Source |
|-1004 | Source is connected to maximum supported number of applications |
|-1005 | Source or Source Manager reported an error to the user and handled the error |
|-1006 | Capability not supported by Source or operation is not supported on capability, or capability had dependencies on other capabilities and cannot be operated upon at this time |
|-1009 | Unrecognized operation triplet |
|-1010 | Data parameter out of supported range |
|-1011 | Operation out of expected sequence |
|-1012 | Unknown destination in DSM_Entry |
|-1013 | Capability not supported by source |
|-1014 | Operation not supported by capability |
|-1015 | Capability has dependency on other capability and cannot be operated upon at this time |
|-1016 | File System operation is denied (file is protected) |
|-1017 | Operation failed because file already exists |
|-1018 | File not found |
|-1019 | Operation failed because directory is not empty |
|-1020 | The feeder is jammed |
|-1021 | The feeder detected multiple pages |
|-1022 | Error writing file |
|-1023 | The device went offline prior to or during this operation |
|-1030 | Can not open Source Manager "TWain_32.dll" is missing or is in use by another application |
|-1031 | Sequence error. The operation can not be performed upon the current Source Manager or Source state |
|-1032 | User cancelled the operation |
|-1033 | Invalid Enumerations |
|-1034 | Invalid value |
|-1035 | There is no image |
|-1036 | Error reading file |
|-1070 | BMP file or format error |
|-1071 | JPEG file or format error |
|-1073 | Only 24-bit true color and 8-bit gray-scaled images are supported for JPEG compression |
|-1080 | General TIFF error |
|-1081 | TIFF format error or not supported |
|-1090 | BMP format error or not supported |
|-1100 | PNG format error or not supported |
|-1110 | Unrecognized file extension |
|-1200 | PDF format error or not supported |
|-2000 | Can not initiate the internet session |
|-2001 | HTTP request error |
|-2002 | HTTP server error |
|-2003 | HTTP process error |
|-2004 | FTP download file is too large |
|-2007 | The system is busy, some operations are not completed. Please try later |
|-2207 | The dynamsoft service installed on your computer is outdated and no longer works with the JavaScript code on the website |
|-2208 | The connection with the local dynamsoft service encountered a problem and has been reset |
|-2209 | The HTML5 (Chrome&Firefox) edition does not support this method or property |
|-2300 | Http upload error: the HTTP Server cannot empty |
|-2301 | Network error |
|-2302 | The result format is invalid |
|-2303 | Upload cancelled |
|-2304 | Http download error: the url is invalid |
|-2305 | User cancelled the operation |
|-2306 | Upload Error: the upload file cannot be empty |
|-2307 | The width or height you entered is invalid |
|-2308 | The local dynamsoft service has been stopped |
|-2309 | The LocalFile is emtpy in the Function |
|-2310 | The Enumerations is out of range |
|-2311 | The RemoteFile is emtpy in Barcode Download Function |
|-2312 | The file length is emtpy |
|-2313 | The size of the images you are about to upload has exceeded the allowed size |
|-2314 | The parameter cannot be empty |
|-2315 | The Enumerations is out of range |
|-2316 | The RemoteFile is emtpy in Webcam Download Function |
|-2317 | The RemoteFile is emtpy in Pdf Download Function |
|-2318 | Invalid destination file |
|-2319 | Invalid source file |
|-2320 | Invalid file |
|-2321 | The Enumerations is out of range |
|-2322 | The left or top or right or bottom you entered is invalid |
|-2323 | The OCR output format is not supported |
|-2324 | The OCR page set mode is not supported |
|-2325 | The current product key is empty or invalid, please contact the site administrator |
|-2326 | The current product key has expired, please contact the site administrator |
|-2327 | The current product key does not support Chrome, please contact the site administrator |
|-2328 | The current product key does not support Firefox, please contact the site administrator |
|-2329 | The current product key does not support IE, please contact the site administrator |
|-2330 | The current product key does not support Edge, please contact the site administrator |
|-2331 | The current product key is a trial version key but your local dynamsoft service is in full version, please uninstall your local version first and access this page again to install the correct version. If the issue persists, please contact the site administrator |
|-2332 | The current product key is a full version key but your local dynamsoft service is in trial version, please uninstall your local version first and access this page again to install the correct version. If the issue persists, please contact the site administrator |
|-2333 | The current product key is missing the core license, please contact the site administrator |
|-2334 | The current product key does not include a license for reading 1D barcode, please contact the site administrator |
|-2335 | The current product key does not include a license for reading QRcode barcode, please contact the site administrator |
|-2336 | The current product key does not include a license for reading PDF417 barcode, please contact the site administrator |
|-2337 | The current product key does not include a license for reading DataMatrix barcode, please contact the site administrator |
|-2338 | The current product key does not support Webcam, please contact the site administrator |
|-2339 | The current product key does not support pdf rasterizer, please contact the site administrator |
|-2340 | The current product key does not support OCR, please contact the site administrator |
|-2341 | The current product key does not support OCR pro, please contact the site administrator |
|-2342 | The domain of your current site does not match the domain bound in the current product key, please contact the site administrator |
|-2343 | The current product key does not support your browser, please contact the site administrator |
|-2344 | The current product key does not support Windows OS, please contact the site administrator |
|-2345 | The current product key does not support MAC OS, please contact the site administrator |
|-2346 | The current product key does not support Linux OS, please contact the site administrator |
|-2347 | The current product key does not support your OS, please contact the site administrator |
|-2348 | The current product key is invalid because it's generated with the licenses of a different major version |
|-2349 | The current product key does not include a license for reading barcode, please contact the site administrator |
|-2350 | The indices cannot be empty |
|-2351 | You cannot upload more than one image when the format is BMP, JPG or PNG |
|-2352 | The indices are out of range |
|-2353 | The header name being used is a protected keyword and is not allowed |
|-2354 | The header name cannot be empty |
|-2355 | The header name cannot be null |
|-2356 | The header name cannot be undefined |
|-2357 | The header name you entered is invalid |
|-2358 | The type of the parameter indices must be an Array |
|-2359 | The Enumerations is out of range |
|-2360 | The Enumerations is null or undefined |
|-2361 | You cannot convert more than one image to base64 string when the format is BMP, JPG or PNG |
|-2362 | Convert to base64 failed |
|-2367 | Invalid value for the parameter segmentUploadThreshold |
|-2368 | Invalid value for the parameter moduleSize |
|-2369 | The module for Dynamic Web TWAIN has failed to download |
|-2370 | The current product key is invalid, please contact the site administrator |
|-2372 | You cannot convert to binary more than one image when the format is BMP, JPG or PNG |
|<= -3000 | See ErrorString property for details |

## License Tracking Server Error List 

| Error Code | Error Message |
|:-|:-|
| -20100 | The standby LTS refuses to provide service while the main LTS is working. |
| -20100 | LTS refuses to provide service while under construction. |
| -20101 | The handshake code you are using does not exist on the License Tracking Server. |
| -20102 | Session password is incorrect. |
| -20103 | AppDomain for handshake is not matched. |
| -20104 | No item matched. Please check your handshake and client settings. |
| -20105 | License item does not exist. |
| -20106 | Product is not matched. |
| -20107 | Version mismatch. |
| -20108 | DeploymentType is not matched. |
| -20109 | Edition is not matched. |
| -20111 | License has expired. |
| -20111 | License for this ip has expired. |
| -20112 | License has not yet taken effect. |
| -20113 | This license item "+item.getLicenseItemId()+" has been invalid. |
| -20114 | AppDomain for licenseItem is not matched. |
| -20115 | ChargeWay for licenseItem is not matched. |
| -20120 | License has exceeded its limit. |
| -20151 | Cloned device detected. |

## Viewer related API changes in version 17.0

* New APIs in v17.0 replace old APIs in v16.2-, all old APIs are deprecated.

| v17.0 | v16.2- |
|:-|:-|
| [ `Viewer.autoChangeIndex` ]({{site.info}}api/Addon_Viewer.html#autoChangeIndex) | `Viewer.topPageChanged()` |

* The following APIs are new in v17.0
  + [ `RemoveTag` ]({{site.info}}api/WebTwain_Buffer.html#removetag)
  + [ `GetTagList` ]({{site.info}}api/WebTwain_Buffer.html#gettaglist)
  + [ `DWT.licenseServer` ]({{site.info}}api/WebTwain_License.html#licenseServer)
  + [ `DWT.handshakeCode` ]({{site.info}}api/WebTwain_License.html#handshakeCode)
  + [ `DWT.sessionPassword` ]({{site.info}}api/WebTwain_License.html#sessionPassword)
  + [ `DWT.licenseException` ]({{site.info}}api/WebTwain_License.html#licenseException)

## Viewer related API changes in version 16.2

### For the Camera add-on

* New APIs in v16.2 replace old APIs in v16.1-, all old APIs are deleted.

| v16.2 | v16.1- |
|:-|:-|
| [ `Addon.Camera.showVideo()` ]({{site.info}}api/Addon_Camera.html#showvideo) | `Viewer.showVideo()` |
| [ `Addon.Camera.closeVideo()` ]({{site.info}}api/Addon_Camera.html#closevideo) | `Viewer.closeVideo()` |
| [ `Addon.Camera.off()` ]({{site.info}}api/Addon_Camera.html#off) | `Viewer.off()` |
| [ `Addon.Camera.on("video-closed")` ]({{site.info}}api/Addon_Camera.html#on) | `Viewer.on("video-closed")` |
| [ `Addon.Camera.on("video-error")` ]({{site.info}}api/Addon_Camera.html#on) | `Viewer.on("video-error")` |

### For the Viewer

* New APIs in v16.2 replace old APIs in v16.1-, all old APIs are deprecated.

| v16.2 | v16.1- |
|:-|:-|
| [ `Viewer.background` ]({{site.info}}api/WebTwain_Viewer.html#background) | `BackgroundColor` |
| [ `Viewer.bind()` ]({{site.info}}api/WebTwain_Viewer.html#bind) , [ `Viewer.show()` ]({{site.info}}api/WebTwain_Viewer.html#show) , [ `Viewer.hide()` ]({{site.info}}api/WebTwain_Viewer.html#hide) | `BindViewer()` |
| [ `Viewer.cursor` ]({{site.info}}api/WebTwain_Viewer.html#cursor) | `MouseShape` |
| [ `Viewer.fitWindow()` ]({{site.info}}api/WebTwain_Viewer.html#fitwindow) | `FitWindowType` , `IfFitWindow` |
| [ `Viewer.height` ]({{site.info}}api/WebTwain_Viewer.html#height) | `Height` |
| [ `Viewer.ifAutoScroll` ]({{site.info}}api/WebTwain_Viewer.html#ifautoscroll) | `IfAutoScroll` |
| [ `Viewer.on("click", callback)` ]({{site.info}}api/WebTwain_Viewer.html#click) | `RegisterEvent("OnMouseClick", callback)` |
| [ `Viewer.on("contextmenu", callback)` ]({{site.info}}api/WebTwain_Viewer.html#contextmenu) | `RegisterEvent("OnMouseRightClick", callback)` |
| [ `Viewer.on("dblclick", callback)` ]({{site.info}}api/WebTwain_Viewer.html#dblclick) | `RegisterEvent("OnMouseDoubleClick", callback)` |
| [ `Viewer.on("mousemove", callback)` ]({{site.info}}api/WebTwain_Viewer.html#mousemove) | `RegisterEvent("OnMouseMove", callback)` |
| [ `Viewer.on("pageAreaSelected", callback)` ]({{site.info}}api/WebTwain_Viewer.html#pageareaselected) | `RegisterEvent("OnImageAreaSelected", callback)` |
| [ `Viewer.on("pageAreaUnselected", callback)` ]({{site.info}}api/WebTwain_Viewer.html#pageareaunselected) | `RegisterEvent("OnImageAreaDeSelected", callback)` |
| [ `Viewer.pageMargin` ]({{site.info}}api/WebTwain_Viewer.html#pagemargin) | `ImageMargin` |
| [ `Viewer.selectedPageBorder` ]({{site.info}}api/WebTwain_Viewer.html#selectedpageborder) | `SelectionImageBorderColor` |
| [ `Viewer.selectionRectAspectRatio` ]({{site.info}}api/WebTwain_Viewer.html#selectionrectaspectratio) | `SelectionRectAspectRatio` |
| [ `Viewer.setSelectedAreas()` ]({{site.info}}api/WebTwain_Viewer.html#setselectedareas) | `SetSelectedImageArea()` |
| [ `Viewer.showPageNumber` ]({{site.info}}api/WebTwain_Viewer.html#showpagenumber) | `ShowPageNumber` |
| [ `Viewer.unbind()` ]({{site.info}}api/WebTwain_Viewer.html#unbind) | `UnbindView()` |
| [ `Viewer.width` ]({{site.info}}api/WebTwain_Viewer.html#width) | `Width` |
| [ `Viewer.zoom` ]({{site.info}}api/WebTwain_Viewer.html#zoom) | `Zoom` |
| `ViewerEvent.imageX` | `MouseX` |
| `ViewerEvent.imageY` | `MouseY` |

> NOTE
>  
> `ViewerEvent.imageX` and `ViewerEvent.imageY` are only available as the first argument in callback functions for the mouse events "click", "dblclick", "contextMenu" and "mousemove".

* The following APIs are new in v16.2
  + [ `Viewer.acceptDrop` ]({{site.info}}api/WebTwain_Viewer.html#acceptdrop)
  + [ `Viewer.allowSlide` ]({{site.info}}api/WebTwain_Viewer.html#allowslide)
  + [ `Viewer.clearSelectedAreas()` ]({{site.info}}api/WebTwain_Viewer.html#clearselectedareas)
  + [ `Viewer.createThumbnailViewer()` ]({{site.info}}api/WebTwain_Viewer.html#createthumbnailviewer)
  + [ `Viewer.border` ]({{site.info}}api/WebTwain_Viewer.html#border)
  + [ `Viewer.first()` ]({{site.info}}api/WebTwain_Viewer.html#first)
  + [ `Viewer.getUISettings()` ]({{site.info}}api/WebTwain_Viewer.html#getuisettings)
  + [ `Viewer.gotoPage()` ]({{site.info}}api/WebTwain_Viewer.html#gotopage)
  + [ `Viewer.idPostfix` ]({{site.info}}api/WebTwain_Viewer.html#idpostfix)
  + [ `Viewer.innerBorder` ]({{site.info}}api/WebTwain_Viewer.html#innerborder)
  + [ `Viewer.last()` ]({{site.info}}api/WebTwain_Viewer.html#last)
  + [ `Viewer.next()` ]({{site.info}}api/WebTwain_Viewer.html#next)
  + [ `Viewer.on("pageRendered", callback)` ]({{site.info}}api/WebTwain_Viewer.html#pagerendered)
  + [ `Viewer.on("resize", callback)` ]({{site.info}}api/WebTwain_Viewer.html#resize)
  + [ `Viewer.previous()` ]({{site.info}}api/WebTwain_Viewer.html#previous)
  + [ `Viewer.render()` ]({{site.info}}api/WebTwain_Viewer.html#render)
  + [ `Viewer.resetUISettings()` ]({{site.info}}api/WebTwain_Viewer.html#resetuisettings)
  + [ `Viewer.selectedAreaBorderColor` ]({{site.info}}api/WebTwain_Viewer.html#selectedareabordercolor)
  + [ `Viewer.selectedPageBackground` ]({{site.info}}api/WebTwain_Viewer.html#selectedpagebackground)
  + [ `Viewer.singlePageMode` ]({{site.info}}api/WebTwain_Viewer.html#singlepagemode)

* The following APIs in v16.2 are improved based on old APIs in v16.1-.

  + [`Viewer.setViewMode()`]({{site.info}}api/WebTwain_Viewer.html#setviewmode)

    It also accepts the values "-1, -1" which is equivalent to setting `Viewer.singlePageMode` to `true` .

  + [`Viewer.updateUISettings()`]({{site.info}}api/WebTwain_Viewer.html#updateuisettings)

* The following APIs are also deprecated in v16.2

  + `SetViewMode()`

    Use Viewer.setViewMode() instead.

* The following APIs from v16.1- are removed

  + `Viewer.bOnlyShowThumbnailsView`
  + `Viewer.cursorOverThumbnailsView`
  + `Viewer.bindCustomElement()`
  + `Viewer.showCustomElement()`
  + `Viewer.hideCustomElement()`
  + `Viewer.toggleCustomElement()`
  + `Viewer.setSelectedImageArea()`
  + `Viewer.zoomIn()`
  + `Viewer.zoomOut()`

* The following APIs in v16.1- are implemented differently in v16.2  
  + `BindViewer()` with two parameters
  + `UpdateViewer()`

  The two methods above were used to set the size of the viewer or to show the thumbnail viewer. In v16, 2, different APIs are used as shown below:

``` javascript
  /* Set the size of the viewer */
  DWObject.Viewer.height = 800;
  DWObject.Viewer.width = 600;
  /* Create a thumbnail viewer, note that this viewer can be hidden or disposed */
  var objThumbnailViewer = DWObject.Viewer.createThumbnailViewer(thumbnailViewerSettings);
  objThumbnailViewer.show();
  //objThumbnailViewer.hide();
  //objThumbnailViewer.dispose();
  /* updateViewMode() is used to change only the view mode of the thumbnail viewer */
  objThumbnailViewer.updateViewMode(viewMode: ViewMode);
  /* The following two are used to hook or unhook events to the thumbnail viewer */
  objThumbnailViewer.on()
  objThumbnailViewer.off()
```

  + `ShowImageEditor()`

  While this method still works, it's deprecated and the alternative is shown in the code below

``` javascript
  /* The image editor is now created on the fly and can be hidden or disposed */
  var objImageEditor = DWObject.Viewer.createImageEditor(editorSettings);
  objImageEditor.show();
  objImageEditor.hide();
  objImageEditor.dispose();
```

  + `Viewer.bindCustomElement()`
  + `Viewer.showCustomElement()`
  + `Viewer.hideCustomElement()`
  + `Viewer.toggleCustomElement()`

  As already mentioned, these four methods are removed and the alternative implementation is shown in the code below

``` javascript
  var objCustomElement = DWObject.Viewer.createCustomElement(document.getElementById("divCustomElement"));
  objCustomElement.show();
  objCustomElement.hide();
  objCustomElement.dispose();
```
