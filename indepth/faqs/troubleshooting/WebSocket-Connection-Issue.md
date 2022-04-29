---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: WebSocket Connection Issue
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting
breadcrumbText: WebSocket Connection Issue
description: WebSocket Connection Issue
---

# Troubleshooting

## WebSocket Connection Issue

`DWT` uses WebSocket connection to communicate with the Dynamsoft Service. Each `WebTwain` instance creates its own Websocket connection. That means if you have multiple `WebTwain` instances, your browser will be maintaining multiple WebSocket connections. At the same time, if you are not proactively closing a connection, then the connection may take some time to close even after you have closed the scan page.

The browser would be tasked with maintaining multiple Websocket connections at some point and not all browsers are designed to handle that. While modern browsers like Chrome, Firefox, etc. can handle tens or even more than a hundred WebSocket connections, IE can handle just 6 by default. Therefore, you may be surprised to find that IE reports the Dynamsoft Service is not installed even when you were just using it! And that report is due to the failure to create a 7th WebsSocket connection at that point.

Though it's not ideal, IE does provide a solution which is to configure the WebSocket connection limit in the Local Group Policy Editor as shown below

- Press the Windows Key + R key to open the Run dialog
- Type `gpedit.msc` and press Enter to open the Local Group Policy Editor
- Navigate to `Administrative Templates` > `Windows Components` > `Internet Explorer` > `Security Features` > `AJAX`
- Double click in the corresponding feature "Maximum number of connections per server" to enable the feature and change the default number to a larger number
