/*
 * @Author: qiansc 
 * @Date: 2018-04-10 16:23:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 13:47:07
 */
const http = require('http');
const qs = require('querystring');
const Stream = require('stream');
const Source = require('./source');

class HttpSource extends Source{
    /**
     * @constructor
     * @param {EsTemplateJSON} [config] -config of a HttpSource, besides following options also support other param <br> you can see  https://nodejs.org/api/http.html#http_http_request_options_callback
     * @param {string|EsTemplateString} [config.protocol]
     * @param {string|EsTemplateString} [config.host]
     * @param {string|EsTemplateString} [config.port]
     * @param {string|EsTemplateString} [config.path]
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
     * @param {JSON} [option] - option of a FileSource, it will overriding the config param, option param should be string, not TemplateString. For more param please refer to  construct config.
     * @param {JSON} [option.scope] - esTemplateString variable
     * @param {string} [option.protocol]
     * @param {string} [option.host]
     * @param {string} [option.port]
     * @param {string} [option.path]
     * @param {beforeCreateCallback} [option.beforeCreate]
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