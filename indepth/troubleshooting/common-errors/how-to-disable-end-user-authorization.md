---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Troubleshooting How To Disable End-user Authorization 
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting, Common Errors, Disable End-user Authorization 
breadcrumbText: Disable End-user Authorization 
description: Dynamic Web TWAIN SDK Documentation Troubleshooting Common Errors How To Disable End-user Authorization Page
---

# Common Errors

## How to disable end-user Authorization

Requested by more and more customers, Dynamsoft added the feature of end-user authorization in Dynamic Web TWAIN version 12. With the feature, whenever a user tries to use a scanner or a webcam connected to the local desktop or access any local files, he or she will be prompted to allow the action. For more information, please click here.

In some cases, this is not convenient and you might want to disable this feature. The following introduces how this can be done.

In case you are installing the SDK by a .msi to multiple machines at a time (as the system admin), you can use the file DynamicWebTWAINHTML5Edition.msi located under Resources/MSI and use the following command when installing.

``` javascript
DynamicWebTWAINHTML5Edition.msi MyCustomParameter="DisableScannerAccessAuth; DisableFileAccessAuth"
```

The same works too if you are installing on a single machine by CMD by a singer user.

If you encounter any issues, please feel free to contact [Dynamsoft Support Team](mailto:support@dynamsoft.com)
