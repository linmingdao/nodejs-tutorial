const fs = require("fs");

const ws = fs.createWriteStream("test.txt", {
  highWaterMark: 3,
});

let flag = ws.write("1");
console.log(flag);

flag = ws.write("2");
console.log(flag);

// 如果flag为false：并不是说明当前数据不被执行写入
// 分析 ws.write 源码
flag = ws.write("3");
console.log(flag);

ws.on("drain", () => {
  console.log("drain");
});
