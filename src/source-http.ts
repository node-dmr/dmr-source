/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 21:22:03
 */
import * as http from "http";
import {Readable, Transform} from "stream";
import {InterfaceConfig, Source, SourceError} from "./index";

export class HttpSource extends Source<HttpConfig, HttpReadOption, InterfaceConfig> {
    constructor(config?: HttpConfig) {
      config = config || {};
      super(config);
    }
    public _createReadableStream(option: HttpReadOption): Readable {
        const connector = new Connector();
        const req = http.request(option, (res) => {
            res.setEncoding(option.encoding || "utf8");
            res.pipe(connector);
        });
        req.on("error", (err) => {
          connector.emit("error", err);
        });
        req.on("timeout", (err) => {
          connector.emit("error", new Error(SourceError[415]));
          req.destroy();
        });
        req.end();
        return connector as Readable;
    }

    public _createWritableStream(): never {
      throw new Error(SourceError[413]);
    }
}

class Connector extends Transform {
  public _transform(chunk, encoding, callback) {
      this.push(chunk);
      callback();
  }
}

export interface HttpConfig extends HttpReadOption {}

// requestParam same as https://nodejs.org/api/http.html#http_http_request_options_callback
export interface HttpReadOption extends InterfaceConfig, http.ClientRequestArgs {
  encoding?: string;
}
