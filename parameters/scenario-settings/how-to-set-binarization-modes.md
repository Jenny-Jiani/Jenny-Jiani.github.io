---   
layout: default-layout
description: 本文介绍如何调整二值化参数以得到效果更好的二值图
title: 如何调整二值化参数 
keywords: BinarizationModes, IntermediateResultType.IRT_BINARIZED_IMAGE  
needAutoGenerateSidebar: false
---

# 如何调整二值化参数

DBR需要在二值图上定位码区，效果好的二值图有利于DBR成功定位码区。本文主要介绍如何调整二值化过程中的可配置参数，来获得更好的效果。DBR提供了两种二值化的模式，BM_THRESHOLD和BM_LOCAL_BLOCK，在调整参数的过程中，你可以通过设置中间结果IRT_BINARIZED_IMAGE来输出观察二值图效果。下面我们会详细介绍两种方式。

## BM_THRESHOLD

BM_THRESHOLD使用一个全局的阈值对图像进行二值化处理，如果像素点的灰度值小于该阈值，则在二值图中为黑，反之为白。该模式有2个额外的agument参数可设置
- BinarizationThreshold   
二值化使用的全局阈值。默认情况，算法会根据图像自动计算阈值，也可人为指定为一个具体的阈值。
- ImagePreprocessingModesIndex   
这个参数设置当前二值化参数仅对特定的预处理生效。

## BM_LOCAL_BLOCK

BM_LOCAL_BLOCK不同于BM_THRESHOLD使用统一阈值二值化，而是每一个像素采用的二值化阈值都是依赖其附近的像素值进行计算，因而有良好的自适应性，DBR默认采用该模式进行二值化。该模式有5个额外的agument可设置 
- BlockSizeX   
- BlockSizeY  
- EnableFillBinaryVacancy  
- ImagePreprocessingModesIndex  
- ThreshValueCoefficient  

### BlockSizeX 和 BlockSizeY  

通过这两个参数，用户可以设置二值化阈值计算时参考附近像素的宽度和高度。通常设置为码区 5 ~ 8 倍 ModuleSize 效果最好。

### EnableFillBinaryVacancy

该参数控制是否需要填补镂空。当图片的 ModuleSize 很大，而BlockSize 过小的时候会导致二值化之后的图产生镂空，开启该参数可以防止这种情况的发生。该参数默认开启。比如下面的示例，分别展示了原始图、打开镂空处理、关闭镂空处理几种情况。 

![binarization-modes-enablefillbinaryvacancy-original-image-sample][5]  
原始图片

![binarization-modes-enabled-fillbinaryvacancy-image-sample][6]
![binarization-modes-disabled-fillbinaryvacancy-image-sample][7]  
左边为打开了EnableFillBinaryVacancy的示例图，右边为关闭了EnableFillBinaryVacancy的示例图

### ThreshValueCoefficient  

该参数设置计算二值化阈值时需要额外减去的常数。通常它是正的，但也可能是零或负的。  

### ImagePreprocessingModesIndex

这个参数设置当前二值化参数仅对特定的预处理生效。

## 示例  

下面我们通过实际的例子来说明 BinarizationModes 的用法。

### 光照不均

![uneven-illumination][8]

上图是一个光照不均的例子，整张图图像明暗不均，如果我们使用BM_THRESHOLD，采用一个统一阈值二值化，很难取得良好效果。这种情况更适合采用BM_LOCAL_BLOCK，使用自适应的二值化阈值。下面的两图依次展示了BM_THRESHOLD和BM_LOCAL_BLOCK的效果。

![dm-threshold][9]
![dm-local-block][10]

### 前背景色对比明显，但背景干扰较多

下面我们会展示一张更适用于BM_THRESHOLD的例图。下图中的条码和背景对比非常明显，灰度像素值相差很大，但是背景不平整有很多花纹干扰。

![noise][11]

如果我们采用BM_LOCAL_BLOCK方式，那么背景上的很多纹理也会出现在二值图中，这不是我们希望看到的，如下

![texture-local-block][12]

考虑到条码颜色和背景相差很大，因此采用BM_THRESHOLD更为合适，效果如下

![texture-threshold][13]

### BlockSize调整示例

![binarization-modes-original-image-sample][1]  

这张图 DBR 默认的二值化参数得到的二值图如下： 

![binarization-modes-binarized-image-sample1][2]  

可看出 QR Code 的三个 FinderPattern 的特征被破坏掉了，导致没有定位到 QR 进而解不出来。这里我们更改以下二值化的BlockSizeX和BlockSizeY就能够得到如下的二值图，在这个图中QR的角块特征清晰，可以被成功的定位解码。  

![binarization-modes-binarized-image-sample2][3]  

下面是程序代码

### 通过 RuntimeSettings 设置  
- C++ 代码  

``` c++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("这里填入你的License");

PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
reader->GetRuntimeSettings(runtimeSettings); //提取当前模板参数
runtimeSettings->binarizationModes[0] = BM_LOCAL_BLOCK; //设置二值化模式
runtimeSettings->intermediateResultSavingMode = IRSM_FILESYSTEM; //设置中间结果保存到文件
runtimeSettings->intermediateResultTypes = IRT_BINARIZED_IMAGE; //设置导出二值图作为中间结果

char sError[512];
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //更新模板参数
error = reader->SetModeArgument("BinarizationModes", 0, "BlockSizeX", "10"); //设置横向 block 大小
error = reader->SetModeArgument("BinarizationModes", 0, "BlockSizeY", "10"); //设置纵向 block 大小
error = reader->SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "填入中间结果目录");
reader->DecodeFile("这里填入你的文件路径", "") //解码

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); //获取解码结果
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); //打印解码结果
}

CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```  

### 通过 JSon 模板设置  
- JSon文件：  

``` json
{
    "Version":"3.0",
    "ImageParameterContentArray":[
        {
            "Name":"Test1",
            "FormatSpecificationNameArray":["FP_1"],
            "BinarizationModes":["BM_LOCAL_BLOCK(10, 10)"],
            "IntermediateResultSavingMode":"IRSM_FILESYSTEM(这里填入中间结果目录)",
            "IntermediateResultTypes":["IRT_BINARIZED_IMAGE"]
        }
    ],
    "FormatSpecificationArray":[
        {
            "Name":"FP_1",
            "BarcodeFormatIds":["BF_PDF417","BF_QR_CODE","BF_DATAMATRIX"],
            "MirrorMode":"MM_Both"
        }
    ]
}
```

- C++代码  

``` C++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("这里填入你的License");

char sError[512];
reader->InitRuntimeSettingsWithFile("这里填入你的JSon文件路径", CM_OVERWRITE, sError, 512);
reader->DecodeFile("这里填入你的文件路径", "");

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); //获取解码结果
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); //打印解码结果
}

CBarcodeReader::FreeTextResults(&paryResult);
delete reader;
```

最后输出：

``` md
Text: Dynamsoft's Barcode Reader SDK enables you to efficiently embed barcode reading functionality in your web, desktop or mobile application using just a few lines of code.
```  

如果设置了输出中间结果，那么用户可以在输出结果目录下找到以下的项目：  
![binarization-modes-original-intermediate-results][4]

[1]:assets\how-to-set-binarization-modes\binarization-modes-original-image-sample.png
[2]:assets\how-to-set-binarization-modes\binarization-modes-binarized-image-sample1.png
[3]:assets\how-to-set-binarization-modes\binarization-modes-binarized-image-sample2.png
[4]:assets\how-to-set-binarization-modes\binarization-modes-original-intermediate-results.png
[5]:assets\how-to-set-binarization-modes\binarization-modes-enablefillbinaryvacancy-original-image-sample.png
[6]:assets\how-to-set-binarization-modes\binarization-modes-enabled-fillbinaryvacancy-image-sample.png
[7]:assets\how-to-set-binarization-modes\binarization-modes-disabled-fillbinaryvacancy-image-sample.png
[8]:assets\how-to-set-binarization-modes\uneven-illumination.png
[9]:assets\how-to-set-binarization-modes\dm-threshold.png
[10]:assets\how-to-set-binarization-modes\dm-local-block.png
[11]:assets\how-to-set-binarization-modes\noise.png
[12]:assets\how-to-set-binarization-modes\texture-bm-local-block.png
[13]:assets\how-to-set-binarization-modes\texture-bm-threshold.png