# dmr-source
[![Build Status](https://travis-ci.org/node-dmr/dmr-source.svg?branch=master)](https://travis-ci.org/node-dmr/dmr-source)
[![Coveralls](https://img.shields.io/coveralls/node-dmr/dmr-source.svg)](https://coveralls.io/github/node-dmr/dmr-source)
[![npm package](https://img.shields.io/npm/v/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)
[![npm downloads](http://img.shields.io/npm/dm/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)


## What`s dmr-source

Dmr-source is source modules of dmr framework.
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
<dt><a href="#Source">Source</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>Source(dmr-source) is data files stored locally or remotely, which can be read or written.
           <br>Source constructor need a JSON config, it usually defined in project and should be static .
           <br>createReadableStream and createWritableStream need options which is variables.</p>
</dd>
<dt><a href="#FileSource">FileSource</a> ⇐ <code><a href="#Source">Source</a></code></dt>
<dd><p>FileSource can provide a ReadableStream/WritableStream of local file</p>
</dd>
<dt><a href="#HttpSource">HttpSource</a> ⇐ <code><a href="#Source">Source</a></code></dt>
<dd><p>HttpSource can provide a ReadableStream via http request</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EsTemplateString">EsTemplateString</a> : <code>string</code></dt>
<dd><p>ECMAScript6 TemplateString</p>
</dd>
<dt><a href="#EsTemplateJSON">EsTemplateJSON</a> : <code>JSON</code></dt>
<dd><p>JSON which contains ECMAScript6 TemplateString attr</p>
</dd>
<dt><a href="#beforeCreateCallback">beforeCreateCallback</a> ⇒ <code>JSON</code></dt>
<dd><p>beforeCreateCallback will be called before creating a readable / writable stream</p>
</dd>
</dl>

<a name="Source"></a>

## Source ⇐ <code>EventEmitter</code>
Source(dmr-source) is data files stored locally or remotely, which can be read or written.
           <br>Source constructor need a JSON config, it usually defined in project and should be static .
           <br>createReadableStream and createWritableStream need options which is variables.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>  

* [Source](#Source) ⇐ <code>EventEmitter</code>
    * [new Source(config)](#new_Source_new)
    * *[.createReadableStream(option)](#Source+createReadableStream) ⇒ <code>stream.Readable</code>*
    * *[.createWritableStream(option)](#Source+createWritableStream) ⇒ <code>stream.Writable</code>*

<a name="new_Source_new"></a>

### new Source(config)

| Param | Type |
| --- | --- |
| config | [<code>EsTemplateJSON</code>](#EsTemplateJSON) | 

**Example**  
```js
// Get file from ftp server to local

const Range = require('dmr-util').range;
let range = new Range({"startTimeStamp": 1532608141511, "endTimeStamp": 1532611765781});
let scope = range.toScope(); // such as 
// scope = {"YYYY":"2018", "MM": "12", "DD":"01", "hh": "01", "mm": "00", "ss": "00", interval: {"m": 60, "s": "3600", "h": "1"}}

let output = new require('dmr-source').FileSource({
  "path": "`/home/work/data/log/search/{$YYYY}{$MM}{$DD}.{$hh}{$mm}-{$interval.m}`",
  "highWaterMark": 1024
}).createWritableStream({
   scope: scope
});

let input = new require('dmr-source').FtpSource({
  "host": "test.hz01.demo.com",
  "path": "`/home/work/speedup/{$YYYY}{$MM}{$DD}/{$hh}.gz`",
  "port": "21"
}).createReadableStream({
   scope: scope
});

// load ftp file from ftp://test.hz01.demo.com:21/home/work/speedup/20181201/01.gz
// save to local file at /home/work/data/log/search/20181201.0100-60

input.pipe(output);
```
<a name="Source+createReadableStream"></a>

### *source.createReadableStream(option) ⇒ <code>stream.Readable</code>*
**Kind**: instance abstract method of [<code>Source</code>](#Source)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="Source+createWritableStream"></a>

### *source.createWritableStream(option) ⇒ <code>stream.Writable</code>*
**Kind**: instance abstract method of [<code>Source</code>](#Source)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="FileSource"></a>

## FileSource ⇐ [<code>Source</code>](#Source)
FileSource can provide a ReadableStream/WritableStream of local file

**Kind**: global class  
**Extends**: [<code>Source</code>](#Source)  

* [FileSource](#FileSource) ⇐ [<code>Source</code>](#Source)
    * [new FileSource([config])](#new_FileSource_new)
    * [.createWritableStream([option])](#FileSource+createWritableStream) ⇒ <code>stream.Writable</code>
    * [.createReadableStream([option])](#FileSource+createReadableStream) ⇒ <code>stream.Readable</code>

<a name="new_FileSource_new"></a>

### new FileSource([config])

| Param | Type | Description |
| --- | --- | --- |
| [config] | [<code>EsTemplateJSON</code>](#EsTemplateJSON) | config of a FileSource , besides following options also support other param <br> you can see  https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options |
| [config.path] | <code>string</code> \| [<code>EsTemplateString</code>](#EsTemplateString) |  |
| [config.encoding] | <code>string</code> \| [<code>EsTemplateString</code>](#EsTemplateString) |  |
| [config.highWaterMark] | <code>int</code> |  |

**Example**  
```js
// copy a big log filelet fileSource = new FileSource({"file": "`/home/work/dmr.${date}.log`"});let input = fileSource.createReadableStream({scope: {"date": "20180801"}});let output = fileSource.createWritableStream({scope: {"date": "20180802"}});input.pipe(output);
```
<a name="FileSource+createWritableStream"></a>

### fileSource.createWritableStream([option]) ⇒ <code>stream.Writable</code>
**Kind**: instance method of [<code>FileSource</code>](#FileSource)  
**Implements**: <code>createWritableStream</code>  
**Overrides**: [<code>createWritableStream</code>](#Source+createWritableStream)  

| Param | Type | Description |
| --- | --- | --- |
| [option] | <code>JSON</code> | config of a FileSource , besides following options also support other param <br> you can see  https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options |
| [option.scope] | <code>JSON</code> | esTemplateString variable |
| [option.path] | <code>string</code> |  |
| [option.encoding] | <code>string</code> |  |
| [option.highWaterMark] | <code>int</code> |  |
| [option.beforeCreate] | [<code>beforeCreateCallback</code>](#beforeCreateCallback) |  |

<a name="FileSource+createReadableStream"></a>

### fileSource.createReadableStream([option]) ⇒ <code>stream.Readable</code>
**Kind**: instance method of [<code>FileSource</code>](#FileSource)  
**Implements**: <code>createReadableStream</code>  
**Overrides**: [<code>createReadableStream</code>](#Source+createReadableStream)  

| Param | Type | Description |
| --- | --- | --- |
| [option] | <code>JSON</code> | config of a FileSource , besides following options also support other param <br> you can see  https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options |
| [option.scope] | <code>JSON</code> | esTemplateString variable |
| [option.path] | <code>string</code> |  |
| [option.encoding] | <code>string</code> |  |
| [option.highWaterMark] | <code>int</code> |  |
| [option.beforeCreate] | [<code>beforeCreateCallback</code>](#beforeCreateCallback) |  |

<a name="HttpSource"></a>

## HttpSource ⇐ [<code>Source</code>](#Source)
HttpSource can provide a ReadableStream via http request

**Kind**: global class  
**Extends**: [<code>Source</code>](#Source)  

* [HttpSource](#HttpSource) ⇐ [<code>Source</code>](#Source)
    * [new HttpSource([config])](#new_HttpSource_new)
    * [.createReadableStream([option])](#HttpSource+createReadableStream) ⇒ <code>stream.Readable</code>
    * *[.createWritableStream(option)](#Source+createWritableStream) ⇒ <code>stream.Writable</code>*

<a name="new_HttpSource_new"></a>

### new HttpSource([config])

| Param | Type | Description |
| --- | --- | --- |
| [config] | [<code>EsTemplateJSON</code>](#EsTemplateJSON) | config of a HttpSource, besides following options also support other param <br> you can see  https://nodejs.org/api/http.html#http_http_request_options_callback |
| [config.protocol] | <code>string</code> |  |
| [config.host] | <code>string</code> |  |
| [config.port] | <code>string</code> |  |
| [config.path] | <code>string</code> |  |

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

### httpSource.createReadableStream([option]) ⇒ <code>stream.Readable</code>
**Kind**: instance method of [<code>HttpSource</code>](#HttpSource)  
**Implements**: <code>createReadableStream</code>  
**Overrides**: [<code>createReadableStream</code>](#Source+createReadableStream)  

| Param | Type | Description |
| --- | --- | --- |
| [option] | <code>JSON</code> | config of a FileSource , besides following options also support other param <br> you can see  https://nodejs.org/api/http.html#http_http_request_options_callback |
| [option.scope] | <code>JSON</code> | esTemplateString variable |
| [option.protocol] | <code>string</code> |  |
| [option.host] | <code>string</code> |  |
| [option.port] | <code>string</code> |  |
| [option.path] | <code>string</code> |  |
| [option.beforeCreate] | [<code>beforeCreateCallback</code>](#beforeCreateCallback) |  |

<a name="Source+createWritableStream"></a>

### *httpSource.createWritableStream(option) ⇒ <code>stream.Writable</code>*
**Kind**: instance abstract method of [<code>HttpSource</code>](#HttpSource)  

| Param | Type |
| --- | --- |
| option | <code>JSON</code> | 

<a name="EsTemplateString"></a>

## EsTemplateString : <code>string</code>
ECMAScript6 TemplateString

**Kind**: global typedef  
**Example**  
```js
let estplstring = '`today is ${date}`';
```
<a name="EsTemplateJSON"></a>

## EsTemplateJSON : <code>JSON</code>
JSON which contains ECMAScript6 TemplateString attr

**Kind**: global typedef  
**Example**  
```js
let estpljson = {
 'esinfo': '`today is ${date}`',
 'info': 'normal info'
};
```
<a name="beforeCreateCallback"></a>

## beforeCreateCallback ⇒ <code>JSON</code>
beforeCreateCallback will be called before creating a readable / writable stream

**Kind**: global typedef  
**Returns**: <code>JSON</code> - requestParam  

| Param | Type |
| --- | --- |
| config | <code>JSON</code> | 

