/*
 * @Author: qiansc 
 * @Date: 2018-04-10 17:02:27 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-07-24 18:15:37
 */
const EventEmitter = require('events');


class Source extends EventEmitter{
    constructor (config) {
        super();
        this.config = config;
    }
    createReadStream() {
        this.emit('error', new Error("Unrealizated createReadStream function"));
    }
}

module.exports = Source;