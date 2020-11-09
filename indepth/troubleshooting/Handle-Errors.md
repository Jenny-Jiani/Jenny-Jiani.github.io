---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Handle Errors
keywords: Dynamic Web TWAIN, Documentation, Handle Errors
breadcrumbText: Handle Errors
description: Dynamic Web TWAIN SDK Documentation Handle Errors Page
---

# Handling Errors

## License Errors

### Invalid License

* Symptom

You get an error message that says "The current product key does not support xxx..." or "The current product key is invalid because ...".

* Cause

You are trying to use an unlicensed feature of `DWT` or use it on an unlicensed `Platform` or `Browser` .

* Resolution

Make sure you have the correct license set in the proper configuration. If you have doubts or questions, you can contact [Dynamsoft Support]({{site.about}}getsupport.html).

### The current product key does not match the domain

* Symptom

When you visit a `DWT` application , you may be met with this error message.

* Cause

To protect your license, you can bind it to your domain. When you do this, you must make sure your application is deployed to the bound domain, otherwise you will receive the error.

* Resolution

Make sure you deployed the application to the domain bound to your license or add the domain to your license bindings by contacting [Dynamsoft Support]({{site.about}}getsupport.html).

### Your trial license has expired

* Symptom

You see the following pop-up

![ProductKey-Expired]({{site.assets}}imgs/ProductKey-Expired.png)

* Cause

The trial license has expired.

* Resolution

Follow the instructions on that pop-up which are

  + Request a new trial license [here](https://www.dynamsoft.com/customer/license/trialLicense)
  + Refer to [this article]({{site.indepth}}development/upgrade.html#update-the-license-key) to update the ProductKey
  + Do a hard refresh or clear cache in your browser to make sure the new ProductKey is used

### You have exceeded the number of OCR attempts allowed by the current license

* Symptom

When you use the OCRPro addon, you may receive this error message returned by the member method GetErrorString() of the OCRResult class.

* Cause

It is a license issue. The OCRPro licenses are yearly licenses and each license has a limitation on the number of pages allowed to be OCR'ed. The SDK will throw this error when the limitation is reached.

* Solution

The license quota has been used up and extra quota needs to be purchased. Contact [Dynamsoft Support]({{site.about}}getsupport.html) for any assistance.

## Common errors

### General failure

* Symptom

When you try scanning an image with Dynamic Web TWAIN, you may receive the error message "General failure" in the ErrorString property.

* Cause

The problem occurs when the source (scanner) is *not* disabled completely after a scanning session or the source is currently unavailable.

* Resolution

You can set [IfDisableSourceAfterAcquire]({{site.info}}api/WebTwain_Acquire.html#ifdisablesourceafteracquire) to `true` . It must be set before the call to [SelectSource]({{site.info}}api/WebTwain_Acquire.html#selectsource)

``` javascript
function AcquireImage() {
    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.SelectSource();
    DWObject.OpenSource();
    DWObject.AcquireImage();
}
```

### A connection with the server could not be established

* Symptom

When you upload images to your web server, you may receive the error message.

* Cause

The problem may occur when a connection with the server is not available.

* Resolution
  + Check if the HTTP port you set in your code coincides with the port number you set on your web server. You can use the [HTTPPort]({{site.info}}api/WebTwain_IO.html#httpport) property to set the port number.
  + Make sure the address of the server is available. To check this, you can ping the address from a client machine.

> Note:
> Both the machine name and the IP address of the server can be used for the HTTPUpload method.

### HTTP process error

* Symptom

When you upload images using any of the HTTPUploadThroughPost*** methods, you may receive the error.

* Cause
  + The write permission is not granted to the specified directory on the web server.
  + The action page is incorrect or returns something from the web server.
  + The port specified for uploading is the incorrect one.
  + The size of the images you are trying to upload is beyond the maximum allowed size set by the server.

* Solution
  + Make sure the users who are uploading have permission to write images to the specified directory on the web server. (For example, give "Write" permission to the Authenticated Users.)
  + Check the response string returned from the HTTP server to figure out the cause of the process error. You can get this string by using the [HTTPPostResponseString]({{site.info}}api/WebTwain_IO.html#httppostresponsestring) property.
  + Set the port to the correct one using [HTTPPort]({{site.info}}api/WebTwain_IO.html#httpport). We recommend you get the Port and Server values this way:
  
	``` javascript
		var strHTTPServer = location.hostname;
		DWObject.HTTPPort = location.port == "" ? 80 : location.port;
	```
	+ If you have set [IfSSL]({{site.info}}api/WebTwain_IO.html#ifssl) to true, you must set a secure port for the HTTPPort property. For example, 

	``` javascript
	DWObject.IfSSL = true;
	DWObject.HTTPPort = 443;
	```
> For example: If the URL for the scan page is "http://localhost:3253/....", you should set the port to 3253.

* Checking the server-side configuration is also useful in this scenario
	+ Please reset the maximum transferable data size. If you are using `ASP.NET` , you can change the value in the following line in the `Web.Config` file.

		``` xml
		<httpRuntime maxRequestLength="1000000"/> // In kilobytes
		```

		This line may also be required

		``` xml
		<requestLimits maxAllowedContentLength="300000000" /> // In bytes
		```

		The following is an example config file

		``` xml
		<?xml version="1.0" encoding="UTF-8"?>
		<configuration>
		    <system.web>
		        <httpRuntime executionTimeout="3000"  maxRequestLength="102400"/>
		        <compilation debug="true" />
		    </system.web>
		    <system.webServer>
		        <security>
		            <requestFiltering>
		                <requestLimits maxAllowedContentLength="300000000" />
		            </requestFiltering>
		        </security>
		    </system.webServer>
		</configuration>
		```

		If you are using `PHP` , you can change the value in the following line in the `php.ini` file:

		``` shell
		upload_max_filesize = 2M
		```

### HTTP request error

* Symptom

When you upload images via HTTP Put, you may get this error.

* Cause
  + The problem may occur if the write permission is not provided on the server.
  + If you use Tomcat, because the value of the `readonly` property is `false` by default, the HTTP Put operation is not allowed.

* Solution
  + Check the write permission at the server.

    - Start Internet Information Services (IIS).
    - Click Web Sites.
    - Right-click the specified work folder, select Properties.
    - Select the Write option at the Directory tab.

  + If you are using Tomcat, the `doPut()` will check to see if the `readonly` property has been changed to `false`. If it has not, the HTTP Put operation is not allowed. Please go to {Tomcat installation directory} -> conf -> web.xml, find the default servlet configuration (org.apache.catalina.servlets. DefaultServlet) and change the `readonly` property to `true` .

``` xml
<init-param>
    <param-name>readonly</param-name>
    <param-value>false</param-value>
</init-param>
```

### Only 24-bit true color bmp and 8-bit gray-scaled image are supported for JPEG compression

* Symptom

When you save or upload an image as a JPEG file, you may receive the error.

* Cause

You are saving a Black&White image as a JPEG file but JPEG standard only allows the compression of grayscale and RGB images.

* Resolution

Make sure the pixel type of the image in the buffer is Gray or RGB. If it is not, you can either save it in another format or convert the image to grayscale using the method [ConvertToGrayScale()]({{site.info}}api/WebTwain_Edit.html#converttograyscale).

``` javascript
if ( /*If save in JPEG*/ ) {

    //Check whether the current image is B&W
    //1 is B&W, 8 is Gray, 24 is RGB
    if (DWObject.GetImageBitDepth(DWObject.CurrentImageIndexInBuffer) == 1)
        //If so, convert the image to Gray
        DWObject.ConvertToGrayScale(DWObject.CurrentImageIndexInBuffer);
    //Save image in JPEG
    DWObject.SaveAsJPEG("DynamicWebTWAIN.jpg", DWObject.CurrentImageIndexInBuffer);

}
```

### XMLHttpRequest cannot load XXX

* Symptom

	You get the error

	``` shell
	XMLHttpRequest cannot load xxxxx. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://xxxxxxx' is therefore not allowed access.
	```

* Cause

	You are uploading or downloading to/from a web server which is in a different domain than your current website and that web server doesn't allow accessing from a different domain.

* Solution

	Try uploading to the same domain or update the server side configuration to allow cross domain requests. If you are using IIS, you can refer to the following configuration.

	``` xml
	<system.webServer>
	    <httpProtocol>
	            <customHeaders>
	            <add name="Access-Control-Allow-Origin" value="*" />
	            <add name="Access-Control-Allow-Methods" value="OPTIONS, POST, GET, PUT" />
	            <add name="Access-Control-Allow-Headers" value="x-requested-with" />
	            <add name="Access-Control-Allow-Credentials" value="true" />
	        </customHeaders>
	    </httpProtocol>
	</system.webServer>
	```

> Note
>  
> After updating the server configuration file, you'll need to restart the server (i.e. IIS).
>  
> If you are downloading a file, you might need to clear the browser cache because a cached file will not be requested again from the server, thus still no 'Access-Control-Allow-Origin' header will be presented.
>  
> If you are using Windows Authentication, you may need to change the default setting of `withCredentials` in the `dynamsoft.webtwain.initiate.js` file. To do that, open the JS file, find `withCredentials:false` and change it to `withCredentials:true` .

### Source is connected to the maximum supported number of applications

* Symptom

	When you try to acquire images, you may get this error.

* Cause

	The problem may occur when the source is **not** disabled completely after a transfer ends or is used by other applications.

* Resolution
  + Check whether another application is using the source. If yes, close it and try again.
  + Set [IfDisableSourceAfterAcquire]({{site.info}}api/WebTwain_Acquire.html#ifdisablesourceafteracquire) to `true` and use [CloseSource()]({{site.info}}api/WebTwain_Acquire.html#closesource) to make sure that the source is closed after a scanning session.

	``` javascript
	function btnScan_onclick() {
	    DWObject.RegisterEvent("OnPostAllTransfers", function() {
	        DWObject.CloseSource();
	    });
	    DWObject.SelectSource();
	    DWObject.CloseSource(); //close source before open
	    DWObject.OpenSource();
	    DWObject.IfDisableSourceAfterAcquire = true; //close source after acquiring
	    DWObject.AcquireImage();
	}
	```  
	Reboot your device.

### Sequence error

* Symptom

	When you fail to acquire images from your scanner, you may get this error.

* Cause

	The problem happens when the process does not occur in the correct TWAIN sequence.

* Resolution

	Check if you followed the acquisition sequence to get images from your device. For example, some methods and properties, like the [PixelType]({{site.info}}api/WebTwain_Acquire.html#pixeltype) property, can only be used after calling the [OpenSource()]({{site.info}}api/WebTwain_Acquire.html#opensource) method. Please check the TWAIN State Transition Diagram below for more information

![TWAIN State Transition]({{site.assets}}imgs/TWAIN-State-Transition.png)

### Request header field dwt-md5 is not allowed by Access-Control-Allow-Headers in preflight response

* Symptom

	When you fail to upload images, you may get this error

* Cause

	`dwt-md5` is a default built-in header in `DWT` . It is used for each uploading process to test the integrity of data. Since this is not a standard header, the browser will send an OPTIONS preflight request before the original request is sent to verify that this header is allowed. If not, the browser will return the above error.

* Solution

	Update your server-side configuration file as per your environment. If you are using IIS, you can refer to the following configuration.

	``` xml
	<system.webServer>
	    <httpProtocol>
	        <customHeaders>
	            <add name="Access-Control-Allow-Origin" value="*" />
	            <add name="Access-Control-Allow-Methods" value="OPTIONS, POST, GET, PUT" />
	            <add name="Access-Control-Allow-Headers" value="x-requested-with, dwt-md5" />
	            <add name="Access-Control-Allow-Credentials" value="true" />
	        </customHeaders>
	    </httpProtocol>
	</system.webServer>
	```

> Note
>  
> After updating the server configuration file, you'll need to restart the server (i.e. IIS).

Check out more info [here](https://fetch.spec.whatwg.org/#http-cors-protocol)
