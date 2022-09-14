const net = require('net');

const client = net.createConnection({ port: 1234, host: '127.0.0.1' });

client.on('connect', () => {
  client.write('中国');
  client.write('中国1');
  client.write('中国2');
  client.write('中国3');
  client.write('中国4');
  client.write('中国5');
  client.write('中国6');
});

client.on('data', (chunk) => {
  console.log(chunk.toString());
});

client.on('error', (err) => {
  console.log(err);
});

client.on('close', () => {
  console.log('客户端断开链接');
});
