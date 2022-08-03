const fs = require("fs");

const rs = fs.createReadStream("test.txt", { highWaterMark: 4 });
const ws = fs.createWriteStream("test1.txt", { highWaterMark: 1 });

// 背压机制
// let flag = true;
// rs.on("data", (chunk) => {
//   flag = ws.write(chunk);
//   if (!flag) {
//     rs.pause();
//   }
// });

// ws.on("drain", () => {
//   rs.resume();
// });

// 以上就是pipe方法内部的实现原理
rs.pipe(ws);
