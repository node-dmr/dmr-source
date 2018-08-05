/*
 * @Author: qiansc 
 * @Date: 2018-08-02 15:38:38 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-05 20:21:51
 */
const expect = require('chai').expect;
const path = require('path');
const log =  require('./util/log');
const ds = require('../src');
const fse = require('fs-extra');
const FileSource = ds.FileSource;
let ep = path.resolve(__dirname, './source-ftp-test.dict');

describe("Copy FileSoucres to One FileSoucre", () =>{
    let input0, input1, input2;
    let fileSoucre = new FileSource({path: ep});
    let op = path.resolve(__dirname, './multi-test.log');
    let output = new FileSource({path: op}).createWritableStream();
    
    before(() => {
        input0 = fileSoucre.createReadableStream();
        input1 = fileSoucre.createReadableStream();
        input2 = fileSoucre.createReadableStream();
        
    });
    it("FileSoucres Copy Finished", () =>{
        let multi = new ds.MultiSource();
        multi.add(input0).add(input1).add(input2);
        let stream = multi.createReadableStream();
        stream.pipe(output);

        return new Promise((resolve, reject) => {
            output.on('finish', () => {
                let origin = fse.readFileSync(ep).toString();
                let result = fse.readFileSync(op).toString();
                if (result === origin + origin + origin) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    });

    after(() => {
        fse.removeSync(op);
    });
});

describe("FileSoucres Errors Handle", () =>{
    let input0, input1, input2;
    let fileSoucre = new FileSource({path: ep});
    let op = path.resolve(__dirname, './multi-test0.log');
    let output = new FileSource({path: op}).createWritableStream();
    let input3;

    before(() => {
        input0 = fileSoucre.createReadableStream();
        input1 = fileSoucre.createReadableStream();
        input2 = fileSoucre.createReadableStream();
    });
    it("FileSoucres Errors Handle Finished", () =>{
        input3 = new FileSource({path: path.resolve(__dirname, './error.dict')}).createReadableStream();
        let multi = new ds.MultiSource();
        multi.add(input0).add(input1).add(input3).add(input2);
        let stream = multi.createReadableStream();
        stream.pipe(output);

        return new Promise((resolve) => {
            output.on('finish', () => {
                reject();
            });
            stream.on('error', (err) => {
                resolve();
            });
        });
    });
    
    after(() => {
        fse.removeSync(op);
    });
});