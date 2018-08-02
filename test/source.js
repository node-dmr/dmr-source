const assert = require('assert');
const expect = require('chai').expect;
const Source= require('../src').Source;

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


  it('Source fetchOption', ()=> {
    let source = new Source();
    let option = source.fetchOption({
      "A": "A",
      "B": "${B}",
      "C":"`${C}`",
      "D": "`${A}${B}${C}${D}`",
      "E": "`${E + E}`",
      "F": "`${F + F}`more",
      "G": "`${G + '/' + G}`",
      "H": {
        "H1": "`${H}`",
        "H2": "H2"
      }
    }, {"A": "a", "B": "b", "C": "c", "D": "d", "E": "e","F": "f","G": "g", "H": "h"});
    
    console.log ("\noption fetch > ", option);

    expect(option.A).to.be.equal("A");
    expect(option.B).to.be.equal("${B}");
    expect(option.C).to.be.equal("c");
    expect(option.D).to.be.equal("abcd");
    expect(option.E).to.be.equal("ee");
    expect(option.F).to.be.equal("`${F + F}`more");
    expect(option.G).to.be.equal("g/g");
    expect(option.H.H1).to.be.equal("h");
    expect(option.H.H2).to.be.equal("H2");

  });
  
});