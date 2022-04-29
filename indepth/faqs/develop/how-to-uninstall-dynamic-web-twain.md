---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to uninstall Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to uninstall Dynamsoft Service
description: How to uninstall Dynamsoft Service
---

# Development

## How to uninstall Dynamsoft Service? 

### On Windows

1. 
* Remove Dynamsoft Service through Control Panel, if you see anything named along the lines of "Dynamsoft " or "Dynamic Web TWAIN ", remove them as well
* Remove the folders `C:\Windows\SysWOW64\Dynamsoft\DynamsoftService` and `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64(version)`

2. 
Run 'Command Prompt' as **administrator**, go to C:\WINDOWS\system32, then execute the following line (Not applicable if you installed Dynamsoft Service through personal installer):

``` shell
wmic product where name="Dynamsoft Service" call uninstall /nointeractive
```

![How-to-uninstall-the-Dynamsoft-Service-without MSI-installer.png]({{site.assets}}imgs/How-to-uninstall-the-Dynamsoft-Service-without MSI-installer.png)

### On macOS

* Run the file `Uninstall.pkg` . The file can be found in `Go > Applications > Dynamsoft > DynamsoftService > {installed version No.}`
* Remove the folder `Go > Applications > Dynamsoft > DynamsoftService > {installed version No.}`

### On Linux

* Run the file `uninstall.sh` . The file can be found in `opt/dynamsoft/DynamsoftService`
* Remove the folder `opt/dynamsoft/DynamsoftService`
