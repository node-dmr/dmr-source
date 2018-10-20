/*
 * @Author: qiansc
 * @Date: 2018-08-01 14:44:35
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 19:35:08
 */
import {expect} from "chai";
import * as fse from "fs-extra";
import * as path from "path";
import {Readable, Writable} from "stream";
import {FileSource} from "../src";
import log from "./util/log";

const TEST_JSON = {status: "200"};

describe("Copy File By Using SourceFile", () => {
    let file: string;
    let file0: string;
    let inSource: FileSource;
    let outSource: FileSource;
    let file0dir: string;
    let input: Readable;
    let output: Writable;
    // let file, file0, inSource, outSource, file0dir, input, output, promise;
    before(() => {
        file = path.resolve(__dirname, "./tmp.log");
        fse.removeSync(file);
        fse.writeJsonSync(file, TEST_JSON);
        file0dir = path.resolve(__dirname, "./tmp/file/");
        fse.removeSync(file0dir);
    });
    it("Copy Complete", () => {
        log("Init Output / Input Stream");
        inSource = new FileSource({path: file});
        file0 = path.resolve(file0dir, "./out.log");
        outSource = new FileSource();
        input = inSource.createReadableStream(
          (option) => {log("input option", option); return option; },
        ) as Readable;
        output = outSource.createWritableStream(
          (option) => {
            option.path = file0,
            log("output option", option);
            return option;
          },
        ) as Writable;
        input.pipe(output);
        return new Promise((resolve, reject) => {
            input.on("end", () => {
                log("Input End!");
                const json = fse.readJsonSync(file0);
                if (JSON.stringify(TEST_JSON) === JSON.stringify(json)) {
                    log("Successfully Copy");
                    resolve();
                } else {
                    log("Failed to Copy");
                    reject();
                }
            });
        });
    });
    after(() => {
      setTimeout(() => {
        fse.removeSync(path.resolve(file));
        fse.removeSync(path.resolve(file0));
        fse.removeSync(path.resolve(__dirname, "./tmp/file"));
        fse.removeSync(path.resolve(__dirname, "./tmp/"));
    }, 300);
    });
});

describe("SourceFile Simple Write Test", () => {
  let file: string;
  // let file, file0, inSource, outSource, file0dir, input, output, promise;
  before(() => {
      file = path.resolve(__dirname, "./tmp0.log");
      fse.removeSync(file);
  });
  it("Write SourceFile", () => {
    const writer = new FileSource({}).createWritableStream(
      (options) => {
        options.path =  file;
        log("write options", options);
        return options;
      },
    );
    writer.write("A");
    writer.write("B");
    writer.end();

    return new Promise((resolve) => {
      writer.on("finish", () => {
        const aa = fse.readFileSync(file).toString();
        expect(aa).to.be.eq("AB");
        resolve();
      });
    });
  });
  after(() => {
      fse.removeSync(path.resolve(file));
  });
});

describe("SourceFile Simple Read Test", () => {
  let file: string;
  // let file, file0, inSource, outSource, file0dir, input, output, promise;
  before(() => {
      file = path.resolve(__dirname, "./tmp0.log");
      fse.removeSync(file);
      fse.writeJsonSync(file, TEST_JSON);
  });
  it("Open None Exits SourceFile", () => {
    let rs = "";
    const reader = new FileSource().createReadableStream(
      (options) => {
        options.path =  file;
        log("read options", options);
        return options;
      },
    );
    reader.on("data", (data) => {
      rs += data.toString();
    });
    return new Promise((resolve) => {
      reader.on("end", () => {
        expect(JSON.parse(rs).status).to.be.eq("200");
        resolve();
      });
    });
  });
  after(() => {
    fse.removeSync(path.resolve(file));
  });
});

describe("SourceFile Error Check", () => {
  it("Open None Exits SourceFile", () => {
    const reader = new FileSource({path: path.resolve(__dirname, "./out.log")})
    .createReadableStream();
    return new Promise((resolve) => {
      reader.on("error", (err, opt) => {
        log("ERROR OPT:", opt);
        log("ERROR evt:", err.toString());
        resolve();
      });
    });
  });

  it("Write When no Path", () => {
    const reader = new FileSource()
    .createWritableStream();
    return new Promise((resolve) => {
      reader.on("error", (err, opt) => {
        log("ERROR OPT:", opt);
        log("ERROR evt:", err.toString());
        resolve();
      });
    });
  });
});
