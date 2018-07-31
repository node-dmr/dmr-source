/*
 * @Author: qiansc 
 * @Date: 2018-04-10 16:23:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-07-31 19:41:51
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
            encoding: 'utf8'
        }, config);
        super(config);
    }
    /**
     * @implements
     * @param  {JSON} option
     * @param {beforeCreateCallback} option.beforeCreate
     */
    createReadableStream (option){
        let self = this;
        // connector can both be read / write
        let connector = new Connector();
        option = Object.assign({}, this.config, option);
        
        // requestParam same as https://nodejs.org/api/http.html#http_http_request_options_callback

        let requestParam = this.normalize(option, [
            'protocol',
            'host',
            'hostname',
            "family",
            "port",
            "localAddress",
            "socketPath",
            "method",
            "path",
            "headers",
            "auth",
            "agent",
            "createConnection",
            "timeout",
            "setHost"
        ]);
        
        if (option.beforeCreate) {
            /**
             * This callback is displayed as part of the Requester class.
             * @callback beforeCreateCallback
             * @param {JSON} config
             * @returns {JSON} requestParam
             */
            requestParam = option.beforeCreate(requestParam);
        }

        var req = http.request(requestParam, function(res) { 
            // log.info('L8', 'STATUS: ' + res.statusCode); 
            // log.info('L8', 'HEADERS: ' + JSON.stringify(res.headers)); 
            res.setEncoding(self.encoding);
            res.pipe(connector);

            // res.on('end', function(){
            //     self.emit('end', self);
            // });
        }); 

        // req.on('error', function(e) {
            // log.warn('problem with request: ' + e.message); 
        // });
        // log.info('L5', 'FROM\t' , requestParam.hostname + ':' + requestParam.port + requestParam.path);
        req.end();
        return connector;
    }
    
    // getRequestParam(config, option) {
    //     // 获取http请求的参数
    //     var param = {};
        
    //     if(option.range) {
    //         var requestParamFormatter = new RangeFormatter(option.range);
    //         param = requestParamFormatter.format(config.param || {}, ap);
    //     }
        
    //     return  {
    //         hostname: config.host, 
    //         port: config.port, 
    //         path: config.path + '?' + qs.stringify(param),
    //         method: config.method || 'GET'
    //     };
    // }
}

class Connector extends Stream.Transform {
    _transform(chunk, encoding, callback){
        this.push(chunk);
        callback();
    }
}

module.exports = HttpSource;