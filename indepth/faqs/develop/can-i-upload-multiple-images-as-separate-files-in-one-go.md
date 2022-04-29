---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I Upload Multiple Images As Separate Files In One Go
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Upload Multiple Images As Separate Files In One Go
description: Can I Upload Multiple Images As Separate Files In One Go
---

# Development

## Can I upload multiple images as separate files in one go?

By design, the method [`HTTPUpload()`]({{site.info}}api/WebTwain_IO.html#httpupload) only contains one file. But as it essentially sends an HTTP form to the server, you can attach multiple files in that form using the methods [ `ConvertToBlob()` ]({{site.info}}api/WebTwain_IO.html#converttoblob) and [ `SetHTTPFormField()` ]({{site.info}}api/WebTwain_IO.html#sethttpformfield).

Check out the following snippet on how it is done. NOTE that the method `HTTPUpload()` only has 3 parameters as it doesn't need to specify a file anymore.

``` javascript
/**
 * Upload the images specified by their indices in the specified file type as separate files.
 * @param indices Specify the images
 * @param type Specify the file type
 */
function uploadSeparateFiles(indices, type) {
    var protocol = Dynamsoft.Lib.detect.ssl ? "https://" : "http://",
        port = window.location.port === "" ? 80 : window.location.port,
        actionPage = "/upload.aspx";
    // path to the server-side script
    var url = protocol + window.location.hostname + ":" + port + actionPage;
    if (DWObject) {
        var done = 0,
            count = indices.length;
        var toBlob = function(index) {
            var fieldName = "SampleFile_" + index;
            var fileName = fieldName + getExtension(type);
            DWObject.ConvertToBlob(
                [index],
                type,
                function(result, _indices, type) {
                    DWObject.SetHTTPFormField(
                        fieldName,
                        result,
                        fileName
                    );
                    done++;
                    if (done === count) {
                        DWObject.HTTPUpload(
                            url,
                            function() {
                                console.log('Success');
                            },
                            function(errCode, errString, responseStr) {
                                console.log(errString);
                            }
                        );
                    } else {
                        toBlob(indices[done]);
                    }
                },
                function(errorCode, errorString) {
                    console.log(errorString);
                }
            );
        }
        toBlob(indices[done]);
    }
}
```
