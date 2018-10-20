import assert = require("assert");
import {expect} from "chai";
import { Readable , Writable} from "stream";
import {Source} from "../src";

import log from "./util/log";

describe("Source croustrct Check", () => {
  it("Extends Source", () => {
    class S extends Source {
      public createReadableStream(): Readable {
        return new Readable();
      }
      public createWritableStream(): Writable {
        return new Writable();
      }
    }
    const s = new S();
  });
  // it("Source fetchOption", () => {
  //   const option = fetchConfig({
  //     A: "A",
  //     B: "${B}",
  //     C: "`${C}`",
  //     D: "`${A}${B}${C}${D}`",
  //     E: "`${E + E}`",
  //     F: "`${F + F}`more",
  //     G: "`${G + '/' + G}`",
  //     H: {
  //       H1: "`${H}`",
  //       H2: "H2",
  //     },
  //   }, {A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h"});

  //   log ("\noption fetch > ", option);

  //   expect(option.A).to.be.equal("A");
  //   expect(option.B).to.be.equal("${B}");
  //   expect(option.C).to.be.equal("c");
  //   expect(option.D).to.be.equal("abcd");
  //   expect(option.E).to.be.equal("ee");
  //   expect(option.F).to.be.equal("`${F + F}`more");
  //   expect(option.G).to.be.equal("g/g");
  //   expect(option.H.H1).to.be.equal("h");
  //   expect(option.H.H2).to.be.equal("H2");

  // });
});
