---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing -  How to set trial license
keywords: trial license, licensing
needAutoGenerateSidebar: false
needGenerateH3Content: false
---

# How to set trial license

To use a trial license, you can follow the steps below:

1. Get a trial license key.

 If you installed [Dynamsoft Barcode Reader 30-day free trial](https://www.dynamsoft.com/CustomerPortal/LoginOrRegister.aspx?status=signup&op=4DD608F3803493E4&product=8BC841D35BACD076), it comes with a 30-day trial license by default.

 For Windows Edition, you can find the license key in the License Manager program at */{INSTALLATION FOLDER}/LicenseManager.exe*.

 **Note**: If the trial license expires or it is missing, you can still get barcode reading results but partial of the result will be masked with "*".** You may log in the customer portal and [request for a trial extension online](http://www.dynamsoft.com/CustomerPortal/Account/GetTrialLicense.aspx?Product=DBR).

2. Update the license key in source code. 

 You can use `initLicense()` or `ProductKeys` to set the license.
 
Code snippet in C:
```c
void *hBarcode = NULL;
hBarcode = DBR_CreateInstance();
DBR_InitLicense(hBarcode, "t0068NQAAAI8+mMcYRNwmijAzExhq******");
DBR_DestroyInstance(hBarcode);
```

Code snippet in C++:
```cpp
CBarcodeReader reader = new CBarcodeReader();
reader.InitLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in C#:
```csharp
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******";
```

Code snippet in VB.NET:
```vb
Dim reader As BarcodeReader = New Dynamsoft.Barcode.BarcodeReader()
reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******"
```

Code snippet in Java:
```java
BarcodeReader mBarcodeReader;
mBarcodeReader = new BarcodeReader("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in PHP:
```php
$br = new BarcodeReader();
$br->initLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in Python:
```python
reader = BarcodeReader()
reader.init_license("t0068NQAAAI8+mMcYRNwmijAzExhq******")
```

Code snippet in JavaScript:
```js
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="t0068NQAAAI8+mMcYRNwmijAzExhq******"></script>
```

3. Save and rebuild your application.