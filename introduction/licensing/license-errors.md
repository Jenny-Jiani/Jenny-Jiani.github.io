---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - License Errors
keywords: license error, licensing
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# License Errors

## Symptoms

When you scan barcodes, you may get barcode results marked with asterisks (*), like this:
 
> 123456789*** {barcode type} barcode license invalid, please contact support@dynamsoft.com to get a valid trial license.

## Solutions

If you are using trial version, it indicates that your license has expired. You can log in the customer portal and [request for a trial extension online](http://www.dynamsoft.com/CustomerPortal/Account/GetTrialLicense.aspx?Product=DBR).

If you are using full version, please check the error code in order to troubleshoot the issue. Below is the code snippet shows how to get the error code:

 Code snippet in C:
 ```c
void* _br = NULL;
int iLicMsg = -1;
_br = DBR_CreateInstance();
// Connect to the Dynamsoft server to verify the license
iLicMsg = DBR_InitLicenseFromServer(_br, "", "licenseKey1;licenseKey2"); 
// If error occurs to the license
if (iLicMsg != DBR_OK) {
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
   return iLicMsg;
} 
 ```

 Code snippet in C++:
 ```cpp
CBarcodeReader* reader = new CBarcodeReader();
int iLicMsg = -1;
// Connect to Dynamsoft server to verify the license. 
iLicMsg = reader->InitLicenseFromServer("", "licenseKey1;licenseKey2");
// If error occurs to the license
if (iLicMsg != DBR_OK) 
{
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, CBarcodeReader::GetErrorString(iLicMsg));
   return iLicMsg;
}
 ```

 Code snippet in C#:
 ```csharp
int iLicMsg = -1;
BarcodeReader _br = new BarcodeReader();
// Connect to Dynamsoft server to verify the license. 
iLicMsg = _br.InitLicenseFromServer("", "licenseKey1;licenseKey2");
if(iLicMsg != 0)
{
   Console.WriteLine("License error Code:", iLicMsg);
   return; 
}
 ```

 Code snippet in Java:
 ```java
 int iLicMsg = -1
try{
    BarcodeReader reader = new BarcodeReader();
    BarcodeReader.initLicenseFromServer("", "licenseKey1;licenseKey2");  
}
catch (BarcodeReaderException e) {
    iLicMsg = e.getErrorCode();
    String pszTemp = String.format(" Error Code %d:", iLicMsg);
    System.out.println(pszTemp);
    pszTemp = " Error Message: " + e.getMessage();
    System.out.println(pszTemp);
}
 ```

 Code snippet in Python:
 ```python
	def InitLicense(license):
	errorCode = dbr.InitLicense(license)
	print("Error Code: ")
	print(errorCode)
 ```

### Error Code

- **Error Code:  -10044**

 **Error Message:** Failed to request the license file

 **Solution:**

 Check your network connection and make sure you have Internet access. If you have a firewall configured on the device, it is very likely that our license server is blocked by your firewall. Please [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) to resolve the issue. 


- **Error Code: -10054**

 **Error Message:** The device number in the license key runs out

 **Solution:** 

 You can [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) to expand the volume of your current runtime license key. Rest assured that your license key remains unchanged during the upgrade process, so no code change is required to your application. 


- **Error Code: -10004**

 **Error Message:** The license has expired

 **Solution:** 

 Your annual runtime license has expired. You can log into the customer portal to renew your runtime license by credit card or PayPal. Alternatively, you can [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) if you prefer other payment methods (wire transfer or check). Rest assured that your license key remains unchanged during the upgrade process, so no code change is required to your application. 


- **Error Code: -10042**

 **Error Message:** The license DLL is missing (for C/C++)

 **Solution:**

 For 8-digit license keys, we use a separate license DLL to verify the License. Please copy `DynamsoftLicClientx64.dll` (or `DynamsoftLicClientx86.dll`) from `[INSTALLATION FOLDER]\Components\C_C++\Redist\x64\` (or `[INSTALLATION FOLDER]\Components\C_C++\Redist\x86`) to the same folder as the barcode reader dll `DynamsoftBarcodeReaderx64.dll` (or `DynamsoftBarcodeReaderx86.dll`).


- **Error Code: -10052**

 **Error Message:** The license content is invalid

 **Solution:** 

 This error happens when you are trying to use InitLicenseFromLicenseContent() API to activate the license. Please refer to [Use a Development License](SetDeveloperLicense.md) section to double check if the license content is correct. 

If this article doesn't help resolve the license issue, please [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) for further assistance.