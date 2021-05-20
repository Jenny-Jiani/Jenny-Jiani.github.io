---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - Viewer
keywords: Dynamic Web TWAIN, Documentation, Viewer
breadcrumbText: Viewer
description: Dynamic Web TWAIN SDK Documentation Viewer Page
---

# Viewer

`DWT` has a `Viewer` component to help visualize the data in the buffer. The component also comes with a built-in `Image Editor` UI which makes things easier for customers to implement editing functions.

## Bind the Viewer

As mentioned in [creating the WebTwain instance]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance), a new `WebTwain` instance (or a new `DWT` object) usually comes with a ready-bound viewer which is an instance of the `Viewer` component. Only when you use [ `Dynamsoft.WebTwainEnv.CreateDWTObjectEx()` ]({{site.indepth}}features/initialize.html#dynamsoftwebtwainenvcreatedwtobjectex) for the instantiation will you be able to get a `WebTwain` instance that doesn't come with a viewer. In this case, you can still call the method [ `BindViewer()` ]({{site.info}}api/WebTwain_Viewer.html#bindviewer) to create and bind a `Viewer` instance.

## Customize the Viewer

The viewer is created inside a given `HTMLDivElement` specified by its `id` . If a `WebTwain` instance is created with a built-in viewer, you can specify the initial size of the viewer during the creation. For example, the following configuration specifies a *585px by 513px* viewer to be created in the `HTMLDivElement` with the `id` 'dwtcontrolContainer1'.

``` javascript
Dynamsoft.WebTwainEnv.Containers = [{
    ContainerId: 'dwtcontrolContainer1',
    Width: '585px',
    Height: '513px'
}]
```

If the viewer is bound after the creation of the `WebTwain` instance, the following does the same thing

``` javascript
DWObject.BindViewer('dwtcontrolContainer1', {
    Height: 513,
    Width: 585
});
```

After the initial binding, you can still call the method [ `UpdateViewer()` ]({{site.info}}api/WebTwain_Viewer.html#updateviewer) to customize the viewer. For example, the following changes the size of the viewer and enables dual-viewer mode at the same time

``` javascript
DWObject.UpdateViewer({
    Height: "500px",
    Width: "700px",
    view: {
        // Show the 2nd viewer
        bShow: true,
        // The 2nd viewer takes up 80% of the viewer width
        Width: "80%"
    }
});
```

### Questions

#### Q: How to display the thumbnail viewer?

A: The thumbnail viewer is also built-in, the following code shows the thumbnail viewer on the left which takes 20% of the total width of the viewer, then the 80% on the right is occupied by the "main viewer" which shows the current image.

``` javascript
DWObject.UpdateViewer({
    Height: "500px",
    Width: "700px",
    view: {
        // Show the 2nd viewer
        bShow: true,
        // The 2nd viewer takes up 80% of the viewer width
        Width: "80%"
    }
});
```

## Use the Viewer

You can use the `Viewer` in the following ways

### Navigate through all images

You can use the mouse or arrow keys to navigate through the images in buffer.

### Show one or multiple images in one view

You can change the view mode to show one or multiple images. The API is [ `SetViewMode()` ]({{site.info}}api/WebTwain_Viewer.html#setviewmode).

### Fit one image to the view

The image in the viewer can fit to the width or height of the viewer or both. The APIs are [ `IfFitWindow` ]({{site.info}}api/WebTwain_Viewer.html#iffitwindow) and [ `FitWindowType` ]({{site.info}}api/WebTwain_Viewer.html#fitwindowtype).

### Show the image in its actual size

You can show the image in its actual size by setting [ `Zoom` ]({{site.info}}api/WebTwain_Viewer.html#zoom) to 1. This is only supported when the view mode is set to -1 x -1.

### Zoom in to see more details of an image

To do this, you just set a bigger or smaller value to  [ `Zoom` ]({{site.info}}api/WebTwain_Viewer.html#zoom). This is only supported when the view mode is set to -1 x -1.

### Select an area

You can use the API [ `SetSelectedImageArea()` ]({{site.info}}api/WebTwain_Viewer.html#setselectedimagearea).

## Unbind the Viewer

You can call the method [ `UnbindViewer()` ]({{site.info}}api/WebTwain_Viewer.html#unbindviewer) on a `WebTwain` instance to unbind and destroy its viewer.

## The Image Editor

The Image Editor is a built-in UI that contains the most commonly used editing functions. If you don't want to build your own specific UI, you can give it a try and see if it meets your requirements.

### How to show or hide the Image Editor

The Image Editor can be opened by the API [ `ShowImageEditor()` ]({{site.info}}api/WebTwain_Viewer.html#showimageeditor).

### Questions

#### Q: Is the Image Editor compatible across all platforms?

A: The Image Editor is availabe on all platforms where `DWT` is supported. However, while it is built into the browser page in most cases, it runs as a separate programme if `DWT` ActiveX edition is used.
<!-->

#### Q: Can I change the language of the Editor

#### Q: Can I remove or add buttons on the toolbar of the Editor

#### Q: Can I specify where and how big the Editor is

#### Q: Can I change the colors of the Editor

-->
