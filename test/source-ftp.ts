/*
 * @Author: qiansc
 * @Date: 2018-08-02 15:38:38
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 15:52:02
 */
import {FtpSrv as FtpServer} from "ftp-srv";
import {FtpSource} from "../src";
import log from "./util/log";

describe("SourceFtp Test", () => {
    let server;
    before(() => {
      console.log(FtpServer);
      server = new FtpServer("ftp://127.0.0.1:8880", {
        anonymous: true,
        greeting: ["Welcome", "to", "the", "jungle!"],
      });
      server.on("login", ({username, password}, resolve, reject) => {
      if (username === "test" && password === "test" || username === "anonymous") {
          resolve({root: __dirname});
      } else {
        reject("Bad username or password");
      }
      });
      server.listen();
    });

    it("Ftp Download", () => {
        const ftpSource = new FtpSource({
          host: "127.0.0.1",
          path: "/source-ftp-test.dict",
          port: 8880,
        });
        const stream = ftpSource.createReadableStream();
        let content = "";
        stream.on("data", (chunk) => {
            content += chunk;
        });
        return new Promise((resolve, reject) => {
            stream.on("end", () => {
                log("Get Content => ", content);
                if (content === "success-ftp") {
                    log("Successfuly!");
                    resolve();
                } else {
                    log("Unmatched Content!");
                    reject();
                }
            });
        });
    });

    it("Ftp Download Error Test", () => {
      const ftpSource = new FtpSource({
        host: "127.0.0.1",
        path: "/err",
        port: 8880,
      });
      const stream = ftpSource.createReadableStream();
      return new Promise((resolve, reject) => {
          stream.on("end", () => {
            reject();
          });
          stream.on("error", (err) => {
            console.log("Error has been caught: ", err);
            resolve();
          });
      });
    });

    it("Ftp No Path Error Test", () => {
      const ftpSource = new FtpSource();
      const stream = ftpSource.createReadableStream(
        (option) => {
          return option;
        },
      );
      return new Promise((resolve, reject) => {
          stream.on("end", () => {
            reject();
          });
          stream.on("error", (err) => {
            console.log("Error has been caught: ", err);
            resolve();
          });
      });
    });

    after(() => {
        server.close();
    });
});

describe("FtpSource Test", () => {
  it("FtpSource createWritableStream is not able to use", () => {
    const ftpSource = new FtpSource();
    try {
      const err = ftpSource.createWritableStream();
    } catch (e) {
      // do nothing
      return;
    }
    throw new Error("Uncatght createWritableStream");
  });
});
