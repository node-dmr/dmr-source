/*
 * @Author: qiansc
 * @Date: 2018-04-10 17:02:27
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-21 16:59:29
 */
import {Readable, Writable} from "stream";

export abstract class Source
  <
  Config extends InterfaceConfig,
  ReadOption extends InterfaceConfig,
  WriteOption extends InterfaceConfig,
  > {

  protected config: Config;

  constructor(config?: Config) {
    this.config = config || {} as Config;
  }

  public createReadableStream(option?: ReadOption | ((config: Config) => ReadOption) ): Readable {
    if (typeof option === "function") {
      option = (option as ((C) => ReadOption))(Object.assign({}, this.config));
    }
    option = (option || this.config) as ReadOption;
    return this._createReadableStream(option) as Readable;
  }

  public createWritableStream(option?: WriteOption | ((config: Config) => WriteOption)): Writable {
    if (typeof option === "function") {
      option = (option as ((C) => WriteOption))(Object.assign({}, this.config));
    }
    option = (option || this.config) as WriteOption;
    return this._createWritableStream(option) as Writable;
  }

  protected abstract _createReadableStream(option: InterfaceConfig): Readable;
  protected abstract _createWritableStream(option: InterfaceConfig): Writable;
}

export interface InterfaceConfig {}
