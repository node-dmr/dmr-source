/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 22:30:25
 */
import {Readable, Transform, Writable} from "stream";
import {InterfaceConfig, Source, SourceError} from "./index";

export class MultiSource extends Source <InterfaceConfig, InterfaceConfig, InterfaceConfig> {
    private actions: Array<Readable | (() => Readable)> = [];
    constructor(config = {}) {
        super(config);
    }

    public add(stream: Readable | (() => Readable)) {
      this.actions.push(stream);
      return this;
    }

    public _createReadableStream(): Readable {
        const connector = new Connector();
        const actions =  this.actions.slice();
        process.nextTick(() => {
          this.next(connector, actions);
        });
        this.actions = [];
        return connector as Readable;
    }
    public _createWritableStream(): never {
      throw new Error(SourceError[433]);
    }
    private next(output: Writable, actions: Array<Readable | (() => Readable)>) {
        if (!actions.length) {
          output.destroy();
          return;
        }
        let stream = actions.shift() as Readable | (() => Readable);
        if (typeof stream === "function") {
          // here stream is Source which added by addSource
          stream = stream();
        }
        stream.on("end", () => {
            this.next(output, actions);
        });
        stream.on("error", (err) => {
          output.emit("error", err);
          output.destroy();
        });
        stream.pipe(output, {end: actions.length === 0});
        // else {
        //   output.emit("error", new Error(SourceError[431]));
        //   output.destroy();
        // }
    }

}

class Connector extends Transform {
  public _transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
}
