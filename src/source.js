/*
 * @Author: qiansc 
 * @Date: 2018-04-10 17:02:27 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-07-31 18:51:58
 */
const EventEmitter = require('events');


class Source extends EventEmitter{
    /**
     * @extends {EventEmitter}
     * @param  {JSON} config 
     * @classdesc Source(dmr-source) is data files stored locally or remotely, which can be read or written.
     *            <br>Source constructor need a JSON config, it usually defined in project and should be static .
     *            <br>createReadableStream and createWritableStream need options which is variables.
     * @example // Get file from ftp server to local
     * 
     * let range = {"startTimeStamp": 1532608141511, "endTimeStamp": 1532611765781};
     * 
     * let output = new FileSource({
     *   "path": "data/log/search/{$YYYY}{$MM}{$DD}.{$hh}{$mm}-{$interval.m}",
     *   "read-buffer-size": 100
     * }).createWritableStream({"range": range});
     * 
     * let input = new FtpSource({
     *   "host": "test.hz01.demo.com",
     *   "path": "/home/work/speedup/{$YYYY}{$MM}{$DD}/{$hh}.gz",
     *   "port": "21"
     * }).createReadableStream();
     * 
     * input.pipe(output);
     * 
     */
    constructor (config) {
        super();
        this.config = config;
    }

    /**
     * @abstract
     * @param {JSON} option
     * @returns {ReadableStream}
     */
    createReadableStream(option) {
        this.emit('error', new Error("Must be implemented by subclass!"));
    }

    /**
     * @abstract
     * @param {JSON} option
     * @returns {WritableStream}
     */
    createWritableStream(option) {
        this.emit('error', new Error("Not yet to be implemented!"));
    }
    /**
     * @private
     * @param  {JSON} option
     * @param  {array} keys
     */
    normalize(option, keys) {
        let newOption = {};
        keys.forEach(key => {
            if (option[key] !== undefined) {
                newOption[key] = option[key];
            }
        });
        return newOption;
    }
}

module.exports = Source;