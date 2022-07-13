// 标准输入 输出
console.log = function (data) {
  process.stdout.write("---" + data + "\n");
};
console.log(11);
console.log(22);

const fs = require("fs");
fs.createReadStream("./text.txt").pipe(process.stdout);

process.stdin.pipe(process.stdout);
