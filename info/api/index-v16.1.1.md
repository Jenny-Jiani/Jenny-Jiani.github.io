---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Index
keywords: Dynamic Web TWAIN, Documentation, API Reference, Index
breadcrumbText: API Reference
description: Dynamic Web TWAIN SDK Documentation API Reference Index Page
---

> Some old APIs are deprecated, check out [Deprecated Features and APIs]({{site.info}}schedule/deprecated.html)

# API List

## Global

* [Dynamsoft.WebTwainEnv]({{site.info}}api/Dynamsoft_WebTwainEnv-v16.1.1.html) 
* [Dynamsoft.Enum]({{site.info}}api/Dynamsoft_Enum-v16.1.1.html) 

## WebTwain

### Buffer

#### Methods

<!--* [GetImageBitDepthAsync()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagebitdepthasync)-->

* [ClearImageTags()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#clearimagetags) 
* [FilterImagesByTag()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#filterimagesbytag)
* [SetDefaultTag()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#setdefaulttag) 
* [TagImages()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#tagimages)
* [GetImageBitDepth()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagebitdepth)
* [GetImageSize()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagesize)
* [GetImageSizeWithSpecifiedType()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagesizewithspecifiedtype) 
* [GetSelectedImagesSize()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getselectedimagessize)
* [GetImageHeight()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimageheight) 
* [GetImageWidth()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagewidth)
* [GetImagePartURL()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimageparturl) 
* [GetImageURL()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimageurl)
* [GetImageXResolution()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimagexresolution) 
* [GetImageYResolution()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getimageyresolution)
* [GetSkewAngle()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getskewangle) 
* [GetSkewAngleEx()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#getskewangleex)
* [ImageIDToIndex()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#imageidtoindex) 
* [IndexToImageID()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#indextoimageid)
* [IsBlankImage()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#isblankimage) 
* [IsBlankImageExpress()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#isblankimageexpress)
* [SelectAllImages()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#selectallimages) 
* [SelectImages()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#selectimages)
* [MoveImage()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#moveimage) 
* [SwitchImage()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#switchimage)
* [RemoveImage()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#removeimage) 
* [RemoveAllImages()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#removeallimages)
* [RemoveAllSelectedImages()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#removeallselectedimages)

<!--* [RemoveAllImagesAsync()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#removeallimagesasync)-->
<!--* [RemoveAllSelectedImagesAsync()]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#removeallselectedimagesasync)-->

#### Properties

* [BlankImageCurrentStdDev]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#blanimagecurrentstddev)   
* [BlankImageMaxStdDev]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#blankimagemaxstddev)
* [BlankImageThreshold]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#blankimagethreshold)   
* [BufferMemoryLimit]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#buffermemorylimit)
* [CurrentImageIndexInBuffer]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#currentimageindexinbuffer) 
* [HowManyImagesInBuffer]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#howmanyimagesinbuffer)
* [IfAllowLocalCache]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#ifallowlocalcache)   
* [SelectedImagesIndices]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#selectedimagesindices)
* [MaxImagesInBuffer]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#maximagesinbuffer)

#### Events

* [OnBitmapChanged]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#onbitmapchanged)
* [OnImageAreaSelected]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#onimageareaselected)
* [OnImageAreaDeSelected]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#onimageareadeselected)
* [OnIndexChangeDragDropDone]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#onindexchangedragdropdone)
* [OnTopImageInTheViewChanged]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#ontopimageintheviewchanged)

### Edit

#### Methods

* [Crop()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#crop) 
* [CropToClipboard()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#croptoclipboard)
* [CutFrameToClipboard()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#cutframetoclipboard) 
* [CutToClipboard()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#cuttoclipboard)
* [CopyToClipboard()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#copytoclipboard) 
* [Erase()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#erase)
* [Flip()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#flip)
* [Mirror()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#mirror)
* [Rotate()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotate) 
* [RotateEx()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotateex)
* [RotateLeft()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotateleft) 
* [RotateRight()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotateright)
* [ChangeBitDepth()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#changebitdepth) 
* [SetDPI()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#setdpi)
* [ConvertToBW()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#converttobw) 
* [ConvertToGrayScale()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#converttograyscale)
* [ChangeImageSize()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#changeimagesize) 
* [Invert()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#invert)
* [SetImageWidth()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#setimagewidth) 
* [ShowImageEditor()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#showimageeditor)

<!--* [FlipAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#flipasync)-->
<!--* [MirrorAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#mirrorasync)-->
<!--* [RotateAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotate) -->
<!--* [RotateLeftAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotateleft) -->
<!--* [RotateRightAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#rotateright)-->
<!--* [ConvertToGrayScaleAsync()]({{site.info}}api/WebTwain_Edit-v16.1.1.html#converttograyscaleasync)-->

#### Properties

* [BackgroundFillColor]({{site.info}}api/WebTwain_Edit-v16.1.1.html#backgroundfillcolor)

### Scan

#### Methods

* [GetSourceNameItems()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getsourcenameitems) 
* [GetSourceNames()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getsourcenames)
* [GetSourceNamesAsync()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getsourcenamesasync)
* [GetDeviceType()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getdevicetype)
* [SelectSource()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#selectsource)
* [SelectSourceAsync()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#selectsourceasync)
* [SelectSourceByIndex()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#selectsourcebyindex) 
* [SelectSourceByIndexAsync()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#selectsourcebyindexasync) 
* [SetOpenSourceTimeout()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setopensourcetimeout)
* [OpenSource()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#opensource)
* [OpenSourceAsync()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#opensourceasync)
* [EnableSourceUI()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#enablesourceui)
* [EnableSource()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#enablesource)
* [AcquireImage()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#acquireimage)
* [startScan()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#startscan)
* [DisableSource()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#disablesource)
* [CloseSource()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#closesource)
* [CloseSourceAsync()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#closesourceasync)
* [CloseWorkingProcess()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#closeworkingprocess)

#### Properties

* [CurrentSourceName]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#currentsourcename) 
* [IfDisableSourceAfterAcquire]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifdisablesourceafteracquire)
* [IfDuplexEnabled]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifduplexenabled)  
* [IfFeederEnabled]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#iffeederenabled)
* [PageSize]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#pagesize)  
* [PixelType]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#pixeltype)
* [Resolution]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#resolution) 
* [SourceCount]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#sourcecount)

#### Events

* [OnPostAllTransfers]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onpostalltransfers)   
* [OnPostTransfer]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onposttransfer)
* [OnPostTransferAsync]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onposttransferasync) 
* [OnPreAllTransfers]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onprealltransfers)
* [OnPreTransfer]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onpretransfer)

> The following APIs are compatible with TWAIN (mostly Windows, but could also be macOS)

#### Methods

* [CancelAllPendingTransfers()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#cancelallpendingtransfers) 
* [CloseSourceManager()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#closesourcemanager)
* [FeedPage()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#feedpage)   
* [GetCustomDSData()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getcustomdsdata)
* [GetCustomDSDataEx()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getcustomdsdataex)   
* [OpenSourceManager()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#opensourcemanager)
* [ResetImageLayout()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#resetimagelayout)  
* [RewindPage()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#rewindpage)
* [SetCustomDSData()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setcustomdsdata) 
* [SetCustomDSDataEx()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setcustomdsdataex)
* [SetFileXferInfo()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setfilexferinfo) 
* [SetImageLayout()]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setimagelayout)
* [getCapabilities]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#getcapabilities)   
* [setCapabilities]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#setcapabilities)

#### Properties

* [BitDepth ]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#bitdepth)  
* [Brightness]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#brightness)
* [Contrast]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#contrast)   
* [DataSourceStatus]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#datasourcestatus)
* [DefaultSourceName]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#defaultsourcename)   
* [Duplex]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#duplex)
* [IfAutoBright]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautobright)    
* [IfAutoDiscardBlankpages]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautodiscardblankpages)
* [IfAutoFeed]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautofeed)  
* [IfAutomaticBorderDetection]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautomaticborderdetection)
* [IfAutomaticDeskew]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautomaticdeskew)   
* [IfAutoScan]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifautoscan)
* [IfFeederLoaded]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#iffeederloaded)   
* [IfPaperDetectable]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifpaperdetectable)
* [IfShowIndicator]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifshowindicator) 
* [IfShowUI]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifshowui)
* [IfUIControllable]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifuicontrollable)  
* [IfUseTwainDSM]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#ifusetwaindsm)
* [ImageCaptureDriverType]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagecapturedrivertype)
* [ImageLayoutDocumentNumber]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutdocumentnumber) 
* [ImageLayoutFrameBottom]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutframebottom)
* [ImageLayoutFrameLeft]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutframeleft) 
* [ImageLayoutFrameNumber]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutframenumber)
* [ImageLayoutFrameRight]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutframeright)  
* [ImageLayoutFrameTop]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutframetop)
* [ImageLayoutPageNumber]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagelayoutpagenumber)  
* [ImagePixelType]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#imagepixeltype)
* [MagData]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#magdata) 
* [MagType]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#magtype)
* [PendingXfers]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#pendingxfers)   
* [PixelFlavor]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#pixelflavor)
* [TransferMode]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#transfermode)    
* [Unit]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#unit)
* [XferCount]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#xfercount)

#### Events

* [OnSourceUIClose]({{site.info}}api/WebTwain_Acquire-v16.1.1.html#onsourceuiclose)

### Input

#### Methods

* [LoadImage()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loadimage)
* [LoadImageEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loadimageex)
* [LoadImageFromBase64Binary()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loadimagefrombase64binary)
* [LoadImageFromBinary()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loadimagefrombinary)
* [LoadDibFromClipboard()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loaddibfromclipboard)
* [FTPDownload()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpdownload)
* [FTPDownloadEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpdownloadex)
* [HTTPDownload()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpdownload)
* [HTTPDownloadEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpdownloadex)
* [HTTPDownloadThroughPost()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpdownloadthroughpost)
* [HTTPDownloadDirectly()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpdownloaddirectly)

<!--* [LoadDibFromClipboardAsync()]({{site.info}}api/WebTwain_IO-v16.1.1.html#loaddibfromclipboardasync)-->

### Output

#### Methods

* [ConvertToBase64()]({{site.info}}api/WebTwain_IO-v16.1.1.html#converttobase64)
* [ConvertToBlob()]({{site.info}}api/WebTwain_IO-v16.1.1.html#converttoblob)
* [FTPUpload()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpupload)
* [FTPUploadEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpuploadex)
* [FTPUploadAllAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpuploadallasmultipagetiff)
* [FTPUploadAllAsPDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpuploadallaspdf)
* [FTPUploadAsMultiPagePDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpuploadasmultipagepdf)
* [FTPUploadAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpuploadasmultipagetiff)
* [HTTPUpload()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpupload)
* [HTTPUploadThroughPutEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughputex)
* [HTTPUploadThroughPost()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughpost)
* [HTTPUploadThroughPostEx()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughpostex)
* [HTTPUploadAllThroughPostAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadallthroughpostasmultipagetiff)
* [HTTPUploadAllThroughPostAsPDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadallthroughpostaspdf)
* [HTTPUploadThroughPostAsMultiPagePDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughpostasmultipagepdf)
* [HTTPUploadThroughPostAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughpostasmultipagetiff)
* [HTTPUploadThroughPostDirectly()]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpuploadthroughpostdirectly)
* [SaveAsBMP()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveasbmp)
* [SaveAsJPEG()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveasjpeg)
* [SaveAsPDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveaspdf)
* [SaveAsPNG()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveaspng)
* [SaveAsTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveastiff)
* [SaveSelectedImagesAsMultiPagePDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveselectedimagesasmultipagepdf)
* [SaveSelectedImagesAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveselectedimagesasmultipagetiff)
* [SaveAllAsMultiPageTIFF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveallasmultipagetiff)
* [SaveAllAsPDF()]({{site.info}}api/WebTwain_IO-v16.1.1.html#saveallaspdf)

### Others

#### Methods

* [ClearTiffCustomTag()]({{site.info}}api/WebTwain_IO-v16.1.1.html#cleartiffcustomtag)    
* [SetTiffCustomTag()]({{site.info}}api/WebTwain_IO-v16.1.1.html#settiffcustomtag)
* [ClearAllHTTPFormField()]({{site.info}}api/WebTwain_IO-v16.1.1.html#clearallhttpformfield) 
* [SetHTTPFormField()]({{site.info}}api/WebTwain_IO-v16.1.1.html#sethttpformfield)
* [SetHTTPHeader()]({{site.info}}api/WebTwain_IO-v16.1.1.html#sethttpheader)   
* [SetUploadSegment()]({{site.info}}api/WebTwain_IO-v16.1.1.html#setuploadsegment)
* [ShowFileDialog()]({{site.info}}api/WebTwain_IO-v16.1.1.html#showfiledialog) 
* [Print()]({{site.info}}api/WebTwain_IO-v16.1.1.html#print)

#### Properties

* [FTPPassword]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftppassword)  
* [FTPPort]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpport)
* [FTPUserName]({{site.info}}api/WebTwain_IO-v16.1.1.html#ftpusername)  
* [IfPASVMode]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifpasvmode)
* [HttpFieldNameOfUploadedImage]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpfieldnameofuploadedimage) 
* [HTTPPort]({{site.info}}api/WebTwain_IO-v16.1.1.html#httpport)
* [IfSSL]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifssl)  
* [HTTPPostResponseString]({{site.info}}api/WebTwain_IO-v16.1.1.html#httppostresponsestring)
* [IfShowFileDialog]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifshowfiledialog) 
* [IfShowCancelDialogWhenImageTransfer]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifshowcanceldialogwhenimagetransfer)
* [IfShowProgressBar]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifshowprogressbar)  
* [JPEGQuality]()
* [IfTiffMultiPage]({{site.info}}api/WebTwain_IO-v16.1.1.html#iftiffmultipage)   
* [TIFFCompressionType]({{site.info}}api/WebTwain_IO-v16.1.1.html#tiffcompressiontype)
* [MaxUploadImageSize]({{site.info}}api/WebTwain_IO-v16.1.1.html#maxuploadimagesize)
* [IfAppendImage]({{site.info}}api/WebTwain_IO-v16.1.1.html#ifappendimage)

#### Events

* [OnGetFilePath]({{site.info}}api/WebTwain_IO-v16.1.1.html#ongetfilepath)
* [OnPostLoad]({{site.info}}api/WebTwain_IO-v16.1.1.html#onpostload)
* [OnInternetTransferPercentage]({{site.info}}api/WebTwain_IO-v16.1.1.html#oninternettransferpercentage)

### Util

#### Methods

* [RegisterEvent()]({{site.info}}api/WebTwain_Util-v16.1.1.html#registerevent) 
* [UnregisterEvent()]({{site.info}}api/WebTwain_Util-v16.1.1.html#unregisterevent)
* [SetProductKeyAsync()]({{site.info}}api/WebTwain_Util-v16.1.1.html#setproductkeyasync)
* [SetLanguage()]({{site.info}}api/WebTwain_Util-v16.1.1.html#setlanguage)
* [GenerateURLForUploadData()]({{site.info}}api/WebTwain_Util-v16.1.1.html#generateurlforuploaddata)

#### Properties

* [ErrorCode]({{site.info}}api/WebTwain_Util-v16.1.1.html#errorcode)
* [ErrorString]({{site.info}}api/WebTwain_Util-v16.1.1.html#errorstring)
* [LogLevel]({{site.info}}api/WebTwain_Util-v16.1.1.html#loglevel)
* [Manufacturer]({{site.info}}api/WebTwain_Util-v16.1.1.html#manufacturer)
* [ProductFamily]({{site.info}}api/WebTwain_Util-v16.1.1.html#productfamily)
* [ProductName]({{site.info}}api/WebTwain_Util-v16.1.1.html#productname)
* [VersionInfo]({{site.info}}api/WebTwain_Util-v16.1.1.html#versioninfo)
* [ProductKey]({{site.info}}api/WebTwain_Util-v16.1.1.html#productkey)
* [UseLocalService]({{site.info}}api/WebTwain_Util-v16.1.1.html#uselocalservice)

### Viewer

> For WebTwain instances

#### Methods

* [BindViewer()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#bindviewer)
* [UnbindViewer()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#unbindviewer)
* [UpdateViewer()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#updateviewer)

#### Properties

* [BackgroundColor]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#backgroundcolor) 
* [SelectionImageBorderColor]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#selectionimagebordercolor)
* [FitWindowType]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#fitwindowtype)  
* [IfFitWindow]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#iffitwindow)
* [Height]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#height)  
* [Width]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#width)
* [IfAutoScroll]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#ifautoscroll)    
* [ShowPageNumber]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#showpagenumber)
* [MouseX]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#mousex)  
* [MouseY]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#mousey)
* [ImageMargin]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#imagemargin)  
* [MouseShape]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#mouseshape)
* [SelectionRectAspectRatio]({{site.info}}api/WebTwain_Buffer-v16.1.1.html#selectionrectaspectratio)
* [Zoom]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#zoom)

#### Events

* [OnMouseClick]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#onmouseclick) 
* [OnMouseDoubleClick]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#onmousedoubleclick)
* [OnMouseMove]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#onmousemove)   
* [OnMouseRightClick]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#onmouserightclick)

> For the WebTwain. Viewer interface

#### Methods

* [setViewMode()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#setviewmode) 
* [updateUISettings()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#updateuisettings)
* [setButtonClass()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#setbuttonclass)  
* [setSelectedImageArea()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#setselectedimagearea)
* [zoomIn()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#zoomin) 
* [zoomOut()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#zoomout)
* [bindCustomElement]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#bindcustomelement) 
* [showCustomElement]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#showcustomelement)
* [hideCustomElement]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#hidecustomelement) 
* [toggleCustomElement]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#togglecustomelement)
* [showVideo()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#showvideo)
* [closeVideo()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#closevideo)
* [on()]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#on)

#### Properties

* [bOnlyShowThumbnailsView]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#bonlyshowthumbnailsview)
* [cursorOverThumbnailsView]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#cursoroverthumbnailsview)

#### Events

* [video-closed]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#vidoe-closed)
* [video-error]({{site.info}}api/WebTwain_Viewer-v16.1.1.html#vidoe-error)

## Addon

### BarcodeReader

#### Methods

* [decode()]({{site.info}}api/Addon_BarcodeReader-v16.2.html#decode)
* [getRuntimeSettings()]({{site.info}}api/Addon_BarcodeReader-v16.2.html#getruntimesettings)
* [updateRuntimeSettings()]({{site.info}}api/Addon_BarcodeReader-v16.2.html#updateruntimesettings)
* [resetRuntimeSettings()]({{site.info}}api/Addon_BarcodeReader-v16.2.html#resetruntimesettings)
* [initRuntimeSettingsWithString()]({{site.info}}api/Addon_BarcodeReader-v16.2.html#initruntimesettingswithstring)

### OCR

#### Methods

* [Download()]({{site.info}}api/Addon_OCR-v16.2.html#download)  
* [DownloadLangData()]({{site.info}}api/Addon_OCR-v16.2.html#downloadlangdata)
* [IsModuleInstalled()]({{site.info}}api/Addon_OCR-v16.2.html#ismoduleinstalled)   
* [SetLanguage()]({{site.info}}api/Addon_OCR-v16.2.html#setlanguage)
* [SetOutputFormat()]({{site.info}}api/Addon_OCR-v16.2.html#setoutputformat) 
* [SetPageSetMode()]({{site.info}}api/Addon_OCR-v16.2.html#setpagesetmode)
* [GetIfUseDetectedFont()]({{site.info}}api/Addon_OCR-v16.2.html#getifusedetectedfont)    
* [SetIfUseDetectedFont()]({{site.info}}api/Addon_OCR-v16.2.html#setifusedetectedfont)
* [GetUnicodeFontName()]({{site.info}}api/Addon_OCR-v16.2.html#getunicodefontname) 
* [SetUnicodeFontName()]({{site.info}}api/Addon_OCR-v16.2.html#setunicodefontname)
* [GetMinFontSizeforMoreAccurateResult()]({{site.info}}api/Addon_OCR-v16.2.html#getminfontsizeformoreaccurateresult) 
* [SetMinFontSizeforMoreAccurateResult()]({{site.info}}api/Addon_OCR-v16.2.html#setminfontsizeformoreaccurateresult)
* [Recognize()]({{site.info}}api/Addon_OCR-v16.2.html#recognize)    
* [RecognizeFile()]({{site.info}}api/Addon_OCR-v16.2.html#recognizefile)
* [RecognizeRect()]({{site.info}}api/Addon_OCR-v16.2.html#recognizerect) 
* [RecognizeSelectedImages()]({{site.info}}api/Addon_OCR-v16.2.html#recognizeselectedimages)

### OCRPro

#### Methods

* [Download()]({{site.info}}api/Addon_OCRPro-v16.2.html#download) 
* [IsModuleInstalled()]({{site.info}}api/Addon_OCRPro-v16.2.html#ismoduleinstalled)
* [Recognize()]({{site.info}}api/Addon_OCRPro-v16.2.html#recognize)  
* [RecognizeFile()]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizefile)
* [RecognizeRect()]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizerect) 
* [RecognizeSelectedImages()]({{site.info}}api/Addon_OCRPro-v16.2.html#recognizeselectedimages)

#### Properties

* [Settings]({{site.info}}api/Addon_OCRPro-v16.2.html#settings)

### PDF

#### Methods

* [IsTextBasedPDF()]({{site.info}}api/Addon_PDF-v16.2.html#istextbasedpdf)
* [SetConvertMode()]({{site.info}}api/Addon_PDF-v16.2.html#setconvertmode)
* [SetPassword()]({{site.info}}api/Addon_PDF-v16.2.html#setpassword)
* [SetResolution()]({{site.info}}api/Addon_PDF-v16.2.html#setresolution)
* [Write. Setup()]({{site.info}}api/Addon_PDF-v16.2.html#writesetup)

### Camera

#### Methods

* [getSourceList()]({{site.info}}api/Addon_Camera-v16.1.1.html#getsourcelist) 
* [selectSource()]({{site.info}}api/Addon_Camera-v16.1.1.html#selectsource)
* [getCurrentSource()]({{site.info}}api/Addon_Camera-v16.1.1.html#getcurrentsource)
* [closeSource()]({{site.info}}api/Addon_Camera-v16.1.1.html#closesource)
* [getResolution()]({{site.info}}api/Addon_Camera-v16.1.1.html#getresolution)
* [setResolution()]({{site.info}}api/Addon_Camera-v16.1.1.html#setresolution)
* [getCurrentResolution()]({{site.info}}api/Addon_Camera-v16.1.1.html#getcurrentresolution)
* [play()]({{site.info}}api/Addon_Camera-v16.1.1.html#play)
* [pause()]({{site.info}}api/Addon_Camera-v16.1.1.html#pause)
* [resume()]({{site.info}}api/Addon_Camera-v16.1.1.html#resume)
* [stop()]({{site.info}}api/Addon_Camera-v16.1.1.html#stop)
* [getStatus()]({{site.info}}api/Addon_Camera-v16.1.1.html#getstatus)
* [capture()]({{site.info}}api/Addon_Camera-v16.1.1.html#capture)

### Webcam

#### Methods

* [CaptureImage()]({{site.info}}api/Addon_Webcam-v16.2.html#captureimage) 
* [CloseSource()]({{site.info}}api/Addon_Webcam-v16.2.html#closesource)
* [GetCameraControlPropertySetting()]({{site.info}}api/Addon_Webcam-v16.2.html#getcameracontrolpropertysetting) 
* [GetCameraControlPropertyMoreSetting()]({{site.info}}api/Addon_Webcam-v16.2.html#getcameracontrolpropertymoresetting)
* [GetVideoPropertySetting()]({{site.info}}api/Addon_Webcam-v16.2.html#getvideopropertysetting) 
* [GetVideoPropertyMoreSetting()]({{site.info}}api/Addon_Webcam-v16.2.html#getvideopropertymoresetting)
* [SetCameraControlPropertySetting()]({{site.info}}api/Addon_Webcam-v16.2.html#setcameracontrolpropertysetting)
* [SetVideoPropertySetting()]({{site.info}}api/Addon_Webcam-v16.2.html#setvideopropertysetting)
* [GetFrameRate()]({{site.info}}api/Addon_Webcam-v16.2.html#getframerate) 
* [SetFrameRate()]({{site.info}}api/Addon_Webcam-v16.2.html#setframerate)
* [GetMediaType()]({{site.info}}api/Addon_Webcam-v16.2.html#getmediatype) 
* [SetMediaType()]({{site.info}}api/Addon_Webcam-v16.2.html#setmediatype)
* [GetResolution()]({{site.info}}api/Addon_Webcam-v16.2.html#getresolution) 
* [SetResolution()]({{site.info}}api/Addon_Webcam-v16.2.html#setresolution)
* [GetFramePartURL()]({{site.info}}api/Addon_Webcam-v16.2.html#getframeparturl) 
* [GetFrameURL()]({{site.info}}api/Addon_Webcam-v16.2.html#getframeurl)
* [GetSourceList()]({{site.info}}api/Addon_Webcam-v16.2.html#getsourcelist)  
* [SelectSource()]({{site.info}}api/Addon_Webcam-v16.2.html#selectsource)
* [PauseVideo()]({{site.info}}api/Addon_Webcam-v16.2.html#pausevideo) 
* [PlayVideo()]({{site.info}}api/Addon_Webcam-v16.2.html#playvideo)
* [SetVideoRotateMode()]({{site.info}}api/Addon_Webcam-v16.2.html#setvideorotatemode)    
* [StopVideo()]({{site.info}}api/Addon_Webcam-v16.2.html#stopvideo)

## [Dynamsoft. FileUploader](#dynamsoftfileuploader)

#### Methods

* [Init()]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#init)
* [CreateJob()]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#createjob)
* [Run()]({{site.info}}api/Dynamsoft_FileUploader.html-v16.2#run)
* [Cancel()]({{site.info}}api/Dynamsoft_FileUploader.html-v16.2#cancel)
* [CancelAllUpload()]({{site.info}}api/Dynamsoft_FileUploader-v16.2.html#cancelallupload)
