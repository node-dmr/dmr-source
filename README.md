[![Build Status](https://travis-ci.org/node-dmr/dmr-source.svg?branch=master)](https://travis-ci.org/node-dmr/dmr-source)
[![Coveralls](https://img.shields.io/coveralls/node-dmr/dmr-source.svg)](https://coveralls.io/github/node-dmr/dmr-source)
[![npm package](https://img.shields.io/npm/v/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)
[![npm downloads](http://img.shields.io/npm/dm/dmr-source.svg)](https://www.npmjs.org/package/dmr-source)


# What's dmr-source

Dmr-source is source modules of dmr framework.
The source is the abstraction of the DMR framework input.
dmr-source will support different kinds of storage such as local file / remote (http / ftp) / hadoop / ssh2...

- [x] Source
- [x] FileSource
- [x] HttpSource
- [x] FtpSource
- [x] MultiSource
- [ ] SftpSource
- [ ] HadoopSource

# Features
- Stream based API
- Typescript

# Usage

to be continue...

# API

## Classes

* [Source](docs/classes/source.md)
* [FileSource](docs/classes/filesource.md)
* [FtpSource](docs/classes/ftpsource.md)
* [HttpSource](docs/classes/httpsource.md)
* [MultiSource](docs/classes/multisource.md)

## Interfaces

* [FileConfig](docs/interfaces/fileconfig.md)
* [FileReadOption](docs/interfaces/filereadoption.md)
* [FileWriteOption](docs/interfaces/filewriteoption.md)
* [FtpConfig](docs/interfaces/ftpconfig.md)
* [FtpReadOption](docs/interfaces/ftpreadoption.md)
* [HttpConfig](docs/interfaces/httpconfig.md)
* [HttpReadOption](docs/interfaces/httpreadoption.md)
* [InterfaceConfig](docs/interfaces/interfaceconfig.md)
