---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to hide the progress bar
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to hide the progress bar 
description: How to hide the progress bar
---

# Development

## How to hide the progress bar?

When Dynamic Web TWAIN performs a time-consuming task, it'll show a progress bar. This progress bar is either like this

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
