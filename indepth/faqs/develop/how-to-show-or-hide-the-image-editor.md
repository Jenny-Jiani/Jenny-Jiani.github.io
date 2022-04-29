---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to show or hide the Image Editor
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: how to show or hide the Image Editor
description: How to show or hide the Image Editor
---

# Development

## how to show or hide the Image Editor

The following code shows how to use the image editor. Read more on [ `createImageEditor()` ]({{site.info}}api/WebTwain_Viewer.html#createimageeditor).

``` javascript
var editorSettings = {
    /*element: document.getElementById("imageEditor"),
    width: 600,
    height: 400,*/
    border: '1px solid rgb(204, 204, 204)',
    topMenuBorder: '',
    innerBorder: '',
    background: "rgb(255, 255, 255)",
    promptToSaveChange: true,
    buttons: {
        titles: {},
        visibility: {}
    },
    dialogText: {
        dlgRotateAnyAngle: ['Angle :', 'Interpolation:', 'Keep size', '  OK  ', 'Cancel'],
        dlgChangeImageSize: ['New Height :', 'New Width :', 'Interpolation method:', '  OK  ', 'Cancel'],
        saveChangedImage: ['You have changed the image, do you want to keep the change(s)?', '  Yes  ', '  No  '],
        selectSource: ['Select Source:', 'Select', 'Cancel', 'There is no source available']
    }
};
var imageEditor = DWObject.Viewer.createImageEditor(editorSettings);
imageEditor.show();
```
