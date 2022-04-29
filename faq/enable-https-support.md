---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I enable HTTPS support?
keywords: Dynamic Web TWAIN, Document Saving, enable HTTPS support
breadcrumbText: How can I enable HTTPS support?
description: How can I enable HTTPS support?
---

# Document Saving

## How can I enable HTTPS support?

Dynamic Web TWAIN provides SSL support.

To enable HTTPS,

- Set <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#ifssl" target="_blank">IfSSL</a> to true to turn on SSL in HTTP requests.

- Set the SSL port with the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#httpport" target="_blank">HTTPPort</a>.

- Call the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#httpupload" target="_blank">HTTPUpload to upload the documents.

For more information on how to use HTTPUpload, please check <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#httpupload" target="_blank">here</a>.

Note that if you use this feature, you need to enable HTTPS on the server. For how to enable HTTPS, please check out the manual of your webserver.
