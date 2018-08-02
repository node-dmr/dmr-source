const expect = require('chai').expect;
const HttpSource= require('../src').HttpSource;
const TestServer = require('./util/test-server');
const TestConfig = {port: 8099 , content: 'hello dmr\nsuccess'};
const log =  require('./util/log');

describe("HttpSource Test", () =>{

    before(function() {
        log('TestServer Start');
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
                log("beforeCreate : param is", param);
                return param;
            }
        });
        let content = "";
        stream.on('data', function(chunk){
            content += chunk.toString();
        });
        stream2 = httpSource.createReadableStream({
            port: TestConfig.port
        });
        return new Promise((resolve, reject) => {
            stream.on('end', function(){
                if (content === TestConfig.content) {
                    log('response is same\n-------\n%s\n--------', content);
                    resolve();
                } else {
                    log('response is different\n-------\n%s\n---------', content);
                    reject();
                }
            });
        });
    });
    after(() => {
        TestServer.stop();
    });
});