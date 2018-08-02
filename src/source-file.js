/*
 * @Author: qiansc 
 * @Date: 2018-04-11 19:57:16 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 09:26:09
 */
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra')
const Source = require('./source');
// OPTION_KEYS same as https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
const OPTION_KEYS = ["path", "flags", "encoding", "fd", "mode", "autoClose", "start", "end", "highWaterMark"];

class FileSource extends Source{
    /**
     * @constructor
     * @param {JSON} config -config of a FileSource 
     * @extends {Source}
     * @classdesc FileSource can provide a ReadableStream/WritableStream of local file
     * @example // copy a big log file
     * 
     * let fileSource = new FileSource({"file": "`/home/work/dmr.${date}.log`"});
     * let input = fileSource.createReadableStream({scope: {"date": "20180801"}});
     * let output = fileSource.createWritableStream({scope: {"date": "20180802"}});
     * input.pipe(output);
     */
    constructor(config){
        config = Object.assign({
            encoding: 'utf8',
            highWaterMark: 10 * 1024,
            beforeCreate: ((param) => {return param;})
        }, config);
        super(config);
    }
    /**
     * @implements {createWritableStream}
     * @param  {JSON} option
     * @param {beforeCreateCallback} option.beforeCreate
     * @returns {stream.Writable}
     */
    createWritableStream (option){
        option = Object.assign({}, this.config, option);
        let options = this.normalize(option, OPTION_KEYS);
        options =  this.fetchOption(options, option.scope || {});
        /**
         * This callback is displayed as part of the Requester class.
         * @callback beforeCreateCallback
         * @param {JSON} config
         * @returns {JSON} requestParam
         */
        options = option.beforeCreate(options);
        // create baseUrl if not exists
        let baseUrl = path.dirname(options.path);
        
        fse.ensureDirSync(baseUrl);

        let writer = fs.createWriteStream(options.path, options);
        // this.emit('create', file, writer);
        return writer;
    }
    /**
     * @implements {createReadableStream}
     * @param  {JSON} option
     * @param {beforeCreateCallback} option.beforeCreate
     * @returns {stream.Readable}
     */
    createReadableStream (option){
        option = Object.assign({}, this.config, option);
        let options = this.normalize(option, OPTION_KEYS);
        options =  this.fetchOption(options, option.scope || {});
        /**
         * This callback is displayed as part of the Requester class.
         * @callback beforeCreateCallback
         * @param {JSON} config
         * @returns {JSON} requestParam
         */
        options = option.beforeCreate(options);
        // create baseUrl if not exists
        let reader = fs.createReadStream(options.path, options);
        // this.emit('create', file, writer);
        return reader;
    }
}

module.exports = FileSource;