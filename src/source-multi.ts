/*
 * @Author: qiansc
 * @Date: 2018-04-10 16:23:15
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-21 17:37:47
 */
import {Readable, Transform, Writable} from "stream";
import Connector from "./connector";
import * as SourceError from "./error";
import {InterfaceConfig, Source} from "./source";
/**
 * ```Typescript
 * // Example - Link readables to one readable stream
 * const stream1 = new HttpSource({host: "localhost", path: "/a.log"}).createReadableStream();
 * const stream2 = new FileSource({host: "localhost", path: "/b.log"}).createReadableStream();
 * const ms = new MultiSource().add(stream1).add(stream2).add(() => {
 *  return new FileSource({host: "localhost", path: "/c.log"}).createReadableStream();
 * });
 * ms.createReadableStream().on("data", (chunk) => console.log(chunk));
 * ```
 */
export class MultiSource extends Source <InterfaceConfig, InterfaceConfig, InterfaceConfig> {
    private actions: Array<Readable | GetReadable> = [];
    constructor(config = {}) {
        super(config);
    }
    /**
     * Add readable streams before createReadableStream
     */
    public add(stream: Readable | GetReadable) {
      this.actions.push(stream);
      return this;
    }
    /**
     * @hidden and @ignore
     */
    public _createReadableStream(): Readable {
        const connector = new Connector();
        const actions =  this.actions.slice();
        process.nextTick(() => {
          this.next(connector, actions);
        });
        this.actions = [];
        return connector as Readable;
    }
    /**
     * @hidden and @ignore
     */
    public _createWritableStream(): never {
      throw new Error(SourceError[433]);
    }
    private next(output: Writable, actions: Array<Readable | GetReadable>) {
        if (!actions.length) {
          output.destroy();
          return;
        }
        let stream = actions.shift() as Readable | GetReadable;
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

type  GetReadable = () => Readable;
