---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Change The Header Of The HTTP Form
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Change The Header Of The HTTP Form
description: Can I Change The Header Of The HTTP Form
---

# Development

## Can I change the header of the HTTP form? 

Yes, you can use the method [ `SetHTTPHeader()` ]({{site.info}}api/WebTwain_IO.html#sethttpheader) to add or change the header(s). It's recommended that you don't change the default fields including, but not limited to, `Accept` , `Connection` , `Cookie` , etc.
