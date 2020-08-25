---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - IntermediateResultArray
keywords: IntermediateResultArray, struct, c, c++
needAutoGenerateSidebar: false
---


# IntermediateResultArray
Stores the intermediate result array.

## Typedefs

```cpp
typedef struct tagIntermediateResultArray  IntermediateResultArray
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultscount) | *int* |
| [`results`](#results) | [`PIntermediateResult`](IntermediateResult.md)*  |


### resultsCount
The total count of intermediate result.
```cpp
int tagIntermediateResultArray::resultsCount
```

### results
The intermediate result array.
```cpp
PIntermediateResult* tagIntermediateResultArray::results
```


