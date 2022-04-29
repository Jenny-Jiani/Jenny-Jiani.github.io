---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to display the thumbnail viewer
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to display the thumbnail viewer
description: How to display the thumbnail viewer
---

# Development

## How to display the thumbnail viewer

The thumbnails viewer can be customized during the creation before it's shown. Check out * [createThumbnailViewer()]({{site.info}}api/WebTwain_Viewer.html#createthumbnailviewer) for more information.

The below code snippet is for v17.0+

``` javascript
var DWObject = null;
Dynamsoft.DWT.CreateDWTObjectEx({
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
