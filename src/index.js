/*
 * @Author: qiansc
 * @Date: 2018-07-24 10:38:11
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-09-12 09:47:28
 */
const Source = require('./source');
const FileSource = require('./source-file');
const HttpSource = require('./source-http');
const FtpSource = require('./source-ftp');
const MultiSource = require('./source-multi');

module.exports = {
    Source: Source,
    FileSource: FileSource,
    HttpSource: HttpSource,
    FtpSource: FtpSource,
    MultiSource: MultiSource
};
