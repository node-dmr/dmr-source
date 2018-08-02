/*
 * @Author: qiansc 
 * @Date: 2018-04-10 16:23:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 09:29:27
 */
const http = require('http');
const qs = require('querystring');
const Stream = require('stream');
const Source = require('./source');

class HttpSource extends Source{
    /**
     * @constructor
     * @param {JSON} config -config of a HttpSource 
     * @extends {Source}
     * @classdesc HttpSource can provide a ReadableStream via http request
     * @example // Get httpStream from http server
     * 
     * let input = new HttpSource({
     *   "host": "localhost", "path": "/", "port": "8188"
     * }).createReadableStream(option, {
     *   beforeCreate: (option) => {return option;}
     * });
     * 
     * input.pipe(process.stdout);
     */
    constructor(config){
        config = Object.assign({
            encoding: 'utf8',
            beforeCreate: ((param) => {return param;})
        }, config);
        super(config);
    }
    /**
     * @implements {createReadableStream}
     * @param  {JSON} option
     * @param {beforeCreateCallback} option.beforeCreate
     * @returns {stream.Readable}
     */
    createReadableStream (option){
        let connector = new Connector();
        option = Object.assign({}, this.config, option);
        
        // requestParam same as https://nodejs.org/api/http.html#http_http_request_options_callback

        let requestParam = this.normalize(option, [
            'protocol', 'host', 'hostname', "family", "port", "localAddress", "socketPath", "method", 
            "path", "headers", "auth", "agent", "createConnection", "timeout", "setHost"
        ]);
        requestParam =  this.fetchOption(requestParam, option.scope || {});
        /**
         * This callback is displayed as part of the Requester class.
         * @callback beforeCreateCallback
         * @param {JSON} config
         * @returns {JSON} requestParam
         */
        requestParam = option.beforeCreate(requestParam);

        let req = http.request(requestParam, function(res) { 
            res.setEncoding(option.encoding);
            res.pipe(connector);
        });

        req.end();

        return connector;
    }
}

class Connector extends Stream.Transform {
    _transform(chunk, encoding, callback){
        this.push(chunk);
        callback();
    }
}

module.exports = HttpSource;