const expect = require('chai').expect;
const HttpSource= require('../src/source-http');
const TestServer = require('./util/test-server');
const TestConfig = {port: 8099 , content: 'hello dmr\nsuccess', timeOut: 2000};

describe("HttpSource Test", () =>{

    it('TestServer Start', function() {
        TestServer.start(TestConfig);
    });

    it('Connector Test With HttpRequest', function() {

        let config = {
            "host": "localhost",
            "path": "/",
            "port": "8099"
        };
        let config0 = Object.assign({}, config, {
            "port": "8077",
            "exra": "should be delete"
        });
        
        let httpSource = new HttpSource(config0);
        let stream = httpSource.createReadableStream({
            beforeCreate: param => {
                expect(param.port).to.be.equal("8077");
                expect(param.exra).to.be.equal(undefined);
                param.port =  TestConfig.port;
                console.log("\t\tbeforeCreate : param is", param);
                return param;
            }
        });
        let content = "";
        stream.on('data', function(chunk){
            content += chunk.toString();
        });
        return new Promise((resolve, reject) => {
            stream.on('end', function(){
            if (content === TestConfig.content) {
                console.log('response is same\n-------\n%s\n--------', content);
                resolve();
            } else {
                console.log('response is different\n-------\n%s\n---------', content);
                reject();
            }
            TestServer.stop();
            });
        });
    });
});