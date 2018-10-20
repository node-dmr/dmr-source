[DMR Source](../README.md) > [FtpConfig](../interfaces/ftpconfig.md)

# Interface: FtpConfig

## Hierarchy

↳  [FtpReadOption](ftpreadoption.md)

**↳ FtpConfig**

## Index

### Properties

* [connTimeout](ftpconfig.md#conntimeout)
* [host](ftpconfig.md#host)
* [keepalive](ftpconfig.md#keepalive)
* [password](ftpconfig.md#password)
* [pasvTimeout](ftpconfig.md#pasvtimeout)
* [path](ftpconfig.md#path)
* [port](ftpconfig.md#port)
* [secure](ftpconfig.md#secure)
* [secureOptions](ftpconfig.md#secureoptions)
* [user](ftpconfig.md#user)

---

## Properties

<a id="conntimeout"></a>

### `<Optional>` connTimeout

**● connTimeout**: *`number`*

*Inherited from Options.connTimeout*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:47*

How long (in milliseconds) to wait for the control connection to be established. Default: 10000

___
<a id="host"></a>

### `<Optional>` host

**● host**: *`string`*

*Inherited from Options.host*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:22*

The hostname or IP address of the FTP server. Default: 'localhost'

___
<a id="keepalive"></a>

### `<Optional>` keepalive

**● keepalive**: *`number`*

*Inherited from Options.keepalive*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:55*

How often (in milliseconds) to send a 'dummy' (NOOP) command to keep the connection alive. Default: 10000

___
<a id="password"></a>

### `<Optional>` password

**● password**: *`string`*

*Inherited from Options.password*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:43*

Password for authentication. Default: 'anonymous@'

___
<a id="pasvtimeout"></a>

### `<Optional>` pasvTimeout

**● pasvTimeout**: *`number`*

*Inherited from Options.pasvTimeout*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:51*

How long (in milliseconds) to wait for a PASV data connection to be established. Default: 10000

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`string`*

*Inherited from [FtpReadOption](ftpreadoption.md).[path](ftpreadoption.md#path)*

*Defined in source-ftp.ts:65*

___
<a id="port"></a>

### `<Optional>` port

**● port**: *`number`*

*Inherited from Options.port*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:26*

The port of the FTP server. Default: 21

___
<a id="secure"></a>

### `<Optional>` secure

**● secure**: * `string` &#124; `boolean`
*

*Inherited from Options.secure*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:31*

Set to true for both control and data connection encryption, 'control' for control connection encryption only, or 'implicit' for implicitly encrypted control connection (this mode is deprecated in modern times, but usually uses port 990) Default: false

___
<a id="secureoptions"></a>

### `<Optional>` secureOptions

**● secureOptions**: *`ConnectionOptions`*

*Inherited from Options.secureOptions*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:35*

Additional options to be passed to tls.connect(). Default: (none)

___
<a id="user"></a>

### `<Optional>` user

**● user**: *`string`*

*Inherited from Options.user*

*Defined in /Users/qiansicheng/github/dmr-source/node_modules/@types/ftp/index.d.ts:39*

Username for authentication. Default: 'anonymous'

___

