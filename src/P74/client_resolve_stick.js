const net = require('net');

const client = net.createConnection({ port: 1234, host: '127.0.0.1' });

const dataArr = ['中国1', '中国2', '中国3', '中国4', '中国5', '中国6'];

client.on('connect', () => {
  client.write('中国');
  // 通过延时发送解决TCP粘包问题 -> 当然这样做降低了TCP的传输效率，如何拆包、封包后续会涉及
  for (let i = 0; i < dataArr.length; i++) {
    // (function (i) {
    // 已经是闭包了，没必要再使用闭包包一层了
    setTimeout(() => {
      client.write(dataArr[i]);
    }, 1000 * (i + 1));
    // })(i);
  }
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
