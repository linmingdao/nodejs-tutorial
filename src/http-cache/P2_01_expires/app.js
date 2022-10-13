const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/') {
    const data = fs.readFileSync('./index.html');
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.end(data);
  } else if (pathname === '/img/01.png') {
    console.log('请求进来了');
    const data = fs.readFileSync('./img/01.png');
    // 强制缓存设置的响应头（http 1.0 就已支持）
    res.writeHead(200, {
      Expires: new Date('2022-10-13 13:39:59').toUTCString(),
    });
    res.end(data);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
