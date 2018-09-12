/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-09-12 13:42:15
 */
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
     *
     * // if you need lazy createReadableStream try addSource
     * let httpSource = new HttpSource(config);
     * multiSource.addSource(httpSource, option).add(httpSource, option);
     *
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
     * Add Source and option, it will create Readable stream when needed
     * @param  {Source} source
     * @returns {MultiSource}
     */
    addSource(source, option) {
        this.streams.push([source, option]);
        return this;
    }
    /**
     * @implements {createReadableStream}
     */
    createReadableStream (){
        let connector = new Connector();
        let streams =  this.streams.slice();
        process.nextTick(() =>{this.next(connector, streams);});
        this.streams = [];
        return connector;
    }
    /**
     * @private
     */
    next(output, streams) {
        if (!streams.length) {
          return;
        }
        let stream = streams.shift();
        if (Array.isArray(stream)) {
          // here stream is Source which added by addSource
          stream = stream[0].createReadableStream(stream[1]);
        }
        if (stream) {
            stream.on('end', () => {
                this.next(output, streams);
            });
            stream.pipe(output, {end: streams.length === 0});
        } else {
          output.emit('error', ['ERR600', 'Null stream']);
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
