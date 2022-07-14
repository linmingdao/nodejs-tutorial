const path = require("path");

console.log("========================== basename ==========================");
// 1、获取路径中的基础名称 -> 文件名
console.log(__filename); // /Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P12_13/path_1.js
// Return the last portion of a path. Similar to the Unix basename command.
// Often used to extract the file name from a fully qualified path.
// @param p — the path to evaluate.
// @param ext — optionally, an extension to remove from the result.
console.log(path.basename(__filename)); // path_1.js
console.log(path.basename(__filename, ".js")); // path_1
console.log(path.basename(__filename, ".css")); // path_1.js
console.log(path.basename(__filename, "workspace")); // path_1.js
console.log(__dirname); // /Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P12_13
console.log(path.basename(__dirname)); // P12_13
console.log(path.basename("/a/b/c")); // c
console.log(path.basename("/a/b/c/")); // c
console.log(path.basename("a/b/c")); // c

console.log("========================== dirname ==========================");
console.log(path.dirname(__filename)); // /Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P12_13
console.log(path.dirname("/a/b/c")); // /a/b
console.log(path.dirname("/a/b/c/")); // /a/b
console.log(path.dirname("./a/b/c")); // ./a/b

console.log("========================== 拓展名 ==========================");
console.log(path.extname(__filename));
console.log(path.extname("/a/b"));
console.log(path.extname("/a/b/index.html.js.css"));
console.log(path.extname("/a/b/index.html.js.css."));
