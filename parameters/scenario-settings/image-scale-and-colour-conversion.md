---
layout: default-layout
title: 如何设置图像缩放和颜色变换
description: 本文介绍如何设置图像的缩放、彩图灰度化、灰度图颜色反转变换及其使用场景。
keywords: scale, grayscale
needAutoGenerateSidebar: false
---

# 如何设置图像缩放和颜色变换

DBR在正式处理图像前，可以设置图像的缩放、如何灰度化、灰度图颜色反转变换。本文会详细介绍这些功能的配置参数和适用场景。

## 图像缩放

当图像较大时，DBR可能会花费较长时间来处理图像，参数[`ScaleDownThreshold`]({{ site.parameters_reference }}image-parameter/image-process-control.html#scaledownthreshold)用于设定使图像缩小的阈值。如果图像的最短边长比设定的[`ScaleDownThreshold`]({{ site.parameters_reference }}image-parameter/image-process-control.html#scaledownthreshold)要大，DBR算法将会成倍缩小图像至图像短边小于该阈值，默认值为2300。通过设置该参数缩小图像，可以有效提升DBR算法的运行速度，但是过小的图像可能会导致条码模糊失真，影响解码率。因而需要根据实际需要，合理设置该参数。

## 彩图灰度化

如果图像是彩图，DBR会把图像灰度化后进行处理。[`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes)设定灰度化采用的模式，有三个arguments可设置，BlueChannelWeight, GreenChannelWeight，RedChannelWeight分别代表灰度化时，3个颜色通道的权重。权重单位为千分比，默认值为-1，代表使用DBR 默认的权重配置。可以通过中间结果 IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE来观察灰度化后的图像。

下面一个Json的配置模板。在这个示例中，我们配置了4个
[`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes)，它们分别使用 默认模式权重 和 Blue、Red、Green 3个通道进行彩色图像到灰度图的转化处理。DBR算法会依次循环这4个mode，直到码区识别符合要求结束。

```javascript
{
    "ImageParameter": {
        "ColourConversionModes": [
	        //使用默认模式进行灰度化
            {
                "Mode": "CICM_GENERAL"
            }, 
	        //仅使用 Blue 通道进行灰度化
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 1000, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 0
            }, 
	        //仅使用 Red 通道进行灰度化
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 1000, 
                "GreenChannelWeight": 0
            }, 
	        //仅使用 Green 通道进行灰度化
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 1000
            }
        ]
    }, 
    "Version": "3.0"
}
```

下面是一个示例图片，我们将使用上面的示例模板对该图片进行灰度化处理，并通过IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE 来观察灰度化后的图像。

![original image before colour conversion][1]

下面的例图依次展示了默认权重下的灰度图、仅红色通道灰度图、仅蓝色通道灰度图、仅绿色通道灰度图。我们可以看到仅使用红通道灰度化的结果最好，码与背景色对比最为明显，因而对于这种场景，仅Red通道灰度化是最合适的选择。

![default grayscale image][2]![gray image only by red channel][3]

![gray image only by blue channel][4]![gray image only by green channel][5]

## 灰度图颜色反转变换

[`GrayscaleTransformationModes`]({{ site.parameters_reference }}image-parameter/GrayscaleTransformationModes.html#grayscaletransformationmodes)参数用来设定灰度图的颜色反转变换。通常图片的灰度图上的码区是浅色背景上的深色码区，但是有些场景下会出现相反的情况，深色背景上的浅色码区，比如下面的例图。这样的情况我们需要GrayscaleTransformationMode为GTM_INVERTED，将图像反色后即可以正常处理。

![inverted gray image][6]

如果图集中存在不同的颜色模式的图像，也可以设置多个[`GrayscaleTransformationModes`]({{ site.parameters_reference }}image-parameter/GrayscaleTransformationModes.html#grayscaletransformationmodes)。如果配置该参数为
[“GTM_ORIGINAL”,  “GTM_INVERTED”]，DBR会依次尝试两种mode，则无论是浅色背景的深色码区还是深色背景的浅色码区都是可以处理的。但是如果图集中大多数图片都是深色背景浅色码区，那么 GTM_ORIGINAL 的处理就变为了无用的尝试，会拖慢DBR的处理速度。此时只配置一个 [“GTM_INVERTED”] 或者是交换两个mode的顺序 
[“GTM_INVERTED”, “GTM_ORIGINAL”] 应该是更好的选择。因此实际使用中还需根据实际情况选择合适的模式配置。

## 示例程序和模板

下面的程序和模板分别演示了RuntimeSetting和Json两种方式配置[`ScaleDownThreshold`]({{ site.parameters_reference }}image-parameter/image-process-control.html#scaledownthreshold)、[`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes)和[`GrayscaleTransformationModes`]({{ site.parameters_reference }}image-parameter/GrayscaleTransformationModes.html#grayscaletransformationmodes)

```cpp
CBarcodeReader* reader = new CBarcodeReader();       
reader->InitLicense("这里填入license");      
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();       
reader->GetRuntimeSettings(runtimeSettings);                                //取出当前的模板参数        
runtimeSettings->furtherModes.colourConversionModes[0] = CICM_GENERAL;      //设置彩图转化为灰度图首先采用CICM_GENERAL模式  
runtimeSettings->furtherModes.grayscaleTransformationModes[0]= GTM_INVERTED;//设置灰度图转化首先采用GTM_INVERTED模式  
runtimeSettings->scaleDownThreshold = 2000                                  //当图片最短边长大于2000时，图片将被缩小处理  
char sError[512];       
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);                //更新模板参数      
reader->DecodeFile("这里填入文件路径", "");    
TextResultArray* paryResult = NULL;       
reader->GetAllTextResults(&paryResult);    
CBarcodeReader::FreeTextResults(&paryResult);       
delete runtimeSettings;       
delete reader; 
```

```javascript
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"], 
        "DeblurLevel": 9, 
        "ColourConversionModes": [
            {
                "Mode": "CICM_GENERAL",      //设置彩图转化为灰度图首先采用CICM_GENERAL模式
                "BlueChannelWeight": 300,    //设置蓝色通道分量权重为300
                "RedChannelWeight": 300,     //设置红色通道分量权重为300
                "GreenChannelWeight": 400    //设置绿色通道分量权重为400
            }
        ], 
        "GrayscaleTransformationModes": [
            {
                "Mode": "GTM_INVERTED"      //设置灰度图转化首先采用GTM_INVERTED模式
            }
        ], 
        "ScaleDownThreshold ": 2000         //当图片最短边长大于2000时，图片将被缩小处理  

    }, 
    "Version": "3.0"
}
```



[1]: assets/image-scale-and-colour-conversion/colour-conversion-original-image.png

[2]: assets/image-scale-and-colour-conversion/default-gray-img.png

[3]: assets/image-scale-and-colour-conversion/gray-img-only-red.png

[4]: assets/image-scale-and-colour-conversion/gray-img-only-blue.png

[5]: assets/image-scale-and-colour-conversion/gray-img-only-green.png

[6]: assets/image-scale-and-colour-conversion/inverted-gray-img.png




