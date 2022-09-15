const net = require('net');
const MyTransformCode = require('./myTransform');

const ts = new MyTransformCode();
let overageBuffer = null;

const client = net.createConnection({ port: 1234, host: '127.0.0.1' });

client.write(ts.encode('中国'));
client.write(ts.encode('中国1'));
client.write(ts.encode('中国2'));
client.write(ts.encode('中国3'));
client.write(ts.encode('中国4'));

// client.on('connect', () => {
//   client.write(ts.encode('中国'));
//   client.write(ts.encode('中国1'));
//   client.write(ts.encode('中国2'));
//   client.write(ts.encode('中国3'));
//   client.write(ts.encode('中国4'));
// });

client.on('data', (chunk) => {
  if (overageBuffer) {
    chunk = Buffer.concat([overageBuffer, chunk]);
  }

  let packageLen = 0;
  while ((packageLen = ts.getPackageLen(chunk))) {
    const packageContent = chunk.slice(0, packageLen);
    chunk = chunk.slice(packageLen);

    const ret = ts.decode(packageContent);
    console.log(ret);
  }
  overageBuffer = chunk;
});

client.on('error', (err) => {
  console.log(err);
});

client.on('close', () => {
  console.log('客户端断开链接');
});
