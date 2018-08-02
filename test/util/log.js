/*
 * @Author: qiansc 
 * @Date: 2018-08-02 19:13:30 
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-08-02 19:48:30
 */
let Log = function () {
    let result = [];
    let type = [];
    Array.prototype.slice.apply(arguments).forEach(element => {
        if (typeof element === "object") {
            result.push(JSON.stringify(element));
            type.push("%s");
        } else {
            result.push(element.toString());
            type.push("%s");
        }
        
    });
    let arr = ['\x1B[90m' + type.join('') + '\x1B[39m'];
    arr = arr.concat(result);
    console.log.apply(null, arr);
};
Log.log = Log.info = Log;
module.exports = Log;