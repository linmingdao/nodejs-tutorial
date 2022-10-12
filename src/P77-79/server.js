const net = require('net');

const port = 1234;
const host = 'localhost';
const server = net.createServer();

server
  .on('listening', () => {
    console.log(`服务端已经开启 ${host}:${port}`);
  })
  .on('connection', (socket) => {
    socket.on('data', (data) => {
      console.log(data.toString());
    });
    socket.end('test http request');
  })
  .listen(port, host);
