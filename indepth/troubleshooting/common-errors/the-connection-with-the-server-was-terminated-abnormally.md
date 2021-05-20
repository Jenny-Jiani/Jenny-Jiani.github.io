---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Troubleshooting The Connection With The Server Was Terminated Abnormally
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting, Common Errors, Connection, Terminated Abnormally
breadcrumbText: The Connection With The Server Was Terminated Abnormally
description: Dynamic Web TWAIN SDK Documentation Troubleshooting Common Errors The Connection With The Server Was Terminated Abnormally Page
---

# Common Errors

## The connection with the server was terminated abnormally

<strong>Symptom: </strong>

When you upload images in Dynamic Web TWAIN's buffer, you may receive the following error message returned by the ErrorString property:

![terminated-abnormally]({{site.assets}}imgs/terminated-abnormally.png)

<strong>Cause: </strong>

1. The problem may occur when a connection with the server is not available.
2. The size of images you are going to upload goes beyond the maximum transferable data size which is defined by the server.

<strong>Solution: </strong>

1. Please make sure the address of the server is available. To check this, you can ping the address from a client machine.
Note: Both the machine name and the IP address of the server can be used for the HTTP Upload method.

2. Please make sure you specify the correct port. The default port is 80. If you are using other port, please use HTTPPort to specify it in code.
We recommend you get the Port and Server value this way:

``` javascript
strHTTPServer = location.hostname;
WebTWAIN.HTTPPort = location.port==""?80:location.port;
```

3. Please reset the maximum transferable data size:

<li>
If you are using ASP.NET, you can change the value at the following line in the Web.Config file.

``` javascript
<httpRuntime maxRequestLength="1000000"/>;//You can change the value by yourself.
```
</li>

<li>
If you are using PHP, you can change the value at the following line in the php.ini file

``` javascript
upload_max_filesize = 2M //You can change the value by yourself.
```
</li>
<li>
If you are using ASP

Scenario #1: using ASP on IIS 6:

1. Start -> Run, type cmd.
2. Go to C:\Inetpub\AdminScripts by typing: cd C:\Inetpub\AdminScripts
3. To view max request entity allowed: cscript adsutil.vbs set w3svc/AspMaxRequestEntityAllowed

Scenario #2: using ASP on IIS 7:

1. Start -> Run , type InetMgr to open IIS 7 Manager
2. {Your WebSite} -> Feature View -> ASP -> Limites Properties
3. Set a bigger value for Maximum Requesting Entity Body Limit, like "1000000"
</li>
