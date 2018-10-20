[DMR Source](../README.md) > [HttpConfig](../interfaces/httpconfig.md)

# Interface: HttpConfig

## Hierarchy

↳  [HttpReadOption](httpreadoption.md)

**↳ HttpConfig**

## Index

### Properties

* [_defaultAgent](httpconfig.md#_defaultagent)
* [agent](httpconfig.md#agent)
* [auth](httpconfig.md#auth)
* [createConnection](httpconfig.md#createconnection)
* [defaultPort](httpconfig.md#defaultport)
* [encoding](httpconfig.md#encoding)
* [family](httpconfig.md#family)
* [headers](httpconfig.md#headers)
* [host](httpconfig.md#host)
* [hostname](httpconfig.md#hostname)
* [localAddress](httpconfig.md#localaddress)
* [method](httpconfig.md#method)
* [path](httpconfig.md#path)
* [port](httpconfig.md#port)
* [protocol](httpconfig.md#protocol)
* [socketPath](httpconfig.md#socketpath)
* [timeout](httpconfig.md#timeout)

---

## Properties

<a id="_defaultagent"></a>

### `<Optional>` _defaultAgent

**● _defaultAgent**: *`Agent`*

*Inherited from ClientRequestArgs._defaultAgent*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1144*

___
<a id="agent"></a>

### `<Optional>` agent

**● agent**: * `Agent` &#124; `boolean`
*

*Inherited from ClientRequestArgs.agent*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1143*

___
<a id="auth"></a>

### `<Optional>` auth

**● auth**: *`string`*

*Inherited from ClientRequestArgs.auth*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1142*

___
<a id="createconnection"></a>

### `<Optional>` createConnection

**● createConnection**: *`function`*

*Inherited from ClientRequestArgs.createConnection*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1147*

#### Type declaration
▸(options: *`ClientRequestArgs`*, oncreate: *`function`*): `Socket`

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | `ClientRequestArgs` |
| oncreate | `function` |

**Returns:** `Socket`

___
<a id="defaultport"></a>

### `<Optional>` defaultPort

**● defaultPort**: * `number` &#124; `string`
*

*Inherited from ClientRequestArgs.defaultPort*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1136*

___
<a id="encoding"></a>

### `<Optional>` encoding

**● encoding**: *`string`*

*Inherited from [HttpReadOption](httpreadoption.md).[encoding](httpreadoption.md#encoding)*

*Defined in source-http.ts:49*

___
<a id="family"></a>

### `<Optional>` family

**● family**: *`number`*

*Inherited from ClientRequestArgs.family*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1134*

___
<a id="headers"></a>

### `<Optional>` headers

**● headers**: *`OutgoingHttpHeaders`*

*Inherited from ClientRequestArgs.headers*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1141*

___
<a id="host"></a>

### `<Optional>` host

**● host**: *`string`*

*Inherited from ClientRequestArgs.host*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1132*

___
<a id="hostname"></a>

### `<Optional>` hostname

**● hostname**: *`string`*

*Inherited from ClientRequestArgs.hostname*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1133*

___
<a id="localaddress"></a>

### `<Optional>` localAddress

**● localAddress**: *`string`*

*Inherited from ClientRequestArgs.localAddress*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1137*

___
<a id="method"></a>

### `<Optional>` method

**● method**: *`string`*

*Inherited from ClientRequestArgs.method*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1139*

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`string`*

*Inherited from ClientRequestArgs.path*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1140*

___
<a id="port"></a>

### `<Optional>` port

**● port**: * `number` &#124; `string`
*

*Inherited from ClientRequestArgs.port*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1135*

___
<a id="protocol"></a>

### `<Optional>` protocol

**● protocol**: *`string`*

*Inherited from ClientRequestArgs.protocol*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1131*

___
<a id="socketpath"></a>

### `<Optional>` socketPath

**● socketPath**: *`string`*

*Inherited from ClientRequestArgs.socketPath*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1138*

___
<a id="timeout"></a>

### `<Optional>` timeout

**● timeout**: *`number`*

*Inherited from ClientRequestArgs.timeout*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1145*

___

