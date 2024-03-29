---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Global APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Global APIs
breadcrumbText: Global
description: Dynamic Web TWAIN SDK Documentation API Reference Global APIs Page
---

# `Dynamsoft.WebTwainEnv`
> Global properties and functions.

``` typescript
interface Dynamsoft.WebTwainEnv {
    readonly ActiveXVersion: string;
    readonly JSVersion: string;
    readonly PdfVersion: string;
    readonly ServerLinuxVersionInfo: string;
    readonly ServerMacVersionInfo: string;
    readonly ServerVersionInfo: string;
    /**
     * Whether to create a WebTwain instance automatically.
     */
    AutoLoad: boolean;
    ContainerMap: object;
    /**
     * Define the Id and UI of the WebTwain instances.
     */
    Containers: Container[];
    Host: string; //"local.dynamsoft.com"
    IfAddMD5InUploadHeader: boolean;
    IfDisableDefaultSettings: boolean;
    IfUseActiveXForIE10Plus: boolean;
    readonly inited: boolean;
    ProductKey: string;
    ResourcesPath: string;
    UseLocalService: boolean;
    UseDefaultInstallUI: boolean;
    
    // Functions
    CreateDWTObject(
        ContainerId: string, 
        host?: string, 
        port?: string | number, 
        portSSL?: string | number, 
        asyncSuccessFunc: function (DWObject: WebTwain) {}, 
        asyncFailureFunc: function (errorString: string) {}
    ): void;
    CreateDWTObjectEx(
        dwtInitialConfig: DWTInitialConfig,                 
        asyncSuccessFunc: (DWObject: WebTwain) => {},                   
        asyncFailureFunc: (errorString: string) => {}
    ): void;
    DeleteDWTObject(Id?: string): boolean;
    GetWebTwain(ContainerId?: string): WebTwain;
    GetWebTwainEx(WebTwainId: string): WebTwain;
    Load(): void;
    Unload(): void;
    RemoveAllAuthorizations: function () {};
    OnWebTwainNotFound: function () {};
    OnWebTwainPostExecute: function () {};
    OnWebTwainPreExecute: function () {};
    OnWebTwainReady: function () {};
    OnWebTwainWillInit: function () {};
}
```

## Options

### `Containers`

An array of `Container` definitions that specifies the UI elements for `WebTwain` instances. The `Container` interface is defined below

``` typescript
interface Container {
    WebTwainId?: string, // Id of the WebTwain instance
    ContainerId?: string, // Id of the element
    Width?: string | number, // Width of the element
    Height?: string | number // Height of the element
}
```

`WebTwainId` and `ContainerId` are both optional but one must exist as the identifier for that `WebTwain` instance.

`Width` and `Height` determine the initial viewer size of the instance.

### `IfAddMD5InUploadHeader`

Whether or not an md5 header `dwt-md5` should be included in HTTP upload requests. Note that this header is not a standard header and may be deemed invalid on some web servers.
  
The default value is `false` .

### `ProductKey`
  
Sets or returns the product key for the library. A product key is required to enables certain modules of the library. 

### `ResourcesPath`
  
Sets or returns where the library looks for resources files including service installers, CSS, etc.
  
### `UseLocalService`

Sets or returns whether to use the service or use WASM only. This property can be changed at runtime (but not recommended) and affects `WebTwain` instances created after the change.

The default value is `true` .

## Functions

### `CreateDWTObject()`

Creates a new `WebTwain` instance that listens to the specified host & ports. An UI element specified by the parameter `ContainerId` which is typically a <div> is required. The library will generate a UI and bind it to this element.

### `CreateDWTObjectEx()`

Creates a new UI-less `WebTwain` instance. This instance will be uniquely identified by the parameter `WebTwainId` .

``` typescript
  interface DWTInitialConfig {

      WebTwainId: string,
          Host ? : string,
          Port ? : string,
          PortSSL ? : string

  }
```

### `DeleteDWTObject()`

Delete the `WebTwain` instance specified by `Id` which can either be a `ContainerId` or a `WebTwainId` .

### `GetWebTwain()`

Gets an `WebTwain` instance by its `ContainerId` .

### `GetWebTwainEx()`

Gets an `WebTwain` instance by its `WebTwainId` .
  
### `Load()`

Initiates the library. If there are predefined `Containers` , one `WebTwain` instance will be created for each `Container` .

### `RegisterEvent()`

Registers an environmental event. Typically the event is `OnWebTwainReady` which is triggered when the initialization completes.

### `Unload()`

Destroys all `WebTwain` instances and cuts off the connection to the Dynamsoft Service.
