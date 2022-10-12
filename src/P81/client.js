const http = require('http');

const options = {
  host: 'localhost',
  port: 1234,
  method: 'POST',
  path: '/',
};

const server = http.createServer((request, response) => {
  const req = http.request(options, (res) => {
    const arr = [];
    res.on('data', (chunk) => arr.push(chunk));
    res.on('end', () => {
      const str = Buffer.concat(arr).toString();
      response.setHeader('Content-type', 'text/html;charset=utf-8');
      response.end(str);
    });
  });
  req.end('哈哈，我帮助浏览器来拉去数据了');
});

server.listen(2345, 'localhost', () => {
  console.log('本地服务启动了...');
});
