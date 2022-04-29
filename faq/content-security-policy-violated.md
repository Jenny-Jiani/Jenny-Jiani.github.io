---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN – Content-Security-Policy violated
keywords: Dynamic Web TWAIN, Content-Security-Policy
breadcrumbText: Dynamic Web TWAIN – Content-Security-Policy violated
description: Dynamic Web TWAIN – Content-Security-Policy violated
---

# Project Deployment and End-user Installation

## Dynamic Web TWAIN – Content-Security-Policy violated

If your server has Content-Security-Policy enabled, you might get an error when accessing a web scanning page using Dynamic Web TWAIN.

```javascript
CSP14312: Resource violated directive 'default-src 'self' 'unsafe-inline' 'unsafe-eval'' in Content-Security-Policy: wss://127.0.0.1:8992/. Resource will be blocked.
```
In such cases, you will need to modify your Content-Security-Policy settings to allow the loading of Dynamic Web TWAIN JS files like dynamsoft.webtwain.initiate.js, dynamsoft.webtwain.config.js. etc.

More information can be found on <a href="https://content-security-policy.com/" target="_blank">https://content-security-policy.com/</a>
