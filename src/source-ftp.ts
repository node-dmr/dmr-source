/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 21:21:34
 */
import * as Client from "ftp";
import {Readable, Transform, Writable} from "stream";
import {InterfaceConfig, Source, SourceError} from "./index";

export class FtpSource extends Source<FtpConfig, FtpReadOption, InterfaceConfig> {
    constructor(config: FtpConfig = {}) {
      super(config);
    }
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

    public _createWritableStream(): never {
      throw new Error(SourceError[423]);
    }
}

class Connector extends Transform {
  public _transform(chunk, encoding, callback) {
      this.push(chunk);
      callback();
  }
}

export interface FtpConfig extends FtpReadOption {}

// options same as https://www.npmjs.com/package/ftp
export interface FtpReadOption extends InterfaceConfig, Client.Options {
  path?: string;
}
