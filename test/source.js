const assert = require('assert');
const expect = require('chai').expect;
const Source= require('../src/source');

describe('Source croustrct Check', () =>{
  it('createReadStream function must be implemented', ()=> {
    return new Promise(function(resolve){
      let source = new Source();
      source.on('error', event => {
        if(event && event.message) {
          resolve();
        }
      });
      source.createReadableStream();
    });
  });

  it('createWritableStream not yet be implemented', ()=> {
    return new Promise(function(resolve){
      let source = new Source();
      source.on('error', event => {
        if(event && event.message) {
          resolve();
        }
      });
      source.createWritableStream();
    });
  });

  it('Source normalize', ()=> {
    let source = new Source();
    let option = source.normalize({
      "k1": "one",
      "k2": "two"
    }, ["k2", "k3"]);
    expect(JSON.stringify(option)).to.be.equal(JSON.stringify({
      "k2": "two"
    }));
  });

});