---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I upload a JSON file to my server?
keywords: Dynamic Web TWAIN, Document Saving, upload JSON
breadcrumbText: How can I upload a JSON file to my server?
description: How can I upload a JSON file to my server?
---

# Document Saving

## How can I upload a JSON file to my server?

While you cannot send a JSON file with HTTPUpload, you can send the JSON string with the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#sethttpformfield" target="_blank">SetHTTPFormField</a>.

Dynamic Web TWAIN sends an HTTP POST request to the server when doing an upload. The SetHTTPFormField() method is used to <a href="https://www.dynamsoft.com/web-twain/docs/faq/additional-form-fields.html?ver=latest" target="_blank">add extra fields to the HTTP form</a>. Just like how you can add extra text information to the form, you can also add the JSON string to it.
