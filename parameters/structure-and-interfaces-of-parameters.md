---   
description: Introduce the parameter definitions, organization structure, usage rules and related interfaces involved in Dynamsoft Barcode Reader.
title: Dynamsoft Barcode Reader Parameters - Structure and Interfaces of Parameters
keywords: Parameter,Interface,Hierarchy
layout: default-layout
needAutoGenerateSidebar: false
---


# Hierarchy and work domain of parameters 
This article mainly introduces the parameter definitions, organization structure, usage rules and related interfaces involved in Dynamsoft Barcode Reader.

## Definitions
Dynamsoft Barcode Reader uses template as the unit for parameter settingsets parameters. A template contains three types of data : ImageParameter, RegionDefinition, and FormatSpecification.
- ImageParameter is used to specify the settings for decoding operations on the entire image. The value of the ImageParameter.Name field is the unique identifier of the ImageParameter.
- RegionDefinition is used to specify a decoding region. It is also used to specify the settings for decoding operations in this area. The value of the RegionDefinition.Name field is the unique identifier of RegionDefinition.
- FormatSpecification is used to specify a barcode format. It is also used to specify the settings for decoding operations of this barcode format. The value of the FormatSpecification.Name field is the unique identifier of FormatSpecification.

## Organizational relationship
- There is only one ImageParameter in a template definition. The ImageParameter.Name field is used as the unique identifier of the template;
- One or more RegionDefinition can be referenced through RegionDefinitionNameArray in ImageParameter;
- One or more FormatSpecification can be referenced through FormatSpecificationNameArray in ImageParameter;
- One or more FormatSpecification can be referenced through FormatSpecificationNameArray in RegionDefinition;
- In a JSON template file/string, you can use ImageParamet erContentArray/RegionDefinitionArray/FormatSpecificationArray field to define multiple ImageParameter/RegionDefinition/FormatSpecification, such as:

```JSON
{
    "ImageParameterContentArray": [
      {
        "Name": "ImageParameter1", 
        "BarcodeFormatIds": "BF_ONED"
      },
      {
        "Name": "ImageParameter2", 
        "BarcodeFormatIds": ["BF_ALL"]
      }
    ]
}
```

## Scope
- When the same parameter is set in both ImageParameter and RegionDefinition, the decoding operation in the region specified by RegionDefinition will use the parameter value under RegionDefinition, otherwise, the parameter values under the ImageParameter will be used.

- When the same parameter is set in both ImageParameter and FormatSpecification, the decoding operation for the barcode format specified by FormatSpecification will use the parameter value under FormatSpecification, otherwise, the parameter values under the ImageParameter will be used.

- When the same parameter is set in both RegionDefinition and FormatSpecification, the decoding operation for the barcode format specified by FormatSpecification in the region specified by RegionDefinition will use the parameter value under FormatSpecification, otherwise, the parameter values under the ImageParameter will be used.


## Parameter list
The parameters of ImageParameter are:
- ImageParameter.AccompanyingTextRecognitionModes
- ImageParameter.BarcodeColourModes
- ImageParameter.BarcodeComplementModes
- ImageParameter.BarcodeFormatIds
- ImageParameter.BarcodeFormatIds_2
- ImageParameter.BinarizationModes
- ImageParameter.ColourClusteringModes
- ImageParameter.ColourConversionModes
- ImageParameter.DeblurLevel
- ImageParameter.DeformationResistingModes
- ImageParameter.Description
- ImageParameter.DPMCodeReadingModes
- ImageParameter.ExpectedBarcodesCount
- ImageParameter.FormatSpecificationNameArray
- ImageParameter.GrayscaleTransformationModes
- ImageParameter.ImagePreprocessingModes
- ImageParameter.IntermediateResultSavingMode
- ImageParameter.IntermediateResultTypes
- ImageParameter.LocalizationModes
- ImageParameter.MaxAlgorithmThreadCount
- ImageParameter.Name
- ImageParameter.Pages
- ImageParameter.PDFRasterDPI
- ImageParameter.PDFReadingMode
- ImageParameter.RegionDefinitionNameArray
- ImageParameter.RegionPredetectionModes
- ImageParameter.ResultCoordinateType
- ImageParameter.ReturnBarcodeZoneClarity
- ImageParameter.ScaleDownThreshold
- ImageParameter.ScaleUpModes
- ImageParameter.TerminatePhase
- ImageParameter.TextAssistedCorrectionMode
- ImageParameter.TextFilterModes
- ImageParameter.TextResultOrderModes
- ImageParameter.TextureDetectionModes
- ImageParameter.Timeout

The parameters of RegionDefinition are:
- RegionDefinition.BarcodeFormatIds
- RegionDefinition.BarcodeFormatIds_2
- RegionDefinition.Bottom
- RegionDefinition.ExpectedBarcodesCount
- RegionDefinition.FormatSpecificationNameArray
- RegionDefinition.Left
- RegionDefinition.MeasuredByPercentage
- RegionDefinition.Name
- RegionDefinition.Right
- RegionDefinition.Top

The parameters of FormatSpecification are:
- FormatSpecification.AccompanyingTextRecognitionModes
- FormatSpecification.AllModuleDeviation
- FormatSpecification.AustralianPostEncodingTable 
- FormatSpecification.BarcodeAngleRangeArray
- FormatSpecification.BarcodeBytesLengthRangeArray
- FormatSpecification.BarcodeBytesRegExPattern
- FormatSpecification.BarcodeComplementModes
- FormatSpecification.BarcodeFormatIds
- FormatSpecification.BarcodeFormatIds_2
- FormatSpecification.BarcodeHeightRangeArray
- FormatSpecification.BarcodeTextLengthRangeArray
- FormatSpecification.BarcodeTextRegExPattern
- FormatSpecification.BarcodeWidthRangeArray
- FormatSpecification.Code128Subset
- FormatSpecification.DeblurLevel
- FormatSpecification.DeformationResistingModes
- FormatSpecification.FindUnevenModuleBarcode
- FormatSpecification.HeadModuleRatio
- FormatSpecification.MinQuietZoneWidth
- FormatSpecification.MinResultConfidence
- FormatSpecification.MirrorMode
- FormatSpecification.ModuleSizeRangeArray
- FormatSpecification.Name
- FormatSpecification.RequireStartStopChars
- FormatSpecification.ReturnPartialBarcodeValue
- FormatSpecification.StandardFormat
- FormatSpecification.TailModuleRatio

## Parameter template files assignment rules 
When setting parameters through a JSON template, Dynamsoft Barcode Reader will process the template according to the following rules:
- Parameters not defined in ImageParameter/RegionDefinition/FormatSpecification will be filled with default values
- Parameters not defined in ImageParameter/RegionDefinition/FormatSpecification will be filled with default values
- FormatSpecification will be automatically split into multiple settings for a single barcode format, such as:

```JSON
Template you set
{
    "ImageParameter":{
        "Name": "ImageParameter1", 
        "BarcodeFormatIds": "BF_ONED",    
        "FormatSpecificationNameArray": [
          "FormatSpecification1"
        ]
    }, 
    "FormatSpecification": {
      "Name": "FormatSpecification1", 
      "BarcodeFormatIds": ["BF_CODE_39","BF_CODE_128"],
      "MinResultConfidence": 20
    }
}
```


```JSON
Effective template
{
    "ImageParameter":{
        "Name": "ImageParameter1", 
        "BarcodeFormatIds": "BF_ONED",    
        "FormatSpecificationNameArray": [
          "FormatSpecification1_BF_CODE_39",
          "FormatSpecification1_BF_CODE_128"
        ]
    },
    "FormatSpecificationArray":[
      {
        "Name": "FormatSpecification1_BF_CODE_39", 
        "BarcodeFormatIds": ["BF_CODE_39"],
        "MinResultConfidence": 20
      },
      {
        "Name": "FormatSpecification1_BF_CODE_128", 
        "BarcodeFormatIds": ["BF_CODE_128"],
        "MinResultConfidence": 20
      }
    ] 
}
```

- When the two templates are merged, if there are duplicate parameter settings in the defined ImageParameter, it will be handled as follows:

  - The following parameters take the maximum of the two settings
    - DeblurLevel
    - ExceptedBarcodeCount 
    - MaxAlgorithmThreadCount
    - PDFRasterDPI
    - ScaleDownThreshold
    - Timeout  
  - The following parameters take the combined values of two settings
    - BarcodeFormatIds
    - BarcodeFormatIds_2 
    - IntermediateResultTypes
    - Pages
  - The following parameters are controlled by the ConflictMode. If ConflictMode is IGNORE, the first value is taken, and if ConflictMode is OVERWRITE, the last value is taken
    - AccompanyingTextReadingModes
    - BarcodeColourModes
    - BarcodeComplementModes
    - BinarizationModes
    - ColourClusteringModes
    - ColourConversionModes
   	- DeformationResistingModes
    - DPMCodeReadingModes
    - GrayscaleTransformationModes
    - ImagePreprogressingModes
   	- IntermediateResultSavingMode
    - LocalizationModes
    - PDFReadingMode
    - RegionPredetectionModes
    - ResultCoordinateType
    - ReturnBarcodeZoneClarity
    - ScaleUpModes
    - TerminatePhase
    - TextAssistedCorrectionMode
    - TextFilterModes
    - TextResultOrderModes
    - TextureDectectionModes
    - RegionDefinitionNameArray: Take the last RegionDefinitionName in the last RegionDefinitionNameArray
    - FormatSpecificationNameArray: Take the combined value of the two settings, but if the FormatSpecification is set for the same barcode format, FormatSpecificationNameArray will only keep the name of the last FormatSpecification

## Modes, Mode, Arguments 
The entire decoding process of Dynamsoft Barcode Reader consists of many subdivided functions, among which the control parameters of some function blocks are designed in accordance to the format of Modes-Mode-Argument. That is, a function is controlled by a Mode parameter. There are many ways to implement this function, each method(Mode) has multiple unique settings, and each setting is Argument. 
For example, one of the functions in the decoding process is barcode localization. Dynamsoft Barcode Reader provides the LocalizationModes parameter to control this function. It provides LM_CONNECTED_BLOCKS, LM_STATISTICS, LM_LINES, LM_SCAN_DIRECTLY, LM_STATISTICS_MARKS, LM_STATISTICS_POSTAL_CODE, a total of 6 methods to implement barcode localization. For LM_SCAN_DIRECT_SCAN_DIRECT, there are two Arguments, ScanStride and ScanDirection.

## Interfaces to change settings 
Dynamsoft Barcode Reader provides two ways to set parameters: PublicRuntimeSettings and Json template files. 
PublicRuntimeSettings is used to modify the Dynamsoft Barcode Reader built-in template, and only supports commonly used parameters. The following are the steps to update Dynamsoft Barcode Reader parameters through PublicRuntimeSettings:
- (optional) Restore the parameter settings of the Dynamsoft Barcode Reader built-in template to the default values through the ResetRuntimeSettings interface
- Call the GetRuntimeSettings interface to get the current PublicRuntimeSettings of the Dynamsoft Barcode Reader object
- Modify the content in PublicRuntimeSettings in the previous step
- 	Call the UpdateRuntimeSettings interface to apply the modified PublicRuntimeSettings in the previous step to the Dynamsoft Barcode Reader object
- (optional) Call the SetModeArgument interface to set the optional argument for a specified mode in Modes parameters.


JSON templates can add custom templates and supports complete Dynamsoft Barcode Reader parameters. The related parameter setting interfaces are:
- InitRuntimeSettingsWithFile：After calling this interface, the template definition in the file will be processed according to the merging rules stated in the "Multiple parameter template files" section. Each independent template is stored in the Dynamsoft Barcode Reader object, and all templates are merged into one template, and then the built-in template of Dynamsoft Barcode Reader is replaced;
- InitRuntimeSettingsWithString：The effect after calling this interface is the same as InitRuntimeSettingsWithFile, the only difference is that the template definition of InitRuntimeSettingsWithString is saved in a string;
- AppendTplFileToRuntimeSettings：After calling this interface, the template definition in the file will be processed according to the merging rules stated in the "Multiple parameter template files" section . Each independent template is stored in the Dynamsoft Barcode Reader object, and merges all templates and Dynamsoft Barcode Reader's built-in template into one template and replaces the built-in template of Dynamsoft Barcode Reader;
- AppendTplStringToRuntimeSettings：The effect after calling this interface is the same as AppendTplFileToRuntimeSettings, the only difference is that the template definition of AppendTplStringToRuntimeSettings is saved in a string.
