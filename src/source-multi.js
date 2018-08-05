/*
 * @Author: qiansc 
 * @Date: 2018-04-10 16:23:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-05 20:24:39
 */
const http = require('http');
const Stream = require('stream');
const Source = require('./source');

class MultiSource extends Source{
    /**
     * @constructor
     * @param {EsTemplateJSON} [config] - config of a MultiSource
     * @extends {Source}
     * @classdesc MultiSource can provide a ReadableStream which composed of multiple readable streams
     * @example // MultiSource
     * 
     * let multiSource = new MultiSource();
     * multiSource.add(stream1).add(stream2).add(stream3);
     * let input = multiSource.createReadableStream();
     * 
     * input.on('error', err => {
     *    // error will be emit when any input stream error
     *    // and output is nothing
     * });
     * 
     * input.pipe(process.stdout);
     */
    constructor(config){
        config = Object.assign({
            encoding: 'utf8',
        }, config);
        super(config);
        this.streams = [];
    }
    /**
     * Add a Readable stream. It will be failed when createReadableStream has been called
     * @param  {stream.Readable} stream
     * @returns {MultiSource}
     */
    add(stream) {
        this.streams.push(stream);
        return this;
    }
    /**
     * @implements {createReadableStream}
     */
    createReadableStream (){
        let connector = new Connector();
        // handle error
        this.streams.forEach(stream => {
            stream.on('error', (err) => {
                connector.emit('error', err);
            });
        });
        this.next(connector, this.streams.slice(), true);
        this.streams = [];
        return connector;
    }
    /**
     * @private
     */
    next(output, streams, start) {
        let stream = streams.shift();
        if (stream) {
            stream.on('end', () => {
                this.next(output, streams);
            });
            stream.pipe(output, {end: streams.length === 0});
        }
    }
}

class Connector extends Stream.Transform {
    _transform(chunk, encoding, callback){
        this.push(chunk);
        callback();
    }
}

module.exports = MultiSource;