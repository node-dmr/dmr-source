/*
 * @Author: qiansc 
 * @Date: 2018-08-02 15:38:38 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 18:35:06
 */
const expect = require('chai').expect;
const FtpServer = require('ftp-srv');

describe("Copy File By Using SourceFile", () =>{
    let server;
    before(() => {
        describe("Start Ftp Server", () =>{
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
                console.log('Get Content => ', content);
                if (content === "success-ftp") {
                    console.log('Successfuly!');
                    resolve();
                } else {
                    console.log('Unmatched Content!');
                    reject();
                }
            });
            setTimeout(() => {
                console.log('Failed load FtpSource ');
                reject();
            }, 500);
        }).then(() => {
            server.close();
        }).catch(() => {
            server.close();
        });
    });
});
