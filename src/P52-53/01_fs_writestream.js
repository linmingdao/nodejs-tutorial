const fs = require("fs");

const ws = fs.createWriteStream("test.txt", {
  flags: "w",
  mode: 438,
  fd: null,
  encoding: "utf-8",
  start: 0,
  highWaterMark: 3,
});

// ws.write("中国台湾", () => {
//   console.log("ok1");
// });
// ws.write("123456", () => {
//   console.log("ok2");
// });

ws.write("123456");

ws.on("open", (fd) => {
  console.log("open", fd);
});

ws.on("close", () => {
  console.log("文件关闭了");
});

ws.on("end", () => {
  console.log("end");
});

ws.on("error", () => {
  console.log("出错了");
});

ws.end();
