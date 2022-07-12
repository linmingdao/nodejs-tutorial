const { sleepByLoop } = require("../utils/sleep");
const http = require("http");

sleepByLoop(4000);

const server = http.createServer((req, res) => {
  res.end("server starting...");
});

server.listen(8080, () => {
  console.log("服务启动了");
});
