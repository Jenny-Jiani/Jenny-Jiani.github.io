---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Common Troubleshooting Guidelines
keywords: troubleshooting, check status, runtime, how-to guides
needAutoGenerateSidebar: false
--- 

# How-to Guides - Common Troubleshooting Guidelines

如果使用DBR SDK无法对您的图片正常解码，请参考本篇文章。本文将分为两个部分，第一个部分将介绍如何排查运行中可能的配置错误，第二部分将介绍如何简单的使用DBR的参数提升解码成功的可能性。


## 排查运行中的配置错误

### Error Code的检查

在调用DBR SDK的解码接口时，Error Code可以作为返回值被获取到用于检查程序是否正确执行。您可以通过调用[`GetErrorString`]({{ site.cpp_methods }}status-retrieval.html#geterrorstring)接口获取详细的错误信息。所有的错误信息可以参考文档[ErrorCode]({{ site.error_code }})。    

如何获取错误信息的代码片段：

```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = CBarcodeReader::GetErrorString(errorCode);
delete reader;
```

下面将介绍几个常见的错误信息及相应的处理方式：

1. 图片载入错误   
   图片载入错误包含：`DBRERR_FILE_NOT_FOUND`，`DBRERR_BPP_NOT_SUPPORTED`。   
   出现`DBRERR_FILE_NOT_FOUND`错误信息时，请检查您的图片路径是否正确。出现`DBRERR_BPP_NOT_SUPPORTED`错误信息时，请检查您所输入的文件格式是否被DBR SDK支持。    

   **NOTE**：DBR SDK支持的文件类型有BMP、JPEG、PNG、TIFF、GIF、PDF。
   

2. License相关错误   
   常见的License相关错误包含：`DBRERR_LICENSE_INVALID`，`DBRERR_LICENSE_EXPIRED`。   
   出现`DBRERR_LICENSE_INVALID`错误信息时，请检查您在解码前是否载入了license，或者license string是否输入正确。出现`DBRERR_LICENSE_EXPIRED`错误信息时，说明您的license已经过期，请及时更新license或[联系我们](mailto:support@dynamsoft.com)进行续费。   
   更多的错误信息请参考文档[ErrorCode]({{ site.error_code }})。

3. 模板相关错误    
   常见的模板相关错误包含：`DBRERR_JSON_PARSE_FAILED`，`DBRERR_JSON_KEY_INVALID`，`DBRERR_JSON_VALUE_INVALID`。   
   出现`DBRERR_JSON_PARSE_FAILED`错误信息时，请检查您载入的模板格式是否正确。出现`DBRERR_JSON_KEY_INVALID`错误信息时，请检查模板中设置的参数名称是否正确。出现`DBRERR_JSON_KEY_INVALID`错误信息时，请检查模板中设置的参数值是否在取值范围内。   
   DBR SDK支持的参数及其取值范围等信息请参考文档[Parameter References]({{ site.parameters_reference }})，更多的错误信息请参考文档[ErrorCode]({{ site.error_code }})。    
   

4. 超时退出   
   当`DBRERR_RECOGNITION_TIMEOUT`错误信息时，说明DBR SDK的执行时间超过了Runtime Setting中Timeout的值而强制退出，此时建议您通过JSON模板或RuntimeSetting来提高Timeout的阈值，保证程序能够正常运行结束。具体的设置方式可以参考文档[如何控制DBR提前退出终止]({{ site.scenario_settings }}terminate.html)以及[`Timeout` Reference]({{ site.parameters_reference }}image-parameter/cost-control.html#timeout)。   
   **NOTE**: DBR SDK的Timeout默认值为10000ms。

### 运行模板的检查

当DBR SDK能正确执行却仍无法得到预期的解码结果时，可以通过检查运行时的参数是否符合您的场景需求。运行参数可以通过接口[`OutputSettingsToString`]({{ site.cpp_methods }}parameter-and-runtime-settings-advanced.html#outputsettingstostring)和[`OutputSettingsToFile`]({{ site.cpp_methods }}parameter-and-runtime-settings-advanced.html#outputsettingstofile)来获取。   

如何获取运行时的参数设置的代码片段：
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char content[256];
reader->OutputSettingsToString(content, 256, "currentRuntimeSettings");
reader->OutputSettingsToFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\CurrentRuntimeSettings.json", "currentRuntimeSettings");
delete reader;
```

下面将介绍几个常见的影响解码结果的参数：

1. BarcodeFormatIds、BarcodeFormatIds_2    
   请检查运行参数中BarcodeFormatIds及BarcodeFormatIds_2中是否包含了所有您需要处理的码型。如果有缺少的码型，您可以参考文档[如何设置DBR的要处理码型和期待解码数量]({{ site.scenario_settings }}barcode-format-and-expected-barcode-counts.html)来进行设置。   
   所有的码型枚举可以参考文档[`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat)和[`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)。    

2. ExpectedBarcodesCount    
   当您的图片中存在不止一个需要处理的码，而最终的结果返回不完全时，请检查运行参数中ExpectedBarcodesCount的值是否大于等于您需要处理的码的数量。如果不是，您可以参考文档[如何设置DBR的要处理码型和期待解码数量]({{ site.scenario_settings }}barcode-format-and-expected-barcode-counts.html)来进行设置。   



## 用于提升解码能力的简单的DBR参数设置

如果按上述步骤检查了DBR SDK的运行配置没有错误，但仍然无法得到预期的结果时，接下来的部分将介绍一些简单的参数用于提升解码能力。

1. DeblurLevel   
   DeblurLevel用于指定DBR采样解码阶段尝试等级，取值范围为0~9。DeblurLevel的值越大，算法中尝试解码的方式也会越多，解出码值的可能性越高。您可以将DeblurLevel设置为最大值9来提升解码能力。   
   关于DeblurLevel的详细信息及设置方法您可以参考[`DeblurLevel` Reference]({{ site.parameters_reference }}image-parameter/image-process-control.html#deblurlevel)及[采样解码的尝试等级]({{ site.scenario_settings }}deblur-level.html)。

2. LocalizationModes
  LocalizationModes用于设置定位模式来定位码区，不同模式有其自身的适用场景和特点。通过设置更多的定位模式能够提高定位成功的可能性。    
  关于LocalizationModes的详细信息和设置方法您可以参考[`LocalizationModes` Reference]({{ site.parameters_reference }}image-parameter/LocalizationModes.html#localizationmodes)及[如何使用不同的定位模式来获得最优的码区定位结果]({{ site.scenario_settings }}how-to-set-localization-modes.html)。

3. RegionDefinition
   RegionDefinition用于指定图像中的某一个或多个特定区域。当您的原始图片尺寸比较大，而您所关心的码区位置存在于某一些特定区域，您可以通过指定Region来减小算法中需要处理的区域，从而增加定位成功的效率及可能性。    
   关于RegionDefinition的详细信息及设置方法您可以参考文档[如何手动定义DBR的ROI及其配置]({{ site.scenario_settings }}manually-define-region-of-interest.html)。


如果这些简单的配置也无法很好的满足您的需求，您可以尝试根据自己的场景特点进行定制。请参考[中间结果]({{ site.scenario_settings }}intermediate-result.html)文档，来观察中间结果中的定位结果明确是否定位成功，再参考我们的[预处理]({{ site.scenario_settings }}image-preprocessing.html)和[二值化]({{ site.scenario_settings }}how-to-set-binarization-modes.html)文档，尝试进行调整。    


如果依然存在问题，请[联系我们](mailto:support@dynamsoft.com)解决。

