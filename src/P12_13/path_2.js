const path = require("path");

console.log("========================== 解析路径 ==========================");
// { root: '/', dir: '/a/b/c', base: 'index.html', ext: '.html', name: 'index' }
console.log(path.parse("/a/b/c/index.html"));
// { root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c' }
console.log(path.parse("/a/b/c"));
// { root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c' }
console.log(path.parse("/a/b/c/"));
// { root: '', dir: './a/b', base: 'c', ext: '', name: 'c' }
console.log(path.parse("./a/b/c/"));

console.log("========================== 序列化路径 ==========================");
const obj = path.parse("./a/b/c/");
console.log(path.format(obj)); // ./a/b/c

console.log("======================== 是否为绝对路径 ========================");
console.log(path.isAbsolute("foo")); // false
console.log(path.isAbsolute("/foo")); // true
console.log(path.isAbsolute("///foo")); // true
console.log(path.isAbsolute("./foo")); // false
console.log(path.isAbsolute("")); // false
console.log(path.isAbsolute(".")); // false
console.log(path.isAbsolute("../foo")); // false

console.log("========================== 拼接路径 ==========================");
console.log(path.join("a/b", "c", "index.html")); // a/b/c/index.html
console.log(path.join("/a/b", "c", "index.html")); // /a/b/c/index.html
console.log(path.join("/a/b", "c", "../", "index.html")); // /a/b/index.html
console.log(path.join("/a/b", "c", "./", "index.html")); // /a/b/c/index.html
console.log(path.join("/a/b", "c", "", "index.html")); // /a/b/c/index.html
console.log(path.join("")); // .

console.log("========================== 规范化路径 ==========================");
console.log(path.normalize("a/b/c/d")); // a/b/c/d
console.log(path.normalize("a///b/c../d")); // a/b/c../d
console.log(path.normalize("a///\\\b/c/d")); // a//c/d
console.log(path.normalize("a///\\b/c/d")); // a/\b/c/d
console.log(path.normalize("a///b/../d")); // a/d

console.log("========================== 绝对路径 ==========================");
console.log(path.resolve()); // /Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P12_13
/**
 * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
 *
 * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
 *
 * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
 * until an absolute path is found. If after using all {from} paths still no absolute path is found,
 * the current working directory is used as well. The resulting path is normalized,
 * and trailing slashes are removed unless the path gets resolved to the root directory.
 *
 * @param pathSegments string paths to join.  Non-string arguments are ignored.
 */
console.log(path.resolve("a", "b")); // /Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P12_13/a/b
console.log(path.resolve("/a", "/b")); // /b
console.log(path.resolve("/a", "b")); // /a/b
console.log(path.resolve("a", "/b")); // /b
console.log(path.resolve("a", "/b")); // /b
console.log(path.resolve("/a", "../", "b")); // /b
