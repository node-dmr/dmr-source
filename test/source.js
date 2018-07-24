const assert = require('assert');
const expect = require('chai').expect;
const Source= require('../src/source');
it('Source croustrct : createReadStream function check', function() {
  return new Promise(function(resolve){
    let source = new Source();
    source.on('error', event => {
      if(event && event.message === "Unrealizated createReadStream function") {
        resolve();
      }
    });
    source.createReadStream();
  })
});