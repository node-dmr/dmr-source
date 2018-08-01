# dmr-source
[![Build Status](https://travis-ci.org/node-dmr/dmr-source.svg?branch=master)](https://travis-ci.org/node-dmr/dmr-source)
[![Coveralls](https://img.shields.io/coveralls/node-dmr/dmr-source.svg)](https://coveralls.io/github/node-dmr/dmr-source)
[![npm package](https://img.shields.io/npm/v/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)
[![npm downloads](http://img.shields.io/npm/dm/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)


## What`s dmr-source

dmr-source is source modules of dmr framework.
The source is the abstraction of the DMR framework input.
dmr-source will support different kinds of storage such as local file / remote (http / ftp) / hadoop / ssh2...

- [x] Source
- [x] FileSource
- [x] HttpSource
- [x] FtpSource
- [ ] SftpSource
- [ ] HadoopSource

## Classes

<dl>
<dt><a href="#FileSource">FileSource</a> ⇐ <code><a href="#Source">Source</a></code></dt>
<dd><p>FileSource can provide a ReadableStream/WritableStream of local file</p>
</dd>
<dt><a href="#HttpSource">HttpSource</a> ⇐ <code><a href="#Source">Source</a></code></dt>
<dd><p>HttpSource can provide a ReadableStream via http request</p>
</dd>
<dt><a href="#Source">Source</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>Source(dmr-source) is data files stored locally or remotely, which can be read or written.
           <br>Source constructor need a JSON config, it usually defined in project and should be static .
           <br>createReadableStream and createWritableStream need options which is variables.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#beforeCreateCallback">beforeCreateCallback</a> ⇒ <code>JSON</code></dt>
<dd><p>This callback is displayed as part of the Requester class.</p>
</dd>
<dt><a href="#beforeCreateCallback">beforeCreateCallback</a> ⇒ <code>JSON</code></dt>
<dd><p>This callback is displayed as part of the Requester class.</p>
</dd>
<dt><a href="#beforeCreateCallback">beforeCreateCallback</a> ⇒ <code>JSON</code></dt>
<dd><p>This callback is displayed as part of the Requester class.</p>
</dd>
</dl>

<a name="FileSource"></a>

## FileSource ⇐ [<code>Source</code>](#Source)
FileSource can provide a ReadableStream/WritableStream of local file

**Kind**: global class  
**Extends**: [<code>Source</code>](#Source)  

* [FileSource](#FileSource) ⇐ [<code>Source</code>](#Source)
    * [new FileSource(config)](#new_FileSource_new)
    * [.createWritableStream(option)](#FileSource+createWritableStream) ⇒ <code>stream.Writable</code>
    * [.createReadableStream(option)](#FileSource+createReadableStream) ⇒ <code>stream.Readable</code>

<a name="new_FileSource_new"></a>

### new FileSource(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>JSON</code> | config of a FileSource |

**Example**  
```js
// copy a big log filelet fileSource = new FileSource({"file": "`/home/work/dmr.${date}.log`"});let input = fileSource.createReadableStream({"date": "20180801"});let output = fileSource.createWritableStream({"date": "20180802"});input.pipe(output);
```
<a name="FileSource+createWritableStream"></a>

### fileSource.createWritableStream(option) ⇒ <code>stream.Writable</code>
**Kind**: instance method of [<code>FileSource</code>](#FileSource)  
**Implements**: <code>createWritableStream</code>  
**Overrides**: [<code>createWritableStream</code>](#Source+createWritableStream)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 
| option.beforeCreate | [<code>beforeCreateCallback</code>](#beforeCreateCallback) | 

<a name="FileSource+createReadableStream"></a>

### fileSource.createReadableStream(option) ⇒ <code>stream.Readable</code>
**Kind**: instance method of [<code>FileSource</code>](#FileSource)  
**Implements**: <code>createReadableStream</code>  
**Overrides**: [<code>createReadableStream</code>](#Source+createReadableStream)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 
| option.beforeCreate | [<code>beforeCreateCallback</code>](#beforeCreateCallback) | 

<a name="HttpSource"></a>

## HttpSource ⇐ [<code>Source</code>](#Source)
HttpSource can provide a ReadableStream via http request

**Kind**: global class  
**Extends**: [<code>Source</code>](#Source)  

* [HttpSource](#HttpSource) ⇐ [<code>Source</code>](#Source)
    * [new HttpSource(config)](#new_HttpSource_new)
    * [.createReadableStream(option)](#HttpSource+createReadableStream) ⇒ <code>stream.Readable</code>
    * *[.createWritableStream(option)](#Source+createWritableStream) ⇒ <code>WritableStream</code>*

<a name="new_HttpSource_new"></a>

### new HttpSource(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>JSON</code> | config of a HttpSource |

**Example**  
```js
// Get httpStream from http server

let input = new HttpSource({
  "host": "localhost", "path": "/", "port": "8188"
}).createReadableStream(option, {
  beforeCreate: (option) => {return option;}
});

input.pipe(process.stdout);
```
<a name="HttpSource+createReadableStream"></a>

### httpSource.createReadableStream(option) ⇒ <code>stream.Readable</code>
**Kind**: instance method of [<code>HttpSource</code>](#HttpSource)  
**Implements**: <code>createReadableStream</code>  
**Overrides**: [<code>createReadableStream</code>](#Source+createReadableStream)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 
| option.beforeCreate | [<code>beforeCreateCallback</code>](#beforeCreateCallback) | 

<a name="Source+createWritableStream"></a>

### *httpSource.createWritableStream(option) ⇒ <code>WritableStream</code>*
**Kind**: instance abstract method of [<code>HttpSource</code>](#HttpSource)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="Source"></a>

## Source ⇐ <code>EventEmitter</code>
Source(dmr-source) is data files stored locally or remotely, which can be read or written.
           <br>Source constructor need a JSON config, it usually defined in project and should be static .
           <br>createReadableStream and createWritableStream need options which is variables.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>  

* [Source](#Source) ⇐ <code>EventEmitter</code>
    * [new Source(config)](#new_Source_new)
    * *[.createReadableStream(option)](#Source+createReadableStream) ⇒ <code>ReadableStream</code>*
    * *[.createWritableStream(option)](#Source+createWritableStream) ⇒ <code>WritableStream</code>*

<a name="new_Source_new"></a>

### new Source(config)

| Param | Type |
| --- | --- |
| config | <code>JSON</code> | 

**Example**  
```js
// Get file from ftp server to local

let range = {"startTimeStamp": 1532608141511, "endTimeStamp": 1532611765781};

let output = new FileSource({
  "path": "data/log/search/{$YYYY}{$MM}{$DD}.{$hh}{$mm}-{$interval.m}",
  "read-buffer-size": 100
}).createWritableStream({"range": range});

let input = new FtpSource({
  "host": "test.hz01.demo.com",
  "path": "/home/work/speedup/{$YYYY}{$MM}{$DD}/{$hh}.gz",
  "port": "21"
}).createReadableStream();

input.pipe(output);
```
<a name="Source+createReadableStream"></a>

### *source.createReadableStream(option) ⇒ <code>ReadableStream</code>*
**Kind**: instance abstract method of [<code>Source</code>](#Source)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="Source+createWritableStream"></a>

### *source.createWritableStream(option) ⇒ <code>WritableStream</code>*
**Kind**: instance abstract method of [<code>Source</code>](#Source)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="beforeCreateCallback"></a>

## beforeCreateCallback ⇒ <code>JSON</code>
This callback is displayed as part of the Requester class.

**Kind**: global typedef  
**Returns**: <code>JSON</code> - requestParam  

| Param | Type |
| --- | --- |
| config | <code>JSON</code> | 

<a name="beforeCreateCallback"></a>

## beforeCreateCallback ⇒ <code>JSON</code>
This callback is displayed as part of the Requester class.

**Kind**: global typedef  
**Returns**: <code>JSON</code> - requestParam  

| Param | Type |
| --- | --- |
| config | <code>JSON</code> | 

<a name="beforeCreateCallback"></a>

## beforeCreateCallback ⇒ <code>JSON</code>
This callback is displayed as part of the Requester class.

**Kind**: global typedef  
**Returns**: <code>JSON</code> - requestParam  

| Param | Type |
| --- | --- |
| config | <code>JSON</code> | 

