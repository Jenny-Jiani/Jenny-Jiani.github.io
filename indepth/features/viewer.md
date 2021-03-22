---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - Viewer
keywords: Dynamic Web TWAIN, Documentation, Viewer
breadcrumbText: Viewer
description: Dynamic Web TWAIN SDK Documentation Viewer Page
---

# Viewer

`DWT` has a `Viewer` component to help visualize the data in the buffer. By default, it is created with basic settings for each `WebTwain` instance, however, it can be customized to fit different usage scenarios.

## Bind the Viewer

As mentioned in [creating the WebTwain instance]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance), a new `WebTwain` instance (or a new `DWT` object) usually comes with a ready-bound viewer which is an instance of the `Viewer` component. This viewer uses the default settings and normally is enough to handle the data visualization.

However, if you want to customize the viewer, you can use [ `Dynamsoft.WebTwainEnv.CreateDWTObjectEx()` ]({{site.indepth}}features/initialize.html#dynamsoftwebtwainenvcreatedwtobjectex) to create a `WebTwain` instance that doesn't come with a viewer and then bind and customize the viewer before showing it with the APIs [ `bind()` ]({{site.info}}api/WebTwain_Viewer.html#bind) and [ `show()` ]({{site.info}}api/WebTwain_Viewer.html#show). For example, the following code shows a viewer with thumbnails

``` javascript
var DWObject = null;
Dynamsoft.WebTwainEnv.CreateDWTObjectEx({
        WebTwainId: 'dwtcontrol'
    },
    function(obj) {
        DWObject = obj;
        DWObject.Viewer.bind(document.getElementById('dwtcontrolContainer'));
        DWObject.Viewer.height = 600;
        DWObject.Viewer.width = 800;
        var thumbnailViewer = DWObject.Viewer.createThumbnailViewer();
        thumbnailViewer.show();
        DWObject.Viewer.show();
    },
    function(err) {
        console.log(err);
    }
);
```

## Customize the Viewer

The viewer is created inside a given `HTMLDivElement` specified by its `id` . If a `WebTwain` instance is created with a built-in viewer, you can specify the initial size of the viewer during the creation. For example, the following configuration specifies a *585px by 513px* viewer to be created in the `HTMLDivElement` with the `id` "dwtcontrolContainer1".

``` javascript
Dynamsoft.WebTwainEnv.Containers = [{
    ContainerId: 'dwtcontrolContainer1',
    Width: '585px',
    Height: '513px'
}]
```

If the viewer is bound after the creation of the `WebTwain` instance, the following does the same thing

``` javascript
DWObject.Viewer.bind(document.getElementById('dwtcontrolContainer'));
DWObject.Viewer.height = 600;
DWObject.Viewer.width = 800;
DWObject.Viewer.show();
```

### Questions

#### Q: How to display the thumbnail viewer?

A: The thumbnails viewer can be customized during the creation before it's shown. Check out * [createThumbnailViewer()]({{site.info}}api/WebTwain_Viewer.html#createthumbnailviewer) for more information.

``` javascript
var DWObject = null;
Dynamsoft.WebTwainEnv.CreateDWTObjectEx({
        WebTwainId: 'dwtcontrol'
    },
    function(obj) {
        DWObject = obj;
        DWObject.Viewer.bind(document.getElementById('dwtcontrolContainer'));
        DWObject.Viewer.height = 600;
        DWObject.Viewer.width = 800;
        var thumbnailViewer = DWObject.Viewer.createThumbnailViewer({
            location: 'left',
            size: '20%',
            columns: 1,
            rows: 4,
            scrollDirection: 'vertical'
        });
        thumbnailViewer.show();
        DWObject.Viewer.show();
    },
    function(err) {
        console.log(err);
    }
);
```

## Use the Viewer

You can use the `Viewer` in the following ways

### Navigate through all images

You can use the mouse, the arrow keys or the APIs [ `first()` ]({{site.info}}api/WebTwain_Viewer.html#first), [ `next()` ]({{site.info}}api/WebTwain_Viewer.html#next), [ `previous()` ]({{site.info}}api/WebTwain_Viewer.html#previous), [ `last()` ]({{site.info}}api/WebTwain_Viewer.html#last) and [ `gotoPage()` ]({{site.info}}api/WebTwain_Viewer.html#gotopage) to navigate through the images in buffer.

### Show one or multiple images in one view

You can change the view mode to show one or multiple images. The API is [ `setViewMode()` ]({{site.info}}api/WebTwain_Viewer.html#setviewmode).

### Fit one image to the view

The image in the viewer can fit to the width or height of the viewer or both. The API is [ `fitWindow()` ]({{site.info}}api/WebTwain_Viewer.html#fitwindow).

### Show the image in its actual size

You can show the image in its actual size by setting [ `zoom` ]({{site.info}}api/WebTwain_Viewer.html#zoom) to 1. This is only supported when the view mode is set to -1 x -1.

### Zoom in to see more details of an image

To do this, you just set a bigger or smaller value to  [ `zoom` ]({{site.info}}api/WebTwain_Viewer.html#zoom). This is only supported when the view mode is set to -1 x -1.

### Select an area

You can use the API [ `setSelectedAreas()` ]({{site.info}}api/WebTwain_Viewer.html#setselectedAreas).

## Unbind the Viewer

You can call the method [ `unbind()` ]({{site.info}}api/WebTwain_Viewer.html#unbind) on a `WebTwain` instance to unbind and destroy its viewer.

## The Image Editor

The Image Editor is a built-in UI that contains the most commonly used editing functions. If you don't want to build your own specific UI, you can give it a try and see if it meets your requirements.

### How to show or hide the Image Editor

The following code shows how to use the image editor. Read more on [ `createImageEditor()` ]({{site.info}}api/WebTwain_Viewer.html#createimageeditor).

``` javascript
var editorSettings = {
    /*element: document.getElementById("imageEditor"),
    width: 600,
    height: 400,*/
    border: '1px solid rgb(204, 204, 204);',
    topMenuBorder: '',
    innerBorder: '',
    background: "rgb(255, 255, 255)",
    promptToSaveChange: true,
    buttons: {
        titles: {},
        visibility: {}
    },
    dialogText: {}
};
var imageEditor = DWObject.Viewer.createImageEditor(editorSettings);
imageEditor.show();
```

### Questions

#### Q: Is the Image Editor compatible across all platforms?

A: Yes, the Image Editor is availabe on all platforms where `DWT` is supported. However, while it is built into the browser page in most cases, it is invoked by a different API and runs as a separate programme if `DWT` ActiveX edition is used. Contact [Dynamsoft Support]({{site.about}}getsupport.html) to learn more.

#### Q: Can I change the language of the Editor?

A: Yes, as shown in the sample code above, you can use the parameters `titles` and `dialogText` to specify the language used in the editor

#### Q: Can I remove or add buttons on the toolbar of the Editor?

A: While you can use `visibility` (as shown in the sample code above) to remove a default button(s), currently you cannot add a custom button yet.

#### Q: Can I specify where and how big the Editor is?

A: Yes, as shown in the sample code above, you can use the parameter `element` to specify where the editor is created and then use `width` and `height` to specify its size.

#### Q: Can I change the colors of the Editor?

A: Yes, as shown in the sample code above, the parameters `border` , `topMenuBorder` , `innerBorder` and
`background` can be used to specify the style including color of the editor.
