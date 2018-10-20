
[![Build Status](https://travis-ci.org/node-dmr/dmr-source.svg?branch=master)](https://travis-ci.org/node-dmr/dmr-source) [![Coveralls](https://img.shields.io/coveralls/node-dmr/dmr-source.svg)](https://coveralls.io/github/node-dmr/dmr-source) [![npm package](https://img.shields.io/npm/v/dmr-source.svg)](https://www.npmjs.org/package/dmr-source) [![npm downloads](http://img.shields.io/npm/dm/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)

What's dmr-source
=================

Dmr-source is source modules of dmr framework. The source is the abstraction of the DMR framework input. dmr-source will support different kinds of storage such as local file / remote (http / ftp) / hadoop / ssh2...

*    Source
*    FileSource
*    HttpSource
*    FtpSource
*    MultiSource
*    SftpSource
*    HadoopSource

Features
========

*   ES6Template construct config make it easy to be reused
*   Stream based API

Usage
=====

## Index

### Classes

* [Connector](classes/connector.md)
* [FileSource](classes/filesource.md)
* [FtpSource](classes/ftpsource.md)
* [HttpSource](classes/httpsource.md)
* [MultiSource](classes/multisource.md)
* [Source](classes/source.md)

### Interfaces

* [FileConfig](interfaces/fileconfig.md)
* [FileReadOption](interfaces/filereadoption.md)
* [FileWriteOption](interfaces/filewriteoption.md)
* [FtpConfig](interfaces/ftpconfig.md)
* [FtpReadOption](interfaces/ftpreadoption.md)
* [HttpConfig](interfaces/httpconfig.md)
* [HttpReadOption](interfaces/httpreadoption.md)
* [InterfaceConfig](interfaces/interfaceconfig.md)

---

