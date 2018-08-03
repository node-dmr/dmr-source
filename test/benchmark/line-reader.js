/*
 * @Author: qiansc 
 * @Date: 2018-08-03 17:40:22 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-03 19:41:33
 */
const path = require('path');
let FileSource = require('../../src').FileSource;
let LineReaderA = require('./dmr-line');
// npm install line-reader
let LineReaderB = require('line-reader');
// npm install line-by-line
let LineByLineReader = require('line-by-line');

/**
    no use  line-reader     dmr-line        line-by-line
    25655   35793   26476   25368
    20166   34495   27487   25003
    21588   36658   28898   26718
 */




let fileSource = new FileSource({path: path.resolve('d:/work/rs.log')});
let fileSourceA = new FileSource({path: path.resolve('d:/work/copyA.log')});

function test() {
    return new Promise((resolve) => {
        let input = fileSource.createReadableStream();
        let output = fileSourceA.createWritableStream();
        input.pipe(output);
        input.on('end', function() {
            resolve();
        });
    });
}

function testA() {
    return new Promise((resolve) => {
        let input = fileSource.createReadableStream();
        let output = fileSourceA.createWritableStream();
        // let lr = new LineReaderB();
        LineReaderB.eachLine(input, function(line) {
            output.write(line);
            output.write('\n');
        });
        input.on('end', function() {
            resolve();
        });
    });
}

function testB() {
    return new Promise((resolve) => {
        let input = fileSource.createReadableStream();
        let output = fileSourceA.createWritableStream();
        let lr = new LineReaderA();
        input.pipe(lr);
        lr.on("data", function(line) {
            output.write(line);
            output.write('\n');
        });
        input.on('end', function() {
            resolve();
        });
    });
}

function testC() {
    return new Promise((resolve) => {
        let input = fileSource.createReadableStream();
        let output = fileSourceA.createWritableStream();
        let lr = new LineByLineReader(input);
        lr.on("line", function(line) {
            output.write(line);
            output.write('\n');
        });
        input.on('end', function() {
            resolve();
        });
    });
}

let time = new Date().getTime();
test().then(() => {
    let time0 = new Date().getTime() - time;
    time = new Date().getTime();
    testA().then(() => {
        let timeA = new Date().getTime() - time;
        time = new Date().getTime();
        testB().then(() => {
            let timeB = new Date().getTime() - time;
            time = new Date().getTime();
            testC().then(() => {
                let timeC = new Date().getTime() - time;
                end(time0, timeA, timeB, timeC);
            });
        });
    });
});
function end (time0, timeA, timeB, timeC) {
    console.log('%s\t%s\t%s\t%s', 'no use', 'line-reader', 'dmr-line', 'line-by-line');
    console.log('%s\t%s\t%s\t%s', time0, timeA, timeB, timeC);
}

// input.pipe(lr).pipe(output);







// input.pipe(process.stdout);

// console.log(fs.existsSync(file));