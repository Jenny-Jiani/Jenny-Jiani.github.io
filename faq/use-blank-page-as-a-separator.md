---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to use a blank page as a separator?
keywords: Dynamic Web TWAIN, document classification, separator
breadcrumbText: How to use a blank page as a separator?
description: How to use a blank page as a separator?
---

# Document Saving

## How to use a blank page as a separator?

### Scenario

You are scanning in multiple documents with a blank page separating them and would like to save each set of documents separately.

### Solution

In order to do this we will scan in all the sheets, then use <a href="{{site.info}}api/WebTwain_Buffer.html#isblankimageexpress" target="_blank">IsBlankImageExpress</a> to detect whether or not it is blank. If the sheet is blank we will then remove it from the buffer and save the previous set of sheets. In order to accomplish this task we are going to use the event OnPostAllTransfers, which fires after all scans are complete in order to check whether or not any pages are blank.

**OnReady:**

```javascript
function Dynamsoft_OnReady() { 
    DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer'); // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer' 
    if (DWObject) { 
        DWObject.RegisterEvent('OnPostAllTransfers', CheckBlankPage); //Register the OnPostAllTransfers event that will be called after all scanning is complete 
    } 
}
```

**CheckBlankPage**

```javascript
function CheckBlankPage() { //Function for checking a blank page, called when OnPostAllTransfers is triggered
    if (DWObject) { //Ensure there is a DWObject
        for (var i = 0; i < DWObject.HowManyImagesInBuffer; i++) { //Go through each image in the buffer.
            if (DWObject.IsBlankImageExpress(i)) {
                DWObject.RemoveImage(i); // remove the blank page from the buffer.
                if (i != 0) {
                    b = [];
                    i--; //decrement i for the removed image
                    var selectedCount = i - startindex + 1;
                    for (var j = 0; j < selectedCount; j++) { //loop to select all images from previous blank to current
                        DWObject.SetSelectedImageIndex(j, j + startindex);
                        b.push(j + startindex);
                    }
                    if (DWObject.selectedCount > 0) { //save images as long as there are some in the selection
                        DWObject.IfShowFileDialog = true;
                        DWObject.SaveSelectedImagesAsMultiPagePDF("a.pdf"); //PLEASE CHANGE THIS FILE PATH
                    }
                    startindex = i + 1; //set the start index for next search 1 higher than current page
                }
            } else if (i == DWObject.HowManyImagesInBuffer - 1) { //the last few images are not blank
                var selectedCount = i - startindex + 1; // set how many images are selected
                for (var j = 0; j < selectedCount; j++) { //loop to select all images from previous blank to current
                    DWObject.SetSelectedImageIndex(j, j + startindex);
                }
                if (selectedCount > 0) { //save images as long as there are some in the selection
                    DWObject.IfShowFileDialog = true;
                    DWObject.SaveSelectedImagesAsMultiPagePDF("a.pdf"); //PLEASE CHANGE THIS FILE PATH
                }
            }
        }
    }
}
```

If your application is having a hard time detecting blank pages(there is some areas around the edge of the blank page with non-blank spots) or you are using coloured pages you may want to use the pages standard deviation instead. You may use the following Snippet instead. 

**Using Page Standard Deviation:**

```javascript
function CheckBlankPage(){ //Function for checking a blank page, called when OnPostAllTransfers is triggered 
    if(DWObject){//Ensure there is a DWObject 
        for(var i = 0; i < DWObject.HowManyImagesInBuffer;i++){//Go through each image in the buffer. 
            if(DWObject.IsBlankImageExpress(i)){}//Make Blank Image run, but do not use the result 
            if(DWObject.BlankImageCurrentStdDev < 15.0){//set a standard deviation for the program to use
                //......
            } 
        } 
    } 
}
```
