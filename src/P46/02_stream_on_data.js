const fs = require("fs");

// 模拟拷贝
let rs = fs.createReadStream("./test.txt");
let ws = fs.createWriteStream("./test2.txt");

rs.on("data", (chunck) => {
  ws.write(chunck);
});
