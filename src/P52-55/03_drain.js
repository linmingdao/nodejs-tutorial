/**
 * 控制写入的速度（限流）
 * 需求："中国共产党万岁" 写入指定文件
 * 01 一次性写入
 * 02 分批写入
 */
const fs = require("fs");

const ws = fs.createWriteStream("test.txt", { highWaterMark: 3 });

// 一次性写入
// ws.write("中国共产党万岁");

// 分批写入
const source = "中国共产党万岁".split("");

let num = 0;
let flag = true;
function executeWrite() {
  flag = true;
  while (num !== source.length && flag) {
    flag = ws.write(source[num]);
    num++;
  }
}

executeWrite();

ws.on("drain", () => {
  console.log("drain");
  executeWrite();
});

// 最终我们会使用 pipe，上面代码有助于了解 pipe
