[DMR Source](../README.md) > [HttpSource](../classes/httpsource.md)

# Class: HttpSource

## Hierarchy

↳  [Source](source.md)<[HttpConfig](../interfaces/httpconfig.md), [HttpReadOption](../interfaces/httpreadoption.md), [InterfaceConfig](../interfaces/interfaceconfig.md)>

**↳ HttpSource**

## Index

### Constructors

* [constructor](httpsource.md#constructor)

### Properties

* [defaultMaxListeners](httpsource.md#defaultmaxlisteners)

### Methods

* [_createReadableStream](httpsource.md#_createreadablestream)
* [_createWritableStream](httpsource.md#_createwritablestream)
* [addListener](httpsource.md#addlistener)
* [createReadableStream](httpsource.md#createreadablestream)
* [createWritableStream](httpsource.md#createwritablestream)
* [emit](httpsource.md#emit)
* [eventNames](httpsource.md#eventnames)
* [getMaxListeners](httpsource.md#getmaxlisteners)
* [listenerCount](httpsource.md#listenercount)
* [listeners](httpsource.md#listeners)
* [off](httpsource.md#off)
* [on](httpsource.md#on)
* [once](httpsource.md#once)
* [prependListener](httpsource.md#prependlistener)
* [prependOnceListener](httpsource.md#prependoncelistener)
* [rawListeners](httpsource.md#rawlisteners)
* [removeAllListeners](httpsource.md#removealllisteners)
* [removeListener](httpsource.md#removelistener)
* [setMaxListeners](httpsource.md#setmaxlisteners)
* [listenerCount](httpsource.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HttpSource**(config?: *[HttpConfig](../interfaces/httpconfig.md)*): [HttpSource](httpsource.md)

*Overrides [Source](source.md).[constructor](source.md#constructor)*

*Defined in source-http.ts:11*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | [HttpConfig](../interfaces/httpconfig.md) |

**Returns:** [HttpSource](httpsource.md)

___

## Properties

<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1048*

___

## Methods

<a id="_createreadablestream"></a>

###  _createReadableStream

▸ **_createReadableStream**(option: *[HttpReadOption](../interfaces/httpreadoption.md)*): `Readable`

*Defined in source-http.ts:16*

**Parameters:**

| Param | Type |
| ------ | ------ |
| option | [HttpReadOption](../interfaces/httpreadoption.md) |

**Returns:** `Readable`

___
<a id="_createwritablestream"></a>

###  _createWritableStream

▸ **_createWritableStream**(): `never`

*Defined in source-http.ts:33*

**Returns:** `never`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1050*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="createreadablestream"></a>

###  createReadableStream

▸ **createReadableStream**(option?: * [HttpReadOption](../interfaces/httpreadoption.md) &#124; `function`*): `Readable`

*Inherited from [Source](source.md).[createReadableStream](source.md#createreadablestream)*

*Defined in source.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` option |  [HttpReadOption](../interfaces/httpreadoption.md) &#124; `function`|

**Returns:** `Readable`

___
<a id="createwritablestream"></a>

###  createWritableStream

▸ **createWritableStream**(option?: * [InterfaceConfig](../interfaces/interfaceconfig.md) &#124; `function`*): `Writable`

*Inherited from [Source](source.md).[createWritableStream](source.md#createwritablestream)*

*Defined in source.ts:33*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` option |  [InterfaceConfig](../interfaces/interfaceconfig.md) &#124; `function`|

**Returns:** `Writable`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1062*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1063*

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1059*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1064*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1060*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1056*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1051*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1052*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1053*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1054*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1061*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1057*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1055*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1058*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1047*

*__deprecated__*: since v4.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___

