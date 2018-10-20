[DMR Source](../README.md) > [Source](../classes/source.md)

# Class: Source

## Type parameters
#### Config :  [InterfaceConfig](../interfaces/interfaceconfig.md)
#### ReadOption :  [InterfaceConfig](../interfaces/interfaceconfig.md)
#### WriteOption :  [InterfaceConfig](../interfaces/interfaceconfig.md)
## Hierarchy

 `EventEmitter`

**↳ Source**

↳  [FileSource](filesource.md)

↳  [FtpSource](ftpsource.md)

↳  [HttpSource](httpsource.md)

↳  [MultiSource](multisource.md)

## Index

### Constructors

* [constructor](source.md#constructor)

### Properties

* [defaultMaxListeners](source.md#defaultmaxlisteners)

### Methods

* [addListener](source.md#addlistener)
* [createReadableStream](source.md#createreadablestream)
* [createWritableStream](source.md#createwritablestream)
* [emit](source.md#emit)
* [eventNames](source.md#eventnames)
* [getMaxListeners](source.md#getmaxlisteners)
* [listenerCount](source.md#listenercount)
* [listeners](source.md#listeners)
* [off](source.md#off)
* [on](source.md#on)
* [once](source.md#once)
* [prependListener](source.md#prependlistener)
* [prependOnceListener](source.md#prependoncelistener)
* [rawListeners](source.md#rawlisteners)
* [removeAllListeners](source.md#removealllisteners)
* [removeListener](source.md#removelistener)
* [setMaxListeners](source.md#setmaxlisteners)
* [listenerCount](source.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Source**(config?: *`Config`*): [Source](source.md)

*Defined in source.ts:18*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | `Config` |

**Returns:** [Source](source.md)

___

## Properties

<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1048*

___

## Methods

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

▸ **createReadableStream**(option?: * `ReadOption` &#124; `function`*): `Readable`

*Defined in source.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` option |  `ReadOption` &#124; `function`|

**Returns:** `Readable`

___
<a id="createwritablestream"></a>

###  createWritableStream

▸ **createWritableStream**(option?: * `WriteOption` &#124; `function`*): `Writable`

*Defined in source.ts:33*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` option |  `WriteOption` &#124; `function`|

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

