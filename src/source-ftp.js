/*
 * @Author: qiansc 
 * @Date: 2018-04-10 16:23:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 18:34:46
 */
const Client = require('ftp');
const Stream = require('stream');
const Source = require('./source');

class FtpSource extends Source{
    /**
     * @constructor
     * @param {EsTemplateJSON} [config] -config of a FtpSource, besides following options also support other param <br> you can see  https://www.npmjs.com/package/ftp
     * @param {string|EsTemplateString} config.host
     * @param {string|EsTemplateString} config.path
     * @param {integer} [config.port]
     * @param {string|EsTemplateString} [config.user]
     * @param {string|EsTemplateString} [config.password]
     * @extends {Source}
     * @classdesc FtpSource can provide a ReadableStream via ftp request
     * @example // Get ftpStream from ftp server
     * 
     * let input = new FtpSource({
     *   "host": "localhost", "path": "/home/work/nginx/log/access.${YYYY+MM+DD}.${hh}.log", "port": "21"
     * }).createReadableStream({
     *  scope: {"YYYY": "2018", "MM": "08", "DD": "01", "hh":"12"}
     * });
     * 
     * input.pipe(process.stdout);
     */
    constructor(config){
        config = Object.assign({
            encoding: 'utf8',
            beforeCreate: ((param) => {return param;}),
            port: "21"
        }, config);
        super(config);
    }
    /**
     * @implements {createReadableStream}
     * @param {JSON} [option] - option of a FileSource, it will overriding the config param, option param should be string, not TemplateString. For more param please refer to  construct config.
     * @param {JSON} [option.scope] - esTemplateString variable
     * @param {string} [config.host]
     * @param {string} [config.path]
     * @param {integer} [config.port]
     * @param {string} [config.user]
     * @param {string} [config.password]
     * @param {beforeCreateCallback} [option.beforeCreate]
     * @returns {stream.Readable}
     */
    createReadableStream (option){
        let connector = new Connector();
        option = Object.assign({}, this.config, option);
        
        // options same as https://www.npmjs.com/package/ftp

        let options = this.normalize(option, [
            "path", 'host', 'port', "secure", "secureOptions", "user",
            "password", "connTimeout", "pasvTimeout", "keepalive"
        ]);

        options = this.fetchOption(options, option.scope || {});
        options = option.beforeCreate(options);

        let client = new Client();
        client.on('ready', function() {
            client.get(options.path, function(err, stream) {
//            if (err) throw err;
            stream.pipe(connector);
            stream.on('close', function() {
                client.end();
                // self.emit('end', self);
            });
          });
        });
        // connect to localhost:21 as anonymous
        client.connect(options);

        return connector;
    }
}

class Connector extends Stream.Transform {
    _transform(chunk, encoding, callback){
        this.push(chunk);
        callback();
    }
}

module.exports = FtpSource;