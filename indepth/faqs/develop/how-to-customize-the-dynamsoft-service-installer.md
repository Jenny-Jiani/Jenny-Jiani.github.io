---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Customize The Dynamsoft Service Installer
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Customize The Dynamsoft Service Installer
description: How To Customize The Dynamsoft Service Installer
---

# Development

## How to customize the Dynamsoft Service installer? 

<!--There are some cases where you might not want to use the official installers of Dynamsoft Service. -->

Your application may have its own installer which installs other related components and it's best if you can build Dynamsoft Service installer in there as well. In this case, you can feel free to include the official Dynamsoft Service installer (as is) in your overall installer to get it executed during the installation process.

We also provide .msi to achieve silent installation to hide UI during the installation process.

<!--
### You want to rebrand the installer

The official Dynamsoft Service installer is digitally signed by Dynamsoft Certificates and it also shows multiple labels belonging to Dynamsoft. To rebrand it, you would need a white-label version of it. This usually involves the [Customization Service]({{site.indepth}}development/Pro-service.html#customization-service). Contact [Dynamsoft Support Team]({{site.about}}getsupport.html) for more information.
-->
