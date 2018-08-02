/*
 * @Author: qiansc 
 * @Date: 2018-08-01 14:44:35 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 19:37:50
 */
const expect = require('chai').expect;
const FileSource = require('../src').FileSource;
const path = require('path');
const fse = require('fs-extra');
const TEST_JSON = {"status": "200"};
const log =  require('./util/log');

describe("Copy File By Using SourceFile", () =>{
    let file, file0, inSource, outSource, file0dir, input, output, promise;
    before(() => {
        file = path.resolve(__dirname, './tmp.log');
        fse.removeSync(file);
        fse.writeJsonSync(file, TEST_JSON);
        file0dir = path.resolve(__dirname, './tmp/file/');
        fse.removeSync(file0dir);
    });
    it("TEST", () => {
        log('Init Output / Input Stream');
        inSource = new FileSource({path: file});
        file0 = path.resolve(file0dir, './out.log');
        outSource = new FileSource({path: file0});
        input = inSource.createReadableStream({
            beforeCreate: (option) => {log('input option', option); return option;}
        });
        output = outSource.createWritableStream({
            beforeCreate: (option) => {log('output option', option); return option;}
        });
        input.pipe(output);
        input0 = inSource.createReadableStream();
        return new Promise((resolve, reject) => {
            input.on('end', function(){
                log('Input End!');
                let json = fse.readJsonSync(file0);
                if (JSON.stringify(TEST_JSON) === JSON.stringify(json)) {
                    log('Successfully Copy');
                    resolve();
                } else {
                    log('Failed to Copy');
                    reject();
                }
            });
        }).then(() => {
            setTimeout(() => {
                fse.removeSync(path.resolve(file));
                fse.removeSync(path.resolve(file0));
                fse.removeSync(path.resolve(__dirname, './tmp/file'));
                fse.removeSync(path.resolve(__dirname, './tmp/'));
            }, 300);
        });
    });
});