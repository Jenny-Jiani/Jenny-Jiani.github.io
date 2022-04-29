---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to read log
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting
breadcrumbText: How to read log
description: How to read log
---

# Troubleshooting

## How to read log

### Q: What are these log files for?

**A**:

- dss.log --> For Dynamsoft Service
- nw.log --> Details about the network traffic
- wts.log --> For TWAIN module
- wtss.log --> For scan process
- dsUpload.log --> For File Uploader module

### Q: What info do we see if Dynamic Web TWAIN SDK is not doing anything?

**A**:

There is a regular polling going on every 30 seconds, in the log, it looks like this

Client-side:

```
[Process:  1716 Thread: 17652] [05/23/2018 17:43:45.075] [Debug-0]: CClientProxy:: Send begin task=DefaultSourceName seq=18975 status=8 event=11
[Process:  1716 Thread: 17652] [05/23/2018 17:43:45.090] [Debug-0]: CClientProxy:: Send end 0
[Process:  1716 Thread: 17652] [05/23/2018 17:44:15.150] [Debug-0]: CClientProxy:: Send begin task=DefaultSourceName seq=18976 status=8 event=11
[Process:  1716 Thread: 17652] [05/23/2018 17:44:15.156] [Debug-0]: CClientProxy:: Send end 0
```

Server-side:

```
[Process:  5364 Thread:  7536] [05/23/2018 18:01:20.930] [Debug-0]: CTwainServer::receive1 task=DefaultSourceName seq=18478 status=8 event=11
```

### Q: What does a command to the service look like?

**A**: It looks like the following with "id" used to identify which client sent the command and "method" being the action that is being carried out

```
cmd = [{
"id" : "467653534",
"method" : "GetImageByIndex",
"parameter" : [ 0, 581, 511 ]
}].
```

### Q: What basic information can we get from the log?

**A**:

- The Operating system

```
Windows info: 6.2.9200 Pack: 0.0 Other: PID=2 Type=1 Mask=256
```

- The version of Dynamsoft Web TWAIN (wts.log)

```
Activex Version info:32c0048, Dynamic Web TWAIN 14.0 Trial, 14, 0, 0, 0618, x64:0
```

- The version of Dynamosft Service (dss.log)

```
Current version info: Dynamsoft Service 1, 4, 0, 0618.
```

- The current LogLevel

```
Log Level = 14, 0.
```

- Websocket listening ports

```
[Debug-0]: dwt_command, Websocket connection initialized.
[Info-0]: Create websocket context succeed at default 127.0.0.1:18625, use_ssl = false!
[Info-0]: Start websocket service succeed. port = [18625], use_ssl = false.
[Process: 16784 Thread: 15400] [05/23/2018 17:56:44.554] [Info-0]: Websocket Listening starts at port = 18625, use_ssl = false
[Debug-0]: Get the port number and try creating websocket listening.
[Debug-0]: dwt_command, Websocket connection initialized.
[Info-0]: Create websocket context succeed at default 127.0.0.1:18626, use_ssl = true!
[Info-0]: Add https service succeed! Succeed port = 18626, use_ssl = true.
[Process: 16784 Thread: 10740] [05/23/2018 17:56:46.794] [Info-0]: Websocket Listening starts at port = 18626, use_ssl = true
[Debug-0]: Get http service parameter
[Debug-0]: Get the port number and try creating websocket listening.
[Info-0]: Add http service succeed! Succeed port = 18622, use_ssl = false.
[Debug-0]: dwt_command, Websocket connection initialized.
[Info-0]: Create websocket context succeed at default 127.0.0.1:18622, use_ssl = false!
[Info-0]: Start websocket service succeed. port = [18622], use_ssl = false.
[Process: 16784 Thread:  9508] [05/23/2018 17:56:48.071] [Info-0]: Websocket Listening starts at port = 18622, use_ssl = false
```

- Requesting origin

```
origin:http://127.0.0.1:100
```

- Sequence in which commands are being called

- How a command worked

```
result json = [{
    "description" : "User cancelled the operation.",
    "exception" : -1032,
    "id" : "667465648",
    "method" : "SelectSource",
    "result" : [ false ],
    "cmdId" : ""
}].
```
