[DMR Source](../README.md) > [Connector](../classes/connector.md)

# Class: Connector

## Hierarchy

 `Transform`

 `Transform`

 `Transform`

**↳ Connector**

## Implements

* `ReadableStream`
* `Writable`
* `ReadableStream`
* `Writable`
* `ReadableStream`
* `Writable`

## Index

### Constructors

* [constructor](connector.md#constructor)

### Properties

* [readable](connector.md#readable)
* [readableHighWaterMark](connector.md#readablehighwatermark)
* [readableLength](connector.md#readablelength)
* [writable](connector.md#writable)
* [writableHighWaterMark](connector.md#writablehighwatermark)
* [writableLength](connector.md#writablelength)
* [defaultMaxListeners](connector.md#defaultmaxlisteners)

### Methods

* [__@asyncIterator](connector.md#___asynciterator)
* [_destroy](connector.md#_destroy)
* [_final](connector.md#_final)
* [_flush](connector.md#_flush)
* [_read](connector.md#_read)
* [_transform](connector.md#_transform)
* [_write](connector.md#_write)
* [_writev](connector.md#_writev)
* [addListener](connector.md#addlistener)
* [cork](connector.md#cork)
* [destroy](connector.md#destroy)
* [emit](connector.md#emit)
* [end](connector.md#end)
* [eventNames](connector.md#eventnames)
* [getMaxListeners](connector.md#getmaxlisteners)
* [isPaused](connector.md#ispaused)
* [listenerCount](connector.md#listenercount)
* [listeners](connector.md#listeners)
* [off](connector.md#off)
* [on](connector.md#on)
* [once](connector.md#once)
* [pause](connector.md#pause)
* [pipe](connector.md#pipe)
* [prependListener](connector.md#prependlistener)
* [prependOnceListener](connector.md#prependoncelistener)
* [push](connector.md#push)
* [rawListeners](connector.md#rawlisteners)
* [read](connector.md#read)
* [removeAllListeners](connector.md#removealllisteners)
* [removeListener](connector.md#removelistener)
* [resume](connector.md#resume)
* [setDefaultEncoding](connector.md#setdefaultencoding)
* [setEncoding](connector.md#setencoding)
* [setMaxListeners](connector.md#setmaxlisteners)
* [uncork](connector.md#uncork)
* [unpipe](connector.md#unpipe)
* [unshift](connector.md#unshift)
* [wrap](connector.md#wrap)
* [write](connector.md#write)
* [listenerCount](connector.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Connector**(opts?: *`TransformOptions`*): [Connector](connector.md)

*Inherited from Transform.__constructor*

*Overrides Duplex.__constructor*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6570*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` opts | `TransformOptions` |

**Returns:** [Connector](connector.md)

___

## Properties

<a id="readable"></a>

###  readable

**● readable**: *`boolean`*

*Inherited from Readable.readable*

*Overrides Readable.readable*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6353*

___
<a id="readablehighwatermark"></a>

###  readableHighWaterMark

**● readableHighWaterMark**: *`number`*

*Inherited from Readable.readableHighWaterMark*

*Overrides Readable.readableHighWaterMark*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6354*

___
<a id="readablelength"></a>

###  readableLength

**● readableLength**: *`number`*

*Inherited from Readable.readableLength*

*Overrides Readable.readableLength*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6355*

___
<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from Duplex.writable*

*Overrides Duplex.writable*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6540*

___
<a id="writablehighwatermark"></a>

###  writableHighWaterMark

**● writableHighWaterMark**: *`number`*

*Inherited from Duplex.writableHighWaterMark*

*Overrides Duplex.writableHighWaterMark*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6541*

___
<a id="writablelength"></a>

###  writableLength

**● writableLength**: *`number`*

*Inherited from Duplex.writableLength*

*Overrides Duplex.writableLength*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6542*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Overrides EventEmitter.defaultMaxListeners*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1048*

___

## Methods

<a id="___asynciterator"></a>

###  __@asyncIterator

▸ **__@asyncIterator**(): `AsyncIterableIterator`<`any`>

*Inherited from Readable.[Symbol.asyncIterator]*

*Overrides Readable.[Symbol.asyncIterator]*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6428*

**Returns:** `AsyncIterableIterator`<`any`>

___
<a id="_destroy"></a>

###  _destroy

▸ **_destroy**(error: * `Error` &#124; `null`*, callback: *`function`*): `void`

*Inherited from Duplex._destroy*

*Overrides Readable._destroy*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6546*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| callback | `function` |

**Returns:** `void`

___
<a id="_final"></a>

###  _final

▸ **_final**(callback: *`function`*): `void`

*Inherited from Duplex._final*

*Overrides Duplex._final*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6547*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="_flush"></a>

###  _flush

▸ **_flush**(callback: *`TransformCallback`*): `void`

*Inherited from Transform._flush*

*Overrides Transform._flush*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6573*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `TransformCallback` |

**Returns:** `void`

___
<a id="_read"></a>

###  _read

▸ **_read**(size: *`number`*): `void`

*Inherited from Readable._read*

*Overrides Readable._read*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6357*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `void`

___
<a id="_transform"></a>

###  _transform

▸ **_transform**(chunk: *`any`*, encoding: *`any`*, callback: *`any`*): `void`

*Overrides Transform._transform*

*Defined in source-ftp.ts:55*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `any` |
| callback | `any` |

**Returns:** `void`

___
<a id="_write"></a>

###  _write

▸ **_write**(chunk: *`any`*, encoding: *`string`*, callback: *`function`*): `void`

*Inherited from Duplex._write*

*Overrides Duplex._write*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6544*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="_writev"></a>

### `<Optional>` _writev

▸ **_writev**(chunks: *`Array`<`object`>*, callback: *`function`*): `void`

*Inherited from Duplex._writev*

*Overrides Duplex._writev*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6545*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunks | `Array`<`object`> |
| callback | `function` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"data"*, listener: *`function`*): `this`

▸ **addListener**(event: *"end"*, listener: *`function`*): `this`

▸ **addListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6379*

Event emitter The defined events on documents including:

1.  close
2.  data
3.  end
4.  readable
5.  error

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6380*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6381*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6382*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6383*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6384*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="cork"></a>

###  cork

▸ **cork**(): `void`

*Inherited from Duplex.cork*

*Overrides Duplex.cork*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6554*

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(error?: *`Error`*): `void`

*Inherited from Readable.destroy*

*Overrides Readable.destroy*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6368*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` error | `Error` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"data"*, chunk: *`any`*): `boolean`

▸ **emit**(event: *"end"*): `boolean`

▸ **emit**(event: *"readable"*): `boolean`

▸ **emit**(event: *"error"*, err: *`Error`*): `boolean`

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6386*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6387*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| chunk | `any` |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6388*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6389*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6390*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6391*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(cb?: *`function`*): `void`

▸ **end**(chunk: *`any`*, cb?: *`function`*): `void`

▸ **end**(chunk: *`any`*, encoding?: *`string`*, cb?: *`function`*): `void`

*Inherited from Duplex.end*

*Overrides Duplex.end*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6551*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` cb | `function` |

**Returns:** `void`

*Inherited from Duplex.end*

*Overrides Duplex.end*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6552*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `function` |

**Returns:** `void`

*Inherited from Duplex.end*

*Overrides Duplex.end*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6553*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `string` |
| `Optional` cb | `function` |

**Returns:** `void`

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
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Inherited from Readable.isPaused*

*Overrides Readable.isPaused*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6362*

**Returns:** `boolean`

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

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"data"*, listener: *`function`*): `this`

▸ **on**(event: *"end"*, listener: *`function`*): `this`

▸ **on**(event: *"readable"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6393*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6394*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6395*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6396*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6397*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6398*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"data"*, listener: *`function`*): `this`

▸ **once**(event: *"end"*, listener: *`function`*): `this`

▸ **once**(event: *"readable"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6400*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6401*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6402*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6403*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6404*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6405*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Inherited from Readable.pause*

*Overrides Readable.pause*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6360*

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`object`*): `T`

*Inherited from internal.pipe*

*Overrides internal.pipe*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6338*

**Type parameters:**

#### T :  `WritableStream`
**Parameters:**

**destination: `T`**

**`Optional` options: `object`**

| Param | Type |
| ------ | ------ |
| `Optional` end | `boolean` |

**Returns:** `T`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6407*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6408*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6409*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6410*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6411*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6412*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6414*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6415*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6416*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6417*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6418*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6419*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="push"></a>

###  push

▸ **push**(chunk: *`any`*, encoding?: *`string`*): `boolean`

*Inherited from Readable.push*

*Overrides Readable.push*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6366*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `string` |

**Returns:** `boolean`

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
<a id="read"></a>

###  read

▸ **read**(size?: *`number`*): `any`

*Inherited from Readable.read*

*Overrides Readable.read*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6358*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` size | `number` |

**Returns:** `any`

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

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"data"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"end"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6421*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6422*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6423*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6424*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6425*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6426*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Inherited from Readable.resume*

*Overrides Readable.resume*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6361*

**Returns:** `this`

___
<a id="setdefaultencoding"></a>

###  setDefaultEncoding

▸ **setDefaultEncoding**(encoding: *`string`*): `this`

*Inherited from Duplex.setDefaultEncoding*

*Overrides Duplex.setDefaultEncoding*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6550*

**Parameters:**

| Param | Type |
| ------ | ------ |
| encoding | `string` |

**Returns:** `this`

___
<a id="setencoding"></a>

###  setEncoding

▸ **setEncoding**(encoding: *`string`*): `this`

*Inherited from Readable.setEncoding*

*Overrides Readable.setEncoding*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6359*

**Parameters:**

| Param | Type |
| ------ | ------ |
| encoding | `string` |

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
<a id="uncork"></a>

###  uncork

▸ **uncork**(): `void`

*Inherited from Duplex.uncork*

*Overrides Duplex.uncork*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6555*

**Returns:** `void`

___
<a id="unpipe"></a>

###  unpipe

▸ **unpipe**(destination?: *`WritableStream`*): `this`

*Inherited from Readable.unpipe*

*Overrides Readable.unpipe*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6363*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` destination | `WritableStream` |

**Returns:** `this`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(chunk: *`any`*): `void`

*Inherited from Readable.unshift*

*Overrides Readable.unshift*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6364*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |

**Returns:** `void`

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(oldStream: *`ReadableStream`*): `this`

*Inherited from Readable.wrap*

*Overrides Readable.wrap*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6365*

**Parameters:**

| Param | Type |
| ------ | ------ |
| oldStream | `ReadableStream` |

**Returns:** `this`

___
<a id="write"></a>

###  write

▸ **write**(chunk: *`any`*, cb?: *`function`*): `boolean`

▸ **write**(chunk: *`any`*, encoding?: *`string`*, cb?: *`function`*): `boolean`

*Inherited from Duplex.write*

*Overrides Duplex.write*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6548*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `function` |

**Returns:** `boolean`

*Inherited from Duplex.write*

*Overrides Duplex.write*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:6549*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `string` |
| `Optional` cb | `function` |

**Returns:** `boolean`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/node/index.d.ts:1047*

*__deprecated__*: since v4.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___

