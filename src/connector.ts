/*
 * @Author: qiansc
 * @Date: 2018-10-21 11:53:27
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-10-21 12:13:56
 */
import {Transform} from "stream";
/**
 * @hidden and @ignore
 */
export default class Connector extends Transform {
  public _transform(chunk, encoding, callback) {
      this.push(chunk);
      callback();
  }
}
