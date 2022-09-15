const net = require('net');
const MyTransformCode = require('./myTransform');

const port = 1234;
const host = 'localhost';
const server = net.createServer();

let overageBuffer = null;
const ts = new MyTransformCode();

server.listen(port, host);
server.on('listening', () => {
  console.log(`服务端已经开启 ${host}:${port}`);
});
server.on('connection', (socket) => {
  // socket可读可写的双工流，chunk 是 Buffer 二进制对象
  socket.on('data', (chunk) => {
    // 如果存在上一次未处理完的数据流，则跟当前的数据流做一次拼接
    if (overageBuffer) {
      chunk = Buffer.concat([overageBuffer, chunk]);
    }

    let packageLen = 0;
    while ((packageLen = ts.getPackageLen(chunk))) {
      const packageContent = chunk.slice(0, packageLen);
      chunk = chunk.slice(packageLen);

      const ret = ts.decode(packageContent);
      console.log(ret);
      socket.write(ts.encode(ret.body, ret.serialNum));
    }
    overageBuffer = chunk;
  });
});
