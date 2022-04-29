---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I save selected images instead of all images to my server or database?
keywords: Dynamic Web TWAIN, Document Saving, save selected images
breadcrumbText: How can I save selected images instead of all images to my server or database?
description: How can I save selected images instead of all images to my server or database?
---

# Document Saving

## How can I save selected images instead of all images to my server or database?

The API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Buffer.html?ver=latest#selectedimagesindices" target="_blank">SelectedImagesIndices</a> returns the indices of the selected images.

You can pass those indices as a parameter to <a href="https://dynamsoft.sharepoint.com/sites/TST/Shared Documents/General/Training Program/HTTPUpload" target="_blank">HTTPUpload</a> which uploads files to the server/database.

To upload all images in the buffer with HTTPUpload, you can use the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Buffer.html?ver=latest#selectallimages" target="_blank">SelectAllImages</a> which returns the indices of all images.

There are other HTTP upload APIs that can achieve the same. Please refer to this link: <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#output" target="_blank">Dynamic Web TWAIN API Reference - IO APIs</a>
