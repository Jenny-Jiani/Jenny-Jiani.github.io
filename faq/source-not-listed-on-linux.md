---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Scanner source is listed on XSane application but not on my web application on Linux machines
keywords: Dynamic Web TWAIN, Dynamsoft Service, installation, uninstallation
breadcrumbText: Scanner source is listed on XSane application but not on my web application on Linux machines
description: Scanner source is listed on XSane application but not on my web application on Linux machines
---

# Project Deployment and End-user Installation

## Scanner source is listed on XSane applicaton but not on my web application on Linux machines


### Symptom

On Linux machines, the scanner can be accessed using the XSane application and it can successfully scan. But the scanner does not show on the web application integrated with Dynamic Web TWAIN even after Dynamsoft Service is installed.

### Cause

Dynamsoft Service is not installed correctly.

### Resolution

Please follow the steps below to reinstall Dynamsoft Service:

1. Run the following commands
``` shell
su
usermod -aG wheel XXX ps：XXX is current username
```

2. Restart the terminal under current user

3. Run the following command
``` shell
sudo rpm -i DynamsoftServiceSetup.rpm
```

If the above does not resolve the issue, please follow the troubleshooting steps below.

1. Has the process started?
``` shell
ps aux | grep dynamsoft
```
2. Does the below command list out the source?
``` shell
bash /opt/dynamsoft/DynamsoftService/DynamsoftScanningMgr
```
3. Please check the logs here: /var/log/syslog

For further support, please email support@dynamsoft.com and include any screenshots and logs collected.