/*
 * @Author: qiansc
 * @Date: 2018-08-02 15:38:38
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 22:26:47
 */
import {expect} from "chai";
import * as fse from "fs-extra";
import * as path from "path";
import { Readable } from "stream";
import {FileSource, MultiSource} from "../src";

const ep = path.resolve(__dirname, "./source-ftp-test.dict");

describe("Copy FileSoucres to One FileSoucre", () => {
    let input0: Readable;
    let input1: Readable;
    let input2: Readable;
    const fileSoucre = new FileSource({path: ep});
    const op = path.resolve(__dirname, "./multi-test.log");
    const output = new FileSource({path: op}).createWritableStream();

    before(() => {
        input0 = fileSoucre.createReadableStream();
        input1 = fileSoucre.createReadableStream();
        input2 = fileSoucre.createReadableStream();

    });
    it("FileSoucres Copy Finished", () => {
        const multi = new MultiSource();
        multi.add(input0).add(input1).add(input2);
        const stream = multi.createReadableStream();
        stream.pipe(output);

        return new Promise((resolve, reject) => {
            output.on("finish", () => {
              const origin = fse.readFileSync(ep).toString();
              const result = fse.readFileSync(op).toString();
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

describe("Copy FileSoucres to One FileSoucre (Lazy)", () => {
  const fileSoucre = new FileSource({path: ep});
  const op = path.resolve(__dirname, "./multi-test1.log");
  const output = new FileSource({path: op}).createWritableStream();

  it("FileSoucres Copy Finished", () => {
      const multi = new MultiSource();
      multi.add(() => {
        return fileSoucre.createReadableStream();
      })
      .add(() => {
        return fileSoucre.createReadableStream();
      }).add(() => {
        return fileSoucre.createReadableStream();
      });
      const stream = multi.createReadableStream();
      stream.pipe(output);

      return new Promise((resolve, reject) => {
          output.on("finish", () => {
            const origin = fse.readFileSync(ep).toString();
            const result = fse.readFileSync(op).toString();
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

describe("Error Handle First (Lazy)", () => {
  const fileSoucre = new FileSource({path: ep});
  const op = path.resolve(__dirname, "./multi-test2.log");
  const output = new FileSource({path: op}).createWritableStream();

  it("FileSoucres Copy Finished", () => {
      const multi = new MultiSource();
      multi
      .add(() => {
        return new FileSource({path: path.resolve(__dirname, "./error.dict")}).createReadableStream();
      })
      .add(() => fileSoucre.createReadableStream())
      .add(() => fileSoucre.createReadableStream());
      const stream = multi.createReadableStream();
      stream.pipe(output);

      return new Promise((resolve, reject) => {
          output.on("finish", () => {
            reject();
          });
          stream.on("error", (err) => {
            console.log("Error has been catch at first", err);
            resolve();
          });
      });
  });

  after(() => {
      fse.removeSync(op);
  });
});

describe("Error Handle Middle (Lazy)", () => {
  const fileSoucre = new FileSource({path: ep});
  const op = path.resolve(__dirname, "./multi-test3.log");
  const output = new FileSource({path: op}).createWritableStream();

  it("FileSoucres Copy Finished", () => {
      const multi = new MultiSource();
      multi.add(() => fileSoucre.createReadableStream())
      .add(() => {
        return new FileSource({path: path.resolve(__dirname, "./error.dict")}).createReadableStream();
      });
      multi.add(() => fileSoucre.createReadableStream());
      const stream = multi.createReadableStream();
      stream.pipe(output);

      return new Promise((resolve, reject) => {
          output.on("finish", () => {
            reject();
          });
          stream.on("error", (err) => {
            console.log("Error has been catch at middle", err);
            resolve();
          });
      });
  });

  after(() => {
      fse.removeSync(op);
  });
});

describe("MultiSource Test", () => {
  it("MultiSource createWritableStream is not able to use", () => {
    const ftpSource = new MultiSource();
    try {
      const err = ftpSource.createWritableStream();
    } catch (e) {
      // do nothing
      return;
    }
    throw new Error("Uncatght createWritableStream");
  });
});
