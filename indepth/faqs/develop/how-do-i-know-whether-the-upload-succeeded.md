---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Do I Know Whether The Upload Succeeded
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do I Know Whether The Upload Succeeded
description: How Do I Know Whether The Upload Succeeded
---

# Development

## How do I know whether the upload succeeded? 

 Every HTTP upload method has two callbacks with signatures like this

``` typescript
onEmptyResponse: () => void,
onServerReturnedSomething: (
    errorCode: number,
    errorString: string,
    response: string) => void
```

The 1st callback `onEmptyResponse` is triggered when the server returns no response string. Generally, if errors occurred on the server, the server would return some information to indicate what went wrong. Therefore, if nothing is returned, you can treat it as a successful upload.

Of course, in your own server-side script to accept and process the HTTP Post request, you know whether the upload is successful and can make it more obvious by returning some custom information to indicate that. In this case, the 2nd callback `onServerReturnedSomething` will be triggered on purpose and you will need to read the argument `response` which contains what is returned by the server.

> NOTE 
>  
> When the callback `onServerReturnedSomething` is triggered, you will always get an `errorCode` and an `errorString` but you can choose to ignore them if it's triggered on purpose.

`Dynamic Web TWAIN` also provides an API called [ `HTTPPostResponseString` ]({{site.info}}api/WebTwain_IO.html#httppostresponsestring) which contains `response` but can be read outside of the upload method.
