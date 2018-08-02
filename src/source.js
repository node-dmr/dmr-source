/*
 * @Author: qiansc 
 * @Date: 2018-04-10 17:02:27 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 09:59:13
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
     * const Range = require('dmr-util').range;
     * let range = new Range({"startTimeStamp": 1532608141511, "endTimeStamp": 1532611765781});
     * let scope = range.toScope(); // such as 
     * // scope = {"YYYY":"2018", "MM": "12", "DD":"01", "hh": "01", "mm": "00", "ss": "00", interval: {"m": 60, "s": "3600", "h": "1"}}
     * 
     * let output = new require('dmr-source').FileSource({
     *   "path": "`/home/work/data/log/search/{$YYYY}{$MM}{$DD}.{$hh}{$mm}-{$interval.m}`",
     *   "highWaterMark": 1024
     * }).createWritableStream({
     *    scope: scope
     * });
     * 
     * let input = new require('dmr-source').FtpSource({
     *   "host": "test.hz01.demo.com",
     *   "path": "`/home/work/speedup/{$YYYY}{$MM}{$DD}/{$hh}.gz`",
     *   "port": "21"
     * }).createReadableStream({
     *    scope: scope
     * });
     * 
     * // load ftp file from ftp://test.hz01.demo.com:21/home/work/speedup/20181201/01.gz
     * // save to local file at /home/work/data/log/search/20181201.0100-60
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
     * @returns {stream.Readable}
     */
    createReadableStream(option) {
        /**
         * This callback is displayed as part of the Requester class.
         * @callback beforeCreateCallback
         * @param {JSON} config
         * @returns {JSON} requestParam
         */
        option = option.beforeCreate(option);
        this.emit('error', new Error("Must be implemented by subclass!"));
    }

    /**
     * @abstract
     * @param {JSON} option
     * @returns {stream.Writable}
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

    /**
     * @param  {object} option - option which contains es6 template string  
     * @param  {object} scope - template variable
     * @example
     *  this.fetchOption({
     *      "url": "`http://localhost/${YYYY}${MM}${DD}.log`", "info": "TEST${YYYY}"
     *  }, {
     *      "YYYY": "2018", "MM": "08", "DD": "01"
     *  });
     *  
     *  // {"url": "http://localhost/20180801.log", "info": "TEST${YYYY}"}
     */
    fetchOption(option, scope) {
        let scopeKeys = [], scopeValues = [];
        Object.keys(scope).forEach(key => {
            scopeKeys.push(key);
            scopeValues.push(scope[key]);
        });
        
        let newOption = {};
        Object.keys(option).forEach(key => {
            if (typeof option[key] === "string" && option[key].match(/^\`.*\`$/)) {
                let str = '(' + scopeKeys.join(',') + ') => ' + option[key];
                let func = eval.call(null, str);
                newOption[key] = func.apply(null, scopeValues);
            } else if(typeof option[key] === "object") {
                newOption[key] = this.fetchOption(option[key], scope);
            } else {
                newOption[key] =  option[key];
            }
        });
        return newOption;
    }
}

module.exports = Source;