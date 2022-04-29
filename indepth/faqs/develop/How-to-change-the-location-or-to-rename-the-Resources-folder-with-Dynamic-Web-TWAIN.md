---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to change the location or to rename the ‘Resources’ folder with Dynamic Web TWAIN
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to change the location or to rename the ‘Resources’ folder with Dynamic Web TWAIN
description: How to change the location or to rename the ‘Resources’ folder with Dynamic Web TWAIN
---

# Development

## How to change the location or to rename the ‘Resources’ folder with Dynamic Web TWAIN

<strong>Scenario: </strong> For customers who are using Dynamic Web TWAIN, to change the location of the 'Resources' folder, or to rename it, please following the steps below:

<strong>Steps:</strong> Say the original Resources folder is at '<strong>../{Project Directory}/Resources</strong>', and you want to change it to '<strong>../{Project Directory}/Newfolder/ResourcesTest</strong>'.

1. Please make sure the structure inside 'Resources' folder stay unchanged.
2. Change the relative path in your page where you reference to the js files, for example:

```javascript
<script src="Resources/dynamsoft.webtwain.initiate.js"></script>
// or your own operation js file
<script src="Scripts/DWTSample_BasicScan.js"></script>
<script src="Resources/dynamsoft.webtwain.config.js"></script>
``` 
Modify as below:

```javascript
<script src="Newfolder/ResourcesTest/dynamsoft.webtwain.initiate.js"></script>
// or your own operation js file
<script src="Scripts/DWTSample_BasicScan.js"></script>
<script src="Newfolder/ResourcesTest/dynamsoft.webtwain.config.js"></script>
``` 

3. Same change needs to be done in dynamsoft.webtwain.config.js file. Add/uncomment the following line, then change 'Resources' (to 'New folder/ResourcesTest' as in this case):

```javascript
Dynamsoft.DWT.ResourcesPath = 'Resources';
``` 
Modify as below:

```javascript
Dynamsoft.DWT.ResourcesPath = 'Newfolder/ResourcesTest';
``` 
