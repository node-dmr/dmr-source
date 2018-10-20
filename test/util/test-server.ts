/*
 * @Author: qiansc
 * @Date: 2018-07-27 16:22:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-19 18:40:26
 */

import * as http from "http";
let server;
let timmer;

export function start(config) {
    config =  config || {};
    stop();
    server = http.createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end(config.content || "hello dmr\nsuccess");
    });
    server.listen(config.port || 8088);
    // 终端打印如下信息
    console.log("\x1B[90mTest Server running at http://127.0.0.1:%s/\x1B[39m", config.port || 8088);

    timmer = setTimeout(() => {
        this.stop();
    }, config.timeOut || 2000);
}

export function stop() {
    if (server) {
        server.close();
        clearTimeout(timmer);
    }
}
