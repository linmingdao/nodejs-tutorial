const fs = require("fs");

const rs = fs.createReadStream("test.txt", {
  flags: "r",
  encoding: null,
  fd: null,
  mode: 438,
  autoClose: true,
  start: 0,
  //   end: 3,
  highWaterMark: 4,
});

let bufferArr = [];

// 通过流的形式自动读取
rs.on("data", (chunk) => {
  bufferArr.push(chunk);
});

rs.on("open", (fd) => {
  console.log(fd, "open");
});

rs.on("close", () => {
  console.log("close");
});

rs.on("end", () => {
  console.log(Buffer.concat(bufferArr).toString());
  console.log("end");
});

rs.on("error", () => {
  console.log("error");
});

rs.on("pause", () => {
  console.log("pause");
});

rs.on("resume", () => {
  console.log("resume");
});
