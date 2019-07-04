/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2019-07-04 23:38:57
 */
import * as http from "http";
import * as https from "https";
import {Readable} from "stream";
import Connector from "./connector";
import * as SourceError from "./error";
import {InterfaceConfig, Source} from "./source";

/**
 * ```Typescript
 * // Example - Download By HttpSource
 * const hs = new HttpSource({
 *  host: "localhost",
 *  path: "/",
 *  port: "8099",
 * });
 * const writer = new FileSource().createWritableStream({path: "/home/work/a.log"});
 * hs.createReadableStream().pipe(writer);
 * ```
 */
export class HttpSource extends Source<HttpConfig, HttpReadOption, InterfaceConfig> {
    constructor(config?: HttpConfig) {
      config = config || {};
      super(config);
    }
    /**
     * @hidden and @ignore
     */
    public _createReadableStream(option: HttpReadOption): Readable {
        const connector = new Connector();
        const client = (option.protocol || "").indexOf("https") > -1 ? https : http;
        const req = client.request(option, (res) => {
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
    /**
     * @hidden and @ignore
     */
    public _createWritableStream(): never {
      throw new Error(SourceError[413]);
    }
}

export interface HttpConfig extends HttpReadOption {}

/**
 * The describtion of parameters are same as<br>
 * https://nodejs.org/api/http.html#http_http_request_options_callback
 */
export interface HttpReadOption extends InterfaceConfig, http.ClientRequestArgs {
  encoding?: string;
}
