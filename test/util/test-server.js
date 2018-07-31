/*
 * @Author: qiansc 
 * @Date: 2018-07-27 16:22:15 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-07-31 20:04:38
 */


const http = require('http');
let server;
let timmer;

function start (config) {
    config =  config || {};
    stop();
    server = http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(config.content || 'hello dmr\nsuccess');
    });
    server.listen(config.port || 8088);
    
    // 终端打印如下信息
    console.log('Test Server running at http://127.0.0.1:%s/', config.port || 8088);

    timmer = setTimeout(() => {
        this.stop();
    }, config.timeOut || 2000);
}

function stop () {
    if (server){
        server.close();
        clearTimeout(timmer);
    }
}

module.exports = {
    start: start,
    stop: stop
}