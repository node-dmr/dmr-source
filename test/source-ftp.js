/*
 * @Author: qiansc 
 * @Date: 2018-08-02 15:38:38 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 19:49:50
 */
const expect = require('chai').expect;
const FtpServer = require('ftp-srv');
const log =  require('./util/log');

describe("Copy File By Using SourceFile", () =>{
    let server;
    before(() => {
            server = new FtpServer('ftp://127.0.0.1:8880', {
            greeting: ['Welcome', 'to', 'the', 'jungle!'],
            anonymous: 'sillyrabbit'
            });
            server.on('login', ({username, password}, resolve, reject) => {
            if (username === 'test' && password === 'test' || username === 'anonymous') {
                resolve({root: __dirname});
            } else reject('Bad username or password');
            });
            server.listen();
    });
    it("Ftp Download", () =>{
        const FtpSource = require('../src').FtpSource;
        let ftpSource = new FtpSource({
            port: 8880,
            path: '/source-ftp-test.dict',
            host: '127.0.0.1'
        });
        let stream = ftpSource.createReadableStream();
        let content = "";
        stream.on('data', chunk => {
            content += chunk;
        });
        return new Promise((resolve, reject) => {
            stream.on('end', () => {
                log('Get Content => ', content);
                if (content === "success-ftp") {
                    log('Successfuly!');
                    resolve();
                } else {
                    log('Unmatched Content!');
                    reject();
                }
            });
        });
    });
    after(() => {
        server.close();
    });
});
