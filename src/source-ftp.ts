/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-21 17:37:44
 */
import * as Client from "ftp";
import {Readable, Writable} from "stream";
import Connector from "./connector";
import * as SourceError from "./error";
import {InterfaceConfig, Source} from "./source";

/**
 * ```Typescript
 * // Example - Download By FtpSource
 * const fs = new FtpSource({
 *  host: "127.0.0.1",
 *  path: "/source-ftp-test.dict",
 *  port: 21
 * });
 * const writer = new FileSource().createWritableStream({path: "/home/work/a.log"});
 * fs.createReadableStream().pipe(writer);
 * ```
 */
export class FtpSource extends Source<FtpConfig, FtpReadOption, InterfaceConfig> {
    constructor(config: FtpConfig = {}) {
      super(config);
    }
    /**
     * @hidden and @ignore
     */
    public _createReadableStream(option: FtpReadOption): Readable {
        const connector = new Connector();
        if (option.path === undefined) {
          const reader = new Readable();
          process.nextTick(() => {
            reader.emit("error", new Error(SourceError[421]), option);
            reader.destroy();
          });
          return reader;
        } else {
          const client = new Client();
          client.on("ready", () => {
            client.get(option.path as string, (e, stream) => {
              if (e) {
                connector.emit("error", e, option);
                connector.destroy();
              } else {
                stream.pipe(connector);
                stream.on("close", () => {
                      client.end();
                      // self.emit('end', self);
                });
              }
            });
          });
          // connect to localhost:21 as anonymous
          // client.on("error", (error) => {
          //   err = error;
          // });
          client.connect(option);
        }
        return connector as Readable;
    }
    /**
     * @hidden and @ignore
     */
    public _createWritableStream(): never {
      throw new Error(SourceError[423]);
    }
}

export interface FtpConfig extends FtpReadOption {}

/**
 * The describtion of parameters are same as<br>
 * https://www.npmjs.com/package/ftp
 */
export interface FtpReadOption extends InterfaceConfig, Client.Options {
  path?: string;
}
