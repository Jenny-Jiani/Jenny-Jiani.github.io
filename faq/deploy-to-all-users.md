---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Is there an easy way to deploy the end-user components to all users?
keywords: Dynamic Web TWAIN, Project Deployment and End-user Installation, deploy, end-users
breadcrumbText: Is there an easy way to deploy the end-user components to all users?
description: Is there an easy way to deploy the end-user components to all users?
---

# Project Deployment and End-user Installation

## Is there an easy way to deploy the end-user components to all users?

Yes. The following are the commands for this purpose

- Windows

```shell
msiexec  /i  "/path/to/DynamsoftServiceSetup.msi"   /qn
```

- macOS

```shell
// Install
sudo installer -pkg /path/to/DynamsoftServiceSetup.pkg -target /Applications
// Stop service
sudo launchctl unload /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
// Start service
launchctl load /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
```

- Linux

```shell
sudo dpkg -i  /path/to/DynamsoftServiceSetup.deb
```

or

```shell
sudo rpm -i path/to/DynamsoftServiceSetup.rpm
```

And in a controlled environment, Dynamic Web TWAIN can be distributed to all clients in one go just like other similar programs. [Group Policy](https://docs.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software) is one such technology.
