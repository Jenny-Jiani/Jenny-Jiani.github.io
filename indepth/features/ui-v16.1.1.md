---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - UI Elements
keywords: Dynamic Web TWAIN, Documentation, UI
breadcrumbText: UI
description: Dynamic Web TWAIN SDK Documentation UI Page
---

# UI Elements

In this section, we'll explore the UI Elements that are built into the `DWT` library for user interactions.

## Indicators

### Loading bar and backdrop

![UI 2]({{site.assets}}imgs/UI-2.png)

This loading bar and backdrop shows up when creating a `WebTwain` instance or when you try to scan. The functions `Dynamsoft.WebTwainEnv.OnWebTwainPreExecute()` and `Dynamsoft.WebTwainEnv.OnWebTwainPostExecute()` are called before and after the process. You can customize the behavior like this

``` javascript
Dynamsoft.WebTwainEnv.OnWebTwainPreExecute = function() {
    // Show your own progress indicator
    console.log('An operation starts!');
};
Dynamsoft.WebTwainEnv.OnWebTwainPostExecute = function() {
    // Hide the progress indicator
    console.log('An operation ends!');
};
```

On the other hand, you can also call the functions `Dynamsoft.WebTwainEnv.OnWebTwainPreExecute()` and `Dynamsoft.WebTwainEnv.OnWebTwainPostExecute()` to show and hide the loader bar and backdrop when you need it in your own workflow.

If you just want to change the loading bar, you can use the method `Dynamsoft.WebTwainEnv.SetLoaderBar()` .

### Progress bar

When `DWT` performs a time-consuming task, it'll show a progress bar. This progress bar is either like this

![UI-3]({{site.assets}}imgs/UI-3.png)

or like this (with a `Cancel` button)

![UI-4]({{site.assets}}imgs/UI-4.png)

The 1st bar shows up when saving, loading or converting and can be hidden by setting [ `IfShowProgressBar` ]({{site.info}}api/WebTwain_IO.html#ifshowprogressbar) to `false` .

Both bars show up when uploading or downloading and can be hidden by setting  [ `IfShowCancelDialogWhenImageTransfer` ]({{site.info}}api/WebTwain_IO.html#ifshowcanceldialogwhenimagetransfer) to `false` .

For uploading or downloading, you can also build your own progress bar with the help of the built-in event [ `OnInternetTransferPercentage` ]({{site.info}}api/WebTwain_IO.html#oninternettransferpercentage). 

``` javascript
DWObject.RegisterEvent('OnInternetTransferPercentage',
    function(percentage) {
        console.log(percentage);
        // Use the percentage to build your own progress bar
    }
);
```

## Language

### Security Dialog

If you have enabled the security dialogs, you may see the following dialog when you try to scan

![UI-5]({{site.assets}}imgs/UI-5.png)

You can change the language with the method [ `SetLanguage()` ]({{site.info}}api/WebTwain_Util.html#setlanguage). The following sets the language to Spanish

``` javascript
DWObject.SetLanguage(Dynamsoft.EnumDWT_Language.Spanish);
```

![UI-6]({{site.assets}}imgs/UI-6.png)

### Error Messages

`DWT` has many built-in error messages as shown [here]({{site.info}}api/Dynamsoft_Enum.html#error-list). Each `ErrorString` has its own `ErrorCode` . To change the language of the message, you can read the `ErrorCode` and output the error string you have customized. For example

``` javascript
if (DWObject.ErrorCode === -2359) {
    // ErrorString "The index is out of range."
    // To Spanish
    console.log("El índice está fuera de rango.")
}
```
