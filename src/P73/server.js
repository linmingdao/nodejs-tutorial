const net = require("net");

// 创建服务端实例
const server = net.createServer();
const port = 1234;
const host = "localhost";

server.listen(port, host);

server.on("listening", () => {
  console.log(`服务端已经开启 ${host}:${port}`);
});

server.on("connection", (socket) => {
  // 接收数据（可读流）
  socket.on("data", (chunk) => {
    // 解析数据
    const msg = chunk.toString();
    console.log(msg);
    // 回数据（可写流），所以socket是一个双工流
    socket.write(Buffer.from(`您好，${msg}`));
  });
});

server.on("close", () => {
  console.log("服务端关闭了");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log("端口被占用了");
  } else {
    console.log(err);
  }
});
