---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Deployment - Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Deployment, Dynamsoft Service
breadcrumbText: Dynamsoft Service
description: Dynamic Web TWAIN SDK Documentation Dynamsoft Service Page
---

# Dynamsoft Service

> This article is meant exclusively for the [Service mode]({{site.indepth}}features/initialize.html#service-mode) of `DWT` .

Dynamsoft Service is the core piece of `DWT` when running in [Service mode]({{site.indepth}}features/initialize.html#service-mode). It handles the communication between the hardware (scanner, webcam, etc.) and the browser, manages the image buffer, and coordinates data between different modules. There are two different contexts where installing the SDK applies: a development context or a client/end-user context. For the latter, installing the SDK just entails installing the Dynamsoft Service component since the service installation includes the installation of all the major modules of `DWT` .

## How to install DWT

### For development and test

Refer to [how to get dwt]({{site.about}}resources.html#how-to-get-dwt) to download and install `DWT` , the official installer is recommended in most cases.

### For production

Once `DWT` has been integrated into your application and you have properly deployed your application on the server. Your clients will get prompted to install `DWT` the first time they access your application. For more information on the process, check out [installation of the Dynamsoft Service]({{site.indepth}}features/initialize.html#installation-of-the-dynamsoft-service).

#### Questions

##### Q: Does installation require administrator rights?

**A**: Yes, the installer is a `.msi` file which requires administrator rights. If your organization doesn't allow end users to have admin rights, you can contact [Dynamsoft Support]({{site.about}}getsupport.html) to get a special "Personal Installer" that doesn't require admin rights.

> NOTE
>  
> Once Dynamsoft Service is installed with admin rights, every user on that machine can use it. On the other hand, if it is installed with a "Personal Installer", only that specific user can use it.

##### Q: What if I am installing over a previous version of the software?

**A**: If an old version already exists, it is recommended that the user uninstalls the old version before installing the new one. Read more on [how to uninstall the Dynamsoft Service](#how-to-uninstall-dwt). 

Check out [service mode update]({{site.indepth}}development/upgrade.html#service-mode).

##### Q: Can I install Dynamsoft Service for all my clients?

**A**: Yes. In a controlled environment, `DWT` can be distributed to all clients in one go just like other similar programs. [Group Policy](https://docs.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software) is one such technology.

##### Q: Can I install Dynamsoft Service silently?

**A**: Yes. The following are the commands for this purpose

* Windows

``` shell
msiexec  /i  "/path/to/DynamsoftServiceSetup.msi"   /qn
```

* macOS

``` shell
// Install
sudo installer -pkg /path/to/DynamsoftServiceSetup.pkg -target /Applications
// Stop service
sudo launchctl unload /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
// Start service
launchctl load /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
```

* Linux

``` shell
sudo dpkg -i  /path/to/DynamsoftServiceSetup.deb
```

or

``` shell
sudo rpm -i path/to/DynamsoftServiceSetup.rpm
```

## How to uninstall DWT

### On Windows

* Remove Dynamsoft Service through Control Panel, if you see anything named along the lines of "Dynamsoft " or "Dynamic Web TWAIN ", remove them as well
* Remove the folders `C:\Windows\SysWOW64\Dynamsoft\DynamsoftService` and `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64(version)`

### On macOS

* Run the file `Uninstall.pkg` . The file can be found in `Go > Applications > Dynamsoft > WebTwain > {installed version No.}`
* Remove the folder `Go > Applications > Dynamsoft > WebTwain > {installed version No.}`

### On Linux

* Run the file `uninstall.sh` . The file can be found in `opt/dynamsoft/DynamsoftService`
* Remove the folder `opt/dynamsoft/DynamsoftService`

## Customize the installer

There are some cases where you might not want to use the official installers of Dynamsoft Service.

### Your application has its own installer

Your application may have its own installer which installs other related components and it's best if you can build Dynamsoft Service installer in there as well. In this case, you can feel free to include the official Dynamsoft Service installer (as is) in your overall installer to get it executed during the installation process.

### You want to rebrand the installer

The official Dynamsoft Service installer is digitally signed by Dynamsoft Certificates and it also shows multiple labels belonging to Dynamsoft. To rebrand it, you would need a white-label version of it. This usually involves the [Customization Service]({{site.indepth}}development/Pro-service.html#customization-service). Contact [Dynamsoft Support Team]({{site.about}}getsupport.html) for more information.

## About Dynamsoft Service

The Dynamsoft Service uses `localhost` and the ports **18622, 18625, 18623, and 18626** for connection. The latter two ports are used when there is an SSL encryption, and the earlier two when otherwise. These ports can be configured in the `DSConfiguration.ini` file located in:
`C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64)\DSConfiguration.ini` (Windows)

By default, there are always three Dynamsoft Service processes running. All of them are called "Dynamsoft Service" and use the same file `DynamsoftService.exe` . However, they are initiated with different arguments.

The main process starts without any argument as follows:

``` cmd
C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\DynamsoftService.exe
```

Then there is a monitor process which is meant to monitor the main process and automatically start it in case it crashes. This one starts like this:

``` cmd
C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\DynamsoftService.exe -asmonitor Global\Dynamsoft_1.5.0_352325843_stop_service_event Global\Dynamsoft_1.5.0_352325828_certcheck_event
```

The last always-running process is meant to support the SSL certificate specifically for the Firefox browser:

``` 
"-scan" "\\.\pipe\dynamsoftscan_15.0_70056_60" "0" "Global\ss352604281_61_70056" "0" "C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\dwt_trial_15.0.0.0625.dll"
```

Service mode **needs** to be used if you wish to [use a connected physical scanner]({{site.indepth}}features/input.html#scan-from-a-local-scanner). It is this Dynamsoft Service that handles all communication between the browser client and the scanner driver. As mentioned previously, Service mode is used by default if the user is on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices).

> NOTE:
> * On Windows, the service runs in the "Local System" account
> * On macOS, the service runs in the "current user" account
> * On Linux, the service runs in the "root" account 

### Related files and folders

There are multiple files and folders in the service directory. We'll take the Windows service as an example. The directory is `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_16` and the content is (you may not see all these files on your own machine)

#### For the Service

* `\cache\` : Data cached on the disk. Check out [Disk Caching]({{site.indepth}}features/buffer.html#disk-caching).
* `\cert\` : The certificates used for SSL connection. Check out [How to change the certificates](#q-how-to-change-the-certificates).
* `\dump\` : Dump files in case the service crashes.
* `\log\` : Log files for debugging purposes.
* `\upload\` : Temporary location for image data to be uploaded by the file uploader.
* `DSConfiguration.ini` : Service configuration file. Check out [How to configure the service](#q-how-to-configure-the-service).
* `DWASManager_16000428.dll` : The service manager. The name of the file may vary among different versions.
* `DynamsoftService.exe` : The service.
* `DynamicSocket.dll` : For socket connections.
* `service.ini` : Define service name.
* `user_config.ini` : User configuration file.
* `welcome.htm` : The home page for the service (present when you visit http://127.0.0.1:18625)

#### Components

> NOTE
>  
> These files are named with their version number. Different versions of `DWT` will have different files. The following uses v16.1.1 as an example.

* Core scanning module
  + `dwt_16.1.0.0728.dll`
  + `DSSCN2.exe`
  + `DSSCN2x64.exe`
  + `TWAINDSM.dll`
  + `TWAINDSMx64.dll`
* Barcode Reader Addon
  + `\x64\`
  + `\x86\`
  + `dbr_7.4.0.0428.dll`
  + `dbrx64_7.4.0.0428.dll`
* PDF Addon (the last two files are for the PDF Rasterizer)
  + `DynamicPdfCore_11.0.0.0428.dll`
  + `DynamicPdfCorex64_11.0.0.0428.dll`
  + `DynamicPdfR_11.0.0.0428.dll`
  + `DynamicPdfRx64_11.0.0.0428.dll`
* Webcam Addon
  + `DynamicWebcam_15.0.0.0625.dll`
  + `DynamicWebcamx64_15.0.0.0625.dll`
* OCR Basic
  + `\DynamicOCR\`
  + `DynamicOCR_10.0.0.0618.dll`
  + `DynamicOCRx64_10.0.0.0618.dll`
* OCR Professional
  + `\OCRProResource\`
  + `DynamicOCRPro_1.2.0.0806.dll`
  + `DynamicOCRProx64_1.2.0.0806.dll`
  + `ocrp.lic`
  + `OCRPro.lic`
* File Uploader
  + `UploadModule_1.6.0.0428.dll`
* Imaging features
  + `DynamicImage.dll`
  + `DynamicImagex64.dll`

#### Supporting files

* `favicon.ico` : The favicon.
* `legal.txt` : Legal notice.
* `libcurl.dll` : The file transfer library.
* For OpenSSL
  + `libeay32.dll`
  + `ssleay32.dll`
* `port.lock`

### What does it do

Dynamsoft Service sets up a local HTTP service that accepts requests from JavaScript code running in the browser and performs operations accordingly. The following are a few examples

#### Return availability

* Request

``` 
https://127.0.0.1:18623/fa/VersionInfo?ts=1603161807908
```

* Response in case of success

``` json
{
   "id" : "1",
   "method" : "VersionInfo",
   "result" : [ "16, 1, 0, 0728", "", "64" ],
	"cmdId" : ""
}
```

#### Perform image removal

* Request

``` 
https://127.0.0.1:18623/f/RemoveAllImages?753350643
```

* Response in case of success

``` json
{
   "id" : "414778098",
   "method" : "RemoveAllImages",
   "result" : [ true ],
	"cmdId" : ""
}
```

#### Return an image

* Request

``` 
https://127.0.0.1:18623/dwt/dwt_16100728/img?id=414778098&index=5&width=585&height=513&ticks=1603162807999
```

* Response in case of success

  The image data.

## Questions

### Q: How to change the certificate of the service?

**A**: To replace the default certificate, the steps are

* Generate a certificate for 127.0.0.1
* Install that certificate
* Use that certificate to generate public /private keys (pem)
* Rename these two keys to `server.pem` , (public) `server_key.pem` (private)
* Replace the old keys in `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_16\cert`
* Restart the service

### Q: How to set the configuration of the service?

**A**: Generally, we configure the service in the file `DSConfiguration.ini`

``` javaScript
[DS]
DSVersion = 1, 6, 1, 0728 // Version of the service, readonly
Port_mn_0 = dcp
Port_mp_0 = 18625 // Port of the Service
Port = 2
SSLPort_mn_0 = dcp
SSLPort_mp_0 = 18626 // SSL Port of the Service
SSLPort = 2
Port_mn_1 = dwt
Port_mp_1 = 18622 // Port of the core scanning module
SSLPort_mn_1 = dwt
SSLPort_mp_1 = 18623 // SSL Port of the core scanning module
LogLevel = 1 // Whether to output detailed information for debugging purposes
```

### Q: How to restart the service?

**A**: 

* On Windows, find the service in the "Local Services". Stop and Start it.
* On macOS, find and kill the service in "Activity Monitor" and it'll start itself.
* On Linux, find and kill the service in "System monitor" and it'll start itself.

### Q: Why am I asked to install the service after it is installed?

**A**: There are a few possible causes

* The Dynamsoft Service is not installed properly.
* The Dynamsoft Service is installed correctly but not started.
* The requests sent to the Service are redirected because you are using a proxy server.
* The service's listening ports are blocked by another software, like anti-virus software.
* The service is blocked by plugins you have installed in the browser. (e.g. NoScript)
* If you are accessing an HTTPS site on a Linux machine.

The respective fixes are listed below

* Check the path `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_16` and make sure you have [the correct files](#related-files-and-folders).
* Check `Local Services` and make sure Dynamsoft Service is listed and Running.
* Disable the proxy server to confirm it's the cause. Once confirmed, try to reconfigure the proxy to make sure it doesn't redirect requests sent to '127.0.0.1'
* Check your anti-virus software or any other software that can block local ports and make sure the ports 18622, 18623, 18625 and 18626 are not blocked.
* Disable all the plugins in the browser, refresh and try again.
* On your Linux client machine, visit https://127.0.0.1:18626 and https://127.0.0.1:18623 separately in Chrome and FireFox, manually add both certificates to the exception lists.