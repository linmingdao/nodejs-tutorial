const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  console.log('请求进来了：', pathname);
  const arr = [];
  req.on('data', (chunk) => arr.push(chunk));
  req.on('end', () => {
    console.log('我返回数据了');
    res.end('接口响应的数据xxx');
  });
});

server.listen(1234, 'localhost', () => {
  console.log('远程接口服务启动了');
});
