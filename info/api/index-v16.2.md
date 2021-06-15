---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Index
keywords: Dynamic Web TWAIN, Documentation, API Reference, Index
breadcrumbText: API Reference
description: Dynamic Web TWAIN SDK Documentation API Reference Index Page
---

> Some old APIs are deprecated, check out [Deprecated Features and APIs]({{site.info}}schedule/deprecated-v16.2.html)

# API List

## Global

* [`Dynamsoft.WebTwainEnv`]({{site.info}}api/Dynamsoft_WebTwainEnv-v16.2-v16.2.html) 
* [`Dynamsoft.Enum`]({{site.info}}api/Dynamsoft_Enum-v16.2-v16.2.html) 

## WebTwain

### Buffer

#### Methods

<!--* [`GetImageBitDepthAsync()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagebitdepthasync)-->

* [`ClearImageTags()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#clearimagetags) 
* [`RenameTag()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#renametag) 
* [`FilterImagesByTag()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#filterimagesbytag)
* [`ClearFilter()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#clearfilter)
* [`SetDefaultTag()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#setdefaulttag) 
* [`TagImages()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#tagimages)
* [`GetImageBitDepth()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagebitdepth)
* [`GetImageSize()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagesize)
* [`GetImageSizeWithSpecifiedType()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagesizewithspecifiedtype) 
* [`GetSelectedImagesSize()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getselectedimagessize)
* [`GetImageHeight()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimageheight) 
* [`GetImageWidth()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagewidth)
* [`GetImagePartURL()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimageparturl) 
* [`GetImageURL()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimageurl)
* [`GetImageXResolution()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimagexresolution) 
* [`GetImageYResolution()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getimageyresolution)
* [`GetSkewAngle()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getskewangle) 
* [`GetSkewAngleEx()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#getskewangleex)
* [`ImageIDToIndex()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#imageidtoindex) 
* [`IndexToImageID()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#indextoimageid)
* [`IsBlankImage()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#isblankimage) 
* [`IsBlankImageExpress()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#isblankimageexpress)
* [`SelectAllImages()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#selectallimages) 
* [`SelectImages()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#selectimages)
* [`MoveImage()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#moveimage) 
* [`SwitchImage()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#switchimage)
* [`RemoveImage()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#removeimage) 
* [`RemoveAllImages()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#removeallimages)
* [`RemoveAllSelectedImages()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#removeallselectedimages)

<!--* [`RemoveAllImagesAsync()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#removeallimagesasync)-->
<!--* [`RemoveAllSelectedImagesAsync()`]({{site.info}}api/WebTwain_Buffer-v16.2.html#removeallselectedimagesasync)-->

#### Properties

* [`BlankImageCurrentStdDev`]({{site.info}}api/WebTwain_Buffer-v16.2.html#blanimagecurrentstddev)   
* [`BlankImageMaxStdDev`]({{site.info}}api/WebTwain_Buffer-v16.2.html#blankimagemaxstddev)
* [`BlankImageThreshold`]({{site.info}}api/WebTwain_Buffer-v16.2.html#blankimagethreshold)   
* [`BufferMemoryLimit`]({{site.info}}api/WebTwain_Buffer-v16.2.html#buffermemorylimit)
* [`CurrentImageIndexInBuffer`]({{site.info}}api/WebTwain_Buffer-v16.2.html#currentimageindexinbuffer) 
* [`HowManyImagesInBuffer`]({{site.info}}api/WebTwain_Buffer-v16.2.html#howmanyimagesinbuffer)
* [`IfAllowLocalCache`]({{site.info}}api/WebTwain_Buffer-v16.2.html#ifallowlocalcache)   
* [`SelectedImagesIndices`]({{site.info}}api/WebTwain_Buffer-v16.2.html#selectedimagesindices)
* [`MaxImagesInBuffer`]({{site.info}}api/WebTwain_Buffer-v16.2.html#maximagesinbuffer)

#### Events

* [`OnBufferChanged`]({{site.info}}api/WebTwain_Buffer-v16.2.html#onbufferchanged)
* [`OnBitmapChanged`]({{site.info}}api/WebTwain_Buffer-v16.2.html#onbitmapchanged)
* [`OnIndexChangeDragDropDone`]({{site.info}}api/WebTwain_Buffer-v16.2.html#onindexchangedragdropdone)
* [`OnTopImageInTheViewChanged`]({{site.info}}api/WebTwain_Buffer-v16.2.html#ontopimageintheviewchanged)

### Edit

#### Methods

* [`Crop()`]({{site.info}}api/WebTwain_Edit-v16.2.html#crop) 
* [`CropToClipboard()`]({{site.info}}api/WebTwain_Edit-v16.2.html#croptoclipboard)
* [`CutFrameToClipboard()`]({{site.info}}api/WebTwain_Edit-v16.2.html#cutframetoclipboard) 
* [`CutToClipboard()`]({{site.info}}api/WebTwain_Edit-v16.2.html#cuttoclipboard)
* [`CopyToClipboard()`]({{site.info}}api/WebTwain_Edit-v16.2.html#copytoclipboard) 
* [`Erase()`]({{site.info}}api/WebTwain_Edit-v16.2.html#erase)
* [`Flip()`]({{site.info}}api/WebTwain_Edit-v16.2.html#flip)
* [`Mirror()`]({{site.info}}api/WebTwain_Edit-v16.2.html#mirror)
* [`Rotate()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotate) 
* [`RotateEx()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotateex)
* [`RotateLeft()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotateleft) 
* [`RotateRight()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotateright)
* [`ChangeBitDepth()`]({{site.info}}api/WebTwain_Edit-v16.2.html#changebitdepth) 
* [`SetDPI()`]({{site.info}}api/WebTwain_Edit-v16.2.html#setdpi)
* [`ConvertToBW()`]({{site.info}}api/WebTwain_Edit-v16.2.html#converttobw) 
* [`ConvertToGrayScale()`]({{site.info}}api/WebTwain_Edit-v16.2.html#converttograyscale)
* [`ChangeImageSize()`]({{site.info}}api/WebTwain_Edit-v16.2.html#changeimagesize) 
* [`Invert()`]({{site.info}}api/WebTwain_Edit-v16.2.html#invert)
* [`SetImageWidth()`]({{site.info}}api/WebTwain_Edit-v16.2.html#setimagewidth)

<!--* [`FlipAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#flipasync)-->
<!--* [`MirrorAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#mirrorasync)-->
<!--* [`RotateAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotate) -->
<!--* [`RotateLeftAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotateleft) -->
<!--* [`RotateRightAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#rotateright)-->
<!--* [`ConvertToGrayScaleAsync()`]({{site.info}}api/WebTwain_Edit-v16.2.html#converttograyscaleasync)-->

#### Properties

* [`BackgroundFillColor`]({{site.info}}api/WebTwain_Edit-v16.2.html#backgroundfillcolor)

### Scan

#### Methods

* [`GetSourceNameItems()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getsourcenameitems) 
* [`GetSourceNames()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getsourcenames)
* [`GetSourceNamesAsync()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getsourcenamesasync)
* [`GetDeviceType()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getdevicetype)
* [`SelectSource()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#selectsource)
* [`SelectSourceAsync()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#selectsourceasync)
* [`SelectSourceByIndex()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#selectsourcebyindex) 
* [`SelectSourceByIndexAsync()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#selectsourcebyindexasync) 
* [`SetOpenSourceTimeout()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setopensourcetimeout)
* [`OpenSource()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#opensource)
* [`OpenSourceAsync()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#opensourceasync)
* [`EnableSourceUI()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#enablesourceui)
* [`EnableSource()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#enablesource)
* [`AcquireImage()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#acquireimage)
* [`startScan()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#startscan)
* [`DisableSource()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#disablesource)
* [`CloseSource()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#closesource)
* [`CloseSourceAsync()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#closesourceasync)
* [`CloseWorkingProcess()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#closeworkingprocess)

#### Properties

* [`CurrentSourceName`]({{site.info}}api/WebTwain_Acquire-v16.2.html#currentsourcename) 
* [`IfDisableSourceAfterAcquire`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifdisablesourceafteracquire)
* [`IfDuplexEnabled`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifduplexenabled)  
* [`IfFeederEnabled`]({{site.info}}api/WebTwain_Acquire-v16.2.html#iffeederenabled)
* [`PageSize`]({{site.info}}api/WebTwain_Acquire-v16.2.html#pagesize)  
* [`PixelType`]({{site.info}}api/WebTwain_Acquire-v16.2.html#pixeltype)
* [`Resolution`]({{site.info}}api/WebTwain_Acquire-v16.2.html#resolution) 
* [`SourceCount`]({{site.info}}api/WebTwain_Acquire-v16.2.html#sourcecount)

#### Events

* [`OnPostAllTransfers`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onpostalltransfers)   
* [`OnPostTransfer`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onposttransfer)
* [`OnPostTransferAsync`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onposttransferasync) 
* [`OnPreAllTransfers`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onprealltransfers)
* [`OnPreTransfer`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onpretransfer)

> The following APIs are compatible with TWAIN (mostly Windows, but could also be macOS)

#### Methods

* [`CancelAllPendingTransfers()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#cancelallpendingtransfers) 
* [`CloseSourceManager()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#closesourcemanager)
* [`FeedPage()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#feedpage)   
* [`GetCustomDSData()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getcustomdsdata)
* [`GetCustomDSDataEx()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getcustomdsdataex)   
* [`OpenSourceManager()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#opensourcemanager)
* [`ResetImageLayout()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#resetimagelayout)  
* [`RewindPage()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#rewindpage)
* [`SetCustomDSData()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setcustomdsdata) 
* [`SetCustomDSDataEx()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setcustomdsdataex)
* [`SetFileXferInfo()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setfilexferinfo) 
* [`SetImageLayout()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setimagelayout)
* [`getCapabilities()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#getcapabilities)   
* [`setCapabilities()`]({{site.info}}api/WebTwain_Acquire-v16.2.html#setcapabilities)

#### Properties

* [`BitDepth`]({{site.info}}api/WebTwain_Acquire-v16.2.html#bitdepth)  
* [`Brightness`]({{site.info}}api/WebTwain_Acquire-v16.2.html#brightness)
* [`Contrast`]({{site.info}}api/WebTwain_Acquire-v16.2.html#contrast)   
* [`DataSourceStatus`]({{site.info}}api/WebTwain_Acquire-v16.2.html#datasourcestatus)
* [`DefaultSourceName`]({{site.info}}api/WebTwain_Acquire-v16.2.html#defaultsourcename)   
* [`Duplex`]({{site.info}}api/WebTwain_Acquire-v16.2.html#duplex)
* [`IfAutoBright`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautobright)    
* [`IfAutoDiscardBlankpages`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautodiscardblankpages)
* [`IfAutoFeed`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautofeed)  
* [`IfAutomaticBorderDetection`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautomaticborderdetection)
* [`IfAutomaticDeskew`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautomaticdeskew)   
* [`IfAutoScan`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifautoscan)
* [`IfFeederLoaded`]({{site.info}}api/WebTwain_Acquire-v16.2.html#iffeederloaded)   
* [`IfPaperDetectable`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifpaperdetectable)
* [`IfShowIndicator`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifshowindicator) 
* [`IfShowUI`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifshowui)
* [`IfUIControllable`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifuicontrollable)  
* [`IfUseTwainDSM`]({{site.info}}api/WebTwain_Acquire-v16.2.html#ifusetwaindsm)
* [`ImageCaptureDriverType`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagecapturedrivertype)
* [`ImageLayoutDocumentNumber`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutdocumentnumber) 
* [`ImageLayoutFrameBottom`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutframebottom)
* [`ImageLayoutFrameLeft`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutframeleft) 
* [`ImageLayoutFrameNumber`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutframenumber)
* [`ImageLayoutFrameRight`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutframeright)  
* [`ImageLayoutFrameTop`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutframetop)
* [`ImageLayoutPageNumber`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagelayoutpagenumber)  
* [`ImagePixelType`]({{site.info}}api/WebTwain_Acquire-v16.2.html#imagepixeltype)
* [`MagData`]({{site.info}}api/WebTwain_Acquire-v16.2.html#magdata) 
* [`MagType`]({{site.info}}api/WebTwain_Acquire-v16.2.html#magtype)
* [`PendingXfers`]({{site.info}}api/WebTwain_Acquire-v16.2.html#pendingxfers)   
* [`PixelFlavor`]({{site.info}}api/WebTwain_Acquire-v16.2.html#pixelflavor)
* [`TransferMode`]({{site.info}}api/WebTwain_Acquire-v16.2.html#transfermode)    
* [`Unit`]({{site.info}}api/WebTwain_Acquire-v16.2.html#unit)
* [`XferCount`]({{site.info}}api/WebTwain_Acquire-v16.2.html#xfercount)

#### Events

* [`OnSourceUIClose`]({{site.info}}api/WebTwain_Acquire-v16.2.html#onsourceuiclose)

### Input

#### Methods

* [`LoadImage()`]({{site.info}}api/WebTwain_IO-v16.2.html#loadimage)
* [`LoadImageEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#loadimageex)
* [`LoadImageFromBase64Binary()`]({{site.info}}api/WebTwain_IO-v16.2.html#loadimagefrombase64binary)
* [`LoadImageFromBinary()`]({{site.info}}api/WebTwain_IO-v16.2.html#loadimagefrombinary)
* [`LoadDibFromClipboard()`]({{site.info}}api/WebTwain_IO-v16.2.html#loaddibfromclipboard)
* [`FTPDownload()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpdownload)
* [`FTPDownloadEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpdownloadex)
* [`HTTPDownload()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpdownload)
* [`HTTPDownloadEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpdownloadex)
* [`HTTPDownloadThroughPost()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpdownloadthroughpost)
* [`HTTPDownloadDirectly()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpdownloaddirectly)

<!--* [`LoadDibFromClipboardAsync()`]({{site.info}}api/WebTwain_IO-v16.2.html#loaddibfromclipboardasync)-->

### Output

#### Methods

* [`ConvertToBase64()`]({{site.info}}api/WebTwain_IO-v16.2.html#converttobase64)
* [`ConvertToBlob()`]({{site.info}}api/WebTwain_IO-v16.2.html#converttoblob)
* [`FTPUpload()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpupload)
* [`FTPUploadEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpuploadex)
* [`FTPUploadAllAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpuploadallasmultipagetiff)
* [`FTPUploadAllAsPDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpuploadallaspdf)
* [`FTPUploadAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpuploadasmultipagepdf)
* [`FTPUploadAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpuploadasmultipagetiff)
* [`HTTPUpload()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpupload)
* [`HTTPUploadThroughPutEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughputex)
* [`HTTPUploadThroughPost()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughpost)
* [`HTTPUploadThroughPostEx()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughpostex)
* [`HTTPUploadAllThroughPostAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadallthroughpostasmultipagetiff)
* [`HTTPUploadAllThroughPostAsPDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadallthroughpostaspdf)
* [`HTTPUploadThroughPostAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughpostasmultipagepdf)
* [`HTTPUploadThroughPostAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughpostasmultipagetiff)
* [`HTTPUploadThroughPostDirectly()`]({{site.info}}api/WebTwain_IO-v16.2.html#httpuploadthroughpostdirectly)
* [`SaveAsBMP()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveasbmp)
* [`SaveAsJPEG()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveasjpeg)
* [`SaveAsPDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveaspdf)
* [`SaveAsPNG()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveaspng)
* [`SaveAsTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveastiff)
* [`SaveSelectedImagesAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveselectedimagesasmultipagepdf)
* [`SaveSelectedImagesAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveselectedimagesasmultipagetiff)
* [`SaveAllAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveallasmultipagetiff)
* [`SaveAllAsPDF()`]({{site.info}}api/WebTwain_IO-v16.2.html#saveallaspdf)

### Others

#### Methods

* [`ClearTiffCustomTag()`]({{site.info}}api/WebTwain_IO-v16.2.html#cleartiffcustomtag)    
* [`SetTiffCustomTag()`]({{site.info}}api/WebTwain_IO-v16.2.html#settiffcustomtag)
* [`ClearAllHTTPFormField()`]({{site.info}}api/WebTwain_IO-v16.2.html#clearallhttpformfield) 
* [`SetHTTPFormField()`]({{site.info}}api/WebTwain_IO-v16.2.html#sethttpformfield)
* [`SetHTTPHeader()`]({{site.info}}api/WebTwain_IO-v16.2.html#sethttpheader)   
* [`SetUploadSegment()`]({{site.info}}api/WebTwain_IO-v16.2.html#setuploadsegment)
* [`ShowFileDialog()`]({{site.info}}api/WebTwain_IO-v16.2.html#showfiledialog) 
* [`Print()`]({{site.info}}api/WebTwain_IO-v16.2.html#print)

#### Properties

* [`FTPPassword`]({{site.info}}api/WebTwain_IO-v16.2.html#ftppassword)  
* [`FTPPort`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpport)
* [`FTPUserName`]({{site.info}}api/WebTwain_IO-v16.2.html#ftpusername)  
* [`IfPASVMode`]({{site.info}}api/WebTwain_IO-v16.2.html#ifpasvmode)
* [`HttpFieldNameOfUploadedImage`]({{site.info}}api/WebTwain_IO-v16.2.html#httpfieldnameofuploadedimage) 
* [`HTTPPort`]({{site.info}}api/WebTwain_IO-v16.2.html#httpport)
* [`IfSSL`]({{site.info}}api/WebTwain_IO-v16.2.html#ifssl)  
* [`HTTPPostResponseString`]({{site.info}}api/WebTwain_IO-v16.2.html#httppostresponsestring)
* [`IfShowFileDialog`]({{site.info}}api/WebTwain_IO-v16.2.html#ifshowfiledialog) 
* [`IfShowCancelDialogWhenImageTransfer`]({{site.info}}api/WebTwain_IO-v16.2.html#ifshowcanceldialogwhenimagetransfer)
* [`IfShowProgressBar`]({{site.info}}api/WebTwain_IO-v16.2.html#ifshowprogressbar)  
* [`JPEGQuality`]({{site.info}}api/WebTwain_IO-v16.2.html#jpegquality)
* [`IfTiffMultiPage`]({{site.info}}api/WebTwain_IO-v16.2.html#iftiffmultipage)   
* [`TIFFCompressionType`]({{site.info}}api/WebTwain_IO-v16.2.html#tiffcompressiontype)
* [`MaxUploadImageSize`]({{site.info}}api/WebTwain_IO-v16.2.html#maxuploadimagesize)
* [`IfAppendImage`]({{site.info}}api/WebTwain_IO-v16.2.html#ifappendimage)

#### Events

* [`OnGetFilePath`]({{site.info}}api/WebTwain_IO-v16.2.html#ongetfilepath)
* [`OnPostLoad`]({{site.info}}api/WebTwain_IO-v16.2.html#onpostload)
* [`OnInternetTransferPercentage`]({{site.info}}api/WebTwain_IO-v16.2.html#oninternettransferpercentage)

### Util

#### Methods

* [`RegisterEvent()`]({{site.info}}api/WebTwain_Util-v16.2.html#registerevent) 
* [`UnregisterEvent()`]({{site.info}}api/WebTwain_Util-v16.2.html#unregisterevent)
* [`SetProductKeyAsync()`]({{site.info}}api/WebTwain_Util-v16.2.html#setproductkeyasync)
* [`SetLanguage()`]({{site.info}}api/WebTwain_Util-v16.2.html#setlanguage)
* [`GenerateURLForUploadData()`]({{site.info}}api/WebTwain_Util-v16.2.html#generateurlforuploaddata)

#### Properties

* [`ErrorCode`]({{site.info}}api/WebTwain_Util-v16.2.html#errorcode)
* [`ErrorString`]({{site.info}}api/WebTwain_Util-v16.2.html#errorstring)
* [`LogLevel`]({{site.info}}api/WebTwain_Util-v16.2.html#loglevel)
* [`Manufacturer`]({{site.info}}api/WebTwain_Util-v16.2.html#manufacturer)
* [`ProductFamily`]({{site.info}}api/WebTwain_Util-v16.2.html#productfamily)
* [`ProductName`]({{site.info}}api/WebTwain_Util-v16.2.html#productname)
* [`VersionInfo`]({{site.info}}api/WebTwain_Util-v16.2.html#versioninfo)
* [`ProductKey`]({{site.info}}api/WebTwain_Util-v16.2.html#productkey)
* [`UseLocalService`]({{site.info}}api/WebTwain_Util-v16.2.html#uselocalservice)

### Viewer

#### Methods

* [`bind()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#bind)
* [`clearSelectedAreas()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#clearselectedareas)
* [`createCustomElement()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#createcustomelement)
* [`createImageEditor()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#createimageeditor)
* [`createThumbnailViewer()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#createthumbnailviewer)
* [`first()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#first)
* [`fitWindow()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#fitwindow)
* [`gotoPage()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#gotopage)
* [`hide()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#hide)
* [`last()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#last)
* [`next()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#next)
* [`off()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#off)
* [`on()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#on)
* [`previous()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#previous)
* [`render()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#render)
* [`setButtonClass()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#setbuttonclass)
* [`setSelectedAreas()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#setselectedAreas)
* [`setViewMode()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#setviewmode) 
* [`show()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#show)
* [`unbind()`]({{site.info}}api/WebTwain_Viewer-v16.2.html#unbind)

#### Properties

* [`acceptDrop`]({{site.info}}api/WebTwain_Viewer-v16.2.html#acceptdrop)
* [`allowSlide`]({{site.info}}api/WebTwain_Viewer-v16.2.html#allowslide)
* [`background`]({{site.info}}api/WebTwain_Viewer-v16.2.html#background)
* [`border`]({{site.info}}api/WebTwain_Viewer-v16.2.html#border)
* [`cursor`]({{site.info}}api/WebTwain_Viewer-v16.2.html#cursor)
* [`height`]({{site.info}}api/WebTwain_Viewer-v16.2.html#height)
* [`idPostfix`]({{site.info}}api/WebTwain_Viewer-v16.2.html#idpostfix)
* [`ifAutoScroll`]({{site.info}}api/WebTwain_Viewer-v16.2.html#ifautoscroll)
* [`innerBorder`]({{site.info}}api/WebTwain_Viewer-v16.2.html#innerBorder)
* [`pageMargin`]({{site.info}}api/WebTwain_Viewer-v16.2.html#pagemargin)
* [`selectedAreaBorderColor`]({{site.info}}api/WebTwain_Viewer-v16.2.html#selectedareabordercolor)
* [`selectedPageBackground`]({{site.info}}api/WebTwain_Viewer-v16.2.html#selectedpagebackground)
* [`selectedPageBorder`]({{site.info}}api/WebTwain_Viewer-v16.2.html#selectedpageborder)
* [`selectionRectAspectRatio`]({{site.info}}api/WebTwain_Viewer-v16.2.html#selectionrectaspectratio)
* [`showPageNumber`]({{site.info}}api/WebTwain_Viewer-v16.2.html#showpagenumber)
* [`singlePageMode`]({{site.info}}api/WebTwain_Viewer-v16.2.html#singlepagemode)
* [`width`]({{site.info}}api/WebTwain_Viewer-v16.2.html#width)
* [`zoom`]({{site.info}}api/WebTwain_Viewer-v16.2.html#zoom)

#### Events

* [`click`]({{site.info}}api/WebTwain_Viewer-v16.2.html#click)
* [`contextmenu`]({{site.info}}api/WebTwain_Viewer-v16.2.html#contextmenu)
* [`dblclick`]({{site.info}}api/WebTwain_Viewer-v16.2.html#dblclick)
* [`mousemove`]({{site.info}}api/WebTwain_Viewer-v16.2.html#mousemove)
* [`mousedown`]({{site.info}}api/WebTwain_Viewer-v16.2.html#mousedown)
* [`mouseup`]({{site.info}}api/WebTwain_Viewer-v16.2.html#mouseup)
* [`mouseout`]({{site.info}}api/WebTwain_Viewer-v16.2.html#mouseout)
* [`mouseover`]({{site.info}}api/WebTwain_Viewer-v16.2.html#mouseover)
* [`keydown`]({{site.info}}api/WebTwain_Viewer-v16.2.html#keydown)
* [`keyup`]({{site.info}}api/WebTwain_Viewer-v16.2.html#keyup)
* [`pageAreaSelected`]({{site.info}}api/WebTwain_Viewer-v16.2.html#pageareaselected)
* [`pageAreaUnselected`]({{site.info}}api/WebTwain_Viewer-v16.2.html#pageareaunselected)
* [`pageRendered`]({{site.info}}api/WebTwain_Viewer-v16.2.html#pagerendered)
* [`resize`]({{site.info}}api/WebTwain_Viewer-v16.2.html#resize)
* [`topPageChanged`]({{site.info}}api/WebTwain_Viewer-v16.2.html#toppagechanged)

## Addon

### BarcodeReader

#### Methods

* [`decode()`]({{site.info}}api/Addon_BarcodeReader-v16.2.html#decode)
* [`getRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader-v16.2.html#getruntimesettings)
* [`updateRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader-v16.2.html#updateruntimesettings)
* [`resetRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader-v16.2.html#resetruntimesettings)
* [`initRuntimeSettingsWithString()`]({{site.info}}api/Addon_BarcodeReader-v16.2.html#initruntimesettingswithstring)

### OCR

#### Methods

* [`Download()`]({{site.info}}api/Addon_OCR-v16.2.html#download)  
* [`DownloadLangData()`]({{site.info}}api/Addon_OCR-v16.2.html#downloadlangdata)
* [`IsModuleInstalled()`]({{site.info}}api/Addon_OCR-v16.2.html#ismoduleinstalled)   
* [`SetLanguage()`]({{site.info}}api/Addon_OCR-v16.2.html#setlanguage)
* [`SetOutputFormat()`]({{site.info}}api/Addon_OCR-v16.2.html#setoutputformat) 
* [`SetPageSetMode()`]({{site.info}}api/Addon_OCR-v16.2.html#setpagesetmode)
* [`GetIfUseDetectedFont()`]({{site.info}}api/Addon_OCR-v16.2.html#getifusedetectedfont)    
* [`SetIfUseDetectedFont()`]({{site.info}}api/Addon_OCR-v16.2.html#setifusedetectedfont)
* [`GetUnicodeFontName()`]({{site.info}}api/Addon_OCR-v16.2.html#getunicodefontname) 
* [`SetUnicodeFontName()`]({{site.info}}api/Addon_OCR-v16.2.html#setunicodefontname)
* [`GetMinFontSizeforMoreAccurateResult()`]({{site.info}}api/Addon_OCR-v16.2.html#getminfontsizeformoreaccurateresult) 
* [`SetMinFontSizeforMoreAccurateResult()`]({{site.info}}api/Addon_OCR-v16.2.html#setminfontsizeformoreaccurateresult)
* [`Recognize()`]({{site.info}}api/Addon_OCR-v16.2.html#recognize)    
* [`RecognizeFile()`]({{site.info}}api/Addon_OCR-v16.2.html#recognizefile)
* [`RecognizeRect()`]({{site.info}}api/Addon_OCR-v16.2.html#recognizerect) 
* [`RecognizeSelectedImages()`]({{site.info}}api/Addon_OCR-v16.2.html#recognizeselectedimages)

### OCRPro

#### Methods

* [`Download()`]({{site.info}}api/Addon_OCRPro-v16.2.html#download) 
* [`IsModuleInstalled()`]({{site.info}}api/Addon_OCRPro-v16.2.html#ismoduleinstalled)
* [`Recognize()`]({{site.info}}api/Addon_OCRPro-v16.2.html#recognize)  
* [`RecognizeFile()`]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizefile)
* [`RecognizeRect()`]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizerect) 
* [`RecognizeSelectedImages()`]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizeselectedimages)

#### Properties

* [`Settings`]({{site.info}}api/Addon_OCRPro-v16.2.html#settings)

### PDF

#### Methods

* [`IsTextBasedPDF()`]({{site.info}}api/Addon_PDF-v16.2.html#istextbasedpdf)
* [`SetConvertMode()`]({{site.info}}api/Addon_PDF-v16.2.html#setconvertmode)
* [`SetPassword()`]({{site.info}}api/Addon_PDF-v16.2.html#setpassword)
* [`SetResolution()`]({{site.info}}api/Addon_PDF-v16.2.html#setresolution)
* [`Write.Setup()`]({{site.info}}api/Addon_PDF-v16.2.html#writesetup)

### Camera

#### Methods

* [`getSourceList()`]({{site.info}}api/Addon_Camera-v16.2.html#getsourcelist) 
* [`selectSource()`]({{site.info}}api/Addon_Camera-v16.2.html#selectsource)
* [`getCurrentSource()`]({{site.info}}api/Addon_Camera-v16.2.html#getcurrentsource)
* [`closeSource()`]({{site.info}}api/Addon_Camera-v16.2.html#closesource)
* [`getResolution()`]({{site.info}}api/Addon_Camera-v16.2.html#getresolution)
* [`setResolution()`]({{site.info}}api/Addon_Camera-v16.2.html#setresolution)
* [`getCurrentResolution()`]({{site.info}}api/Addon_Camera-v16.2.html#getcurrentresolution)
* [`play()`]({{site.info}}api/Addon_Camera-v16.2.html#play)
* [`pause()`]({{site.info}}api/Addon_Camera-v16.2.html#pause)
* [`resume()`]({{site.info}}api/Addon_Camera-v16.2.html#resume)
* [`stop()`]({{site.info}}api/Addon_Camera-v16.2.html#stop)
* [`getStatus()`]({{site.info}}api/Addon_Camera-v16.2.html#getstatus)
* [`capture()`]({{site.info}}api/Addon_Camera-v16.2.html#capture)
* [`showVideo()`]({{site.info}}api/Addon_Camera-v16.2.html#showvideo)
* [`closeVideo()`]({{site.info}}api/Addon_Camera-v16.2.html#closevideo)

### Webcam

#### Methods

* [`CaptureImage()`]({{site.info}}api/Addon_Webcam-v16.2.html#captureimage) 
* [`CloseSource()`]({{site.info}}api/Addon_Webcam-v16.2.html#closesource)
* [`GetCameraControlPropertySetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#getcameracontrolpropertysetting) 
* [`GetCameraControlPropertyMoreSetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#getcameracontrolpropertymoresetting)
* [`GetVideoPropertySetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#getvideopropertysetting) 
* [`GetVideoPropertyMoreSetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#getvideopropertymoresetting)
* [`SetCameraControlPropertySetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#setcameracontrolpropertysetting)
* [`SetVideoPropertySetting()`]({{site.info}}api/Addon_Webcam-v16.2.html#setvideopropertysetting)
* [`GetFrameRate()`]({{site.info}}api/Addon_Webcam-v16.2.html#getframerate) 
* [`SetFrameRate()`]({{site.info}}api/Addon_Webcam-v16.2.html#setframerate)
* [`GetMediaType()`]({{site.info}}api/Addon_Webcam-v16.2.html#getmediatype) 
* [`SetMediaType()`]({{site.info}}api/Addon_Webcam-v16.2.html#setmediatype)
* [`GetResolution()`]({{site.info}}api/Addon_Webcam-v16.2.html#getresolution) 
* [`SetResolution()`]({{site.info}}api/Addon_Webcam-v16.2.html#setresolution)
* [`GetFramePartURL()`]({{site.info}}api/Addon_Webcam-v16.2.html#getframeparturl) 
* [`GetFrameURL()`]({{site.info}}api/Addon_Webcam-v16.2.html#getframeurl)
* [`GetSourceList()`]({{site.info}}api/Addon_Webcam-v16.2.html#getsourcelist)  
* [`SelectSource()`]({{site.info}}api/Addon_Webcam-v16.2.html#selectsource)
* [`PauseVideo()`]({{site.info}}api/Addon_Webcam-v16.2.html#pausevideo) 
* [`PlayVideo()`]({{site.info}}api/Addon_Webcam-v16.2.html#playvideo)
* [`SetVideoRotateMode()`]({{site.info}}api/Addon_Webcam-v16.2.html#setvideorotatemode)    
* [`StopVideo()`]({{site.info}}api/Addon_Webcam-v16.2.html#stopvideo)

## [`Dynamsoft.FileUploader`](#dynamsoftfileuploader)

#### Methods

* [`Init()`]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#init)
* [`CreateJob()`]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#createjob)
* [`Run()`]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#run)
* [`Cancel()`]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#cancel)
* [`CancelAllUpload()`]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#cancelallupload)
