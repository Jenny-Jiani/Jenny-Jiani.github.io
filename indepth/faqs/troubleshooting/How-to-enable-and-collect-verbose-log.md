---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to enable and collect verbose log
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting
breadcrumbText: How to enable and collect verbose log
description: How to enable and collect verbose log
---

# Troubleshooting

## How to enable and collect verbose log

Here is how

- Remove any old log files from

  * Windows `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17\log` or `C:\Users\{UserName}\AppData\Roaming\Dynamsoft\DynamsoftService\log`
  * macOS, `Go > Applications > Dynamsoft > DynamsoftServicex64_17 > {installed version No.} > log`
  * Linux, `/opt/dynamsoft/DynamsoftServicex64_17/log`

- Set [ `LogLevel` ]({{site.info}}api/WebTwain_Util.html#loglevel) to 1 in your code. This property should be set as soon as the `WebTwain` instance is created. For example, in the event `Dynamsoft_OnReady`

```javascript
function Dynamsoft_OnReady() {
  DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
  DWObject.LogLevel = 1;
}
```

> NOTE
>
> Changing the property will affect all clients. To collect logs for only one client machine, just add the line `LogLevel=14` to `DSConfiguration.ini` on that specific machine. 

- Reproduce the issue

- Zip the log files and share with [Dynamsoft Support Team]({{site.about}}getsupport.html) via email.

  * On Windows, the log files are in `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17\log` or `C:\Users\{UserName}\AppData\Roaming\Dynamsoft\DynamsoftService\log` 
  * On macOS, the log files are in `Go > Applications > Dynamsoft > DynamsoftServicex64_17 > {installed version No.} > log`
  * On Linux, the log files are in `/opt/dynamsoft/DynamsoftServicex64_17/log` 
