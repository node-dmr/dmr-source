/*
 * @Author: qiansc
 * @Date: 2018-04-11 19:57:16
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-20 21:20:56
 */
import * as fs from "fs";
import * as fse from "fs-extra";
import * as path from "path";
import {Readable, Writable} from "stream";
import {InterfaceConfig, Source, SourceError} from "./index";

export class FileSource extends Source
  <FileConfig, FileReadOption, FileReadOption> {
    constructor(config?: FileConfig) {
      config = config || {};
      config.encoding = config.encoding || "utf8";
      config.highWaterMark = config.highWaterMark || 10 * 1024;
      super(config);
    }

    protected _createWritableStream(option: FileWriteOption): Writable {
      let writer: Writable;
      if (option.path) {
        const baseUrl = path.dirname(option.path);
        fse.ensureDirSync(baseUrl);
        writer = fs.createWriteStream(option.path, option) as Writable;
      } else {
        writer = new Writable();
        process.nextTick(() => {
          const err = new Error(SourceError[401]);
          err.stack = option.path;
          writer.emit("error", err, option);
          writer.end();
        });
      }
      return writer;
    }

    protected _createReadableStream(option: FileReadOption): Readable {
      let reader: Readable;
      // create baseUrl if not exists
      if (option.path && fs.existsSync(option.path)) {
        reader = fs.createReadStream(option.path, option);
      } else {
        reader = new Readable();
        process.nextTick(() => {
          const err = new Error(SourceError[402]);
          err.stack = option.path;
          reader.emit("error", err, option);
          reader.destroy();
        });
      }
      return reader;
    }
}

export interface FileReadOption extends InterfaceConfig {
  path?: string;
  flags?: string | undefined;
  encoding?: string | undefined;
  fd?: number | undefined;
  mode?: number | undefined;
  autoClose?: boolean | undefined;
  start?: number | undefined;
  end?: number | undefined;
  highWaterMark?: number | undefined;
}

// OPTION_KEYS same as https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
export interface FileWriteOption extends InterfaceConfig {
  path?: string;
  flags?: string | undefined;
  encoding?: string | undefined;
  fd?: number | undefined;
  mode?: number | undefined;
  autoClose?: boolean | undefined;
  start?: number | undefined;
}

export interface FileConfig extends FileReadOption, FileWriteOption  {}
