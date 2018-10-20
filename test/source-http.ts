/*
 * @Author: qiansc
 * @Date: 2018-10-19 18:36:13
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 11:19:18
 */
import {expect} from "chai";
import {HttpSource} from "../src";
import log from "./util/log";
import * as TestServer from "./util/test-server";

const TestConfig = {port: 8099 , content: "hello dmr\nsuccess"};

describe("HttpSource Test", () => {

    before(() => {
        log("TestServer Start");
        TestServer.start(TestConfig);
    });

    it("Connector Test With HttpRequest", () => {
        const httpSource = new HttpSource({
            host: "localhost",
            path: "/",
            port: "8099",
        });
        const stream = httpSource.createReadableStream(
          (param) => {
            expect(param.port).to.be.equal("8099");
            param.port =  TestConfig.port;
            log("beforeCreate : param is", param);
            return param;
        });
        let content = "";
        stream.on("data", (chunk) => {
            content += chunk.toString();
        });
        const stream2 = httpSource.createReadableStream({
            port: TestConfig.port,
        });
        return new Promise((resolve, reject) => {
            stream.on("end", () => {
                if (content === TestConfig.content) {
                    log("response is same\n-------\n%s\n--------", content);
                    resolve();
                } else {
                    log("response is different\n-------\n%s\n---------", content);
                    reject();
                }
            });
        });
    });

    it("HttpRequest createWritableStream is not able to use", () => {
      const httpSource = new HttpSource();
      try {
        const err = httpSource.createWritableStream();
      } catch (e) {
        // do nothing
        return;
      }
      throw new Error("Uncatght createWritableStream");
    });

    it("HttpRequest - url is not aviable", () => {
      const httpSource = new HttpSource({
        host: "baidu.com",
        path: "/xxx",
        port: "8111",
        timeout: 1500,
      });
      const stream = httpSource.createReadableStream();

      return new Promise((resolve, reject) => {
        stream.on("data", (chunk) => {
          console.log("data", chunk);
          reject();
        });
        stream.on("error", (err) => {
          console.log("error caught", err);
          resolve();
        });
      });

    });
    after(() => {
        TestServer.stop();
    });
});
