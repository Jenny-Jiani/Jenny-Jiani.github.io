---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How Do You Use Custom DataSource Data
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Use Custom DataSource Data
description: How Do You Use Custom DataSource Data
---

# Development

## How do you use Custom DataSource Data?

> This feature is only available for [TWAIN scanners]({{site.getstarted}}hardware.html#twain-scanners).

**A**: Custom DataSource Data (CDD) is a feature provided by TWAIN and implemented by TWAIN sources (drivers). The idea is to save all TWAIN-related configurations in a file or a base64 string and use it later to restore the same configurations on the same device or a different device of the same model. This feature can be handy in cases like sharing the same configurations across multiple devices, or presetting a device for scanning. `Dynamic Web TWAIN` provides two pairs of methods to enable this feature, which are

* [ `GetCustomDSData()` ]({{site.info}}api/WebTwain_Acquire.html#getcustomdsdata) , [ `SetCustomDSData()` ]({{site.info}}api/WebTwain_Acquire.html#setcustomdsdata)
* [ `GetCustomDSDataEx()` ]({{site.info}}api/WebTwain_Acquire.html#getcustomdsdataex) , [ `SetCustomDSDataEx()` ]({{site.info}}api/WebTwain_Acquire.html#setcustomdsdataex)

The first pair saves or loads the data from a file, and the second from a base64 string.

The following shows how to use the second pair in JavaScript.

##### Save the data

``` javascript
  var cDD = "";
  DWObject.SelectSource(function() {
      DWObject.OpenSource();
      DWObject.AcquireImage(function() {
          cDD = DWObject.GetCustomDSDataEx();
      }, function(code, error) {
          console.log(error);
      });
  }, function(code, error) {
      console.log(error);
  });
```

##### Use the data

``` javascript
  DWObject.SelectSource(function() {
      DWObject.IfShowUI = false;
      DWObject.OpenSource();
      DWObject.SetCustomDSDataEx(cDD);
      DWObject.AcquireImage(function() {
          console.log('Success');
      }, function(code, error) {
          console.log(error);
      });
  }, function(code, error) {
      console.log(error);
  });
```
