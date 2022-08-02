const fs = require("fs");

// 模拟拷贝
let rs = fs.createReadStream("./test.txt");
let ws = fs.createWriteStream("./test1.txt");

// 使用流(可读、可写流)进行文件的读写的操作的好处是，遇到大文件操作不会消耗大内存
rs.pipe(ws);
rs.pipe(process.stdout);
