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
    const data = fs.readFileSync('./img/01.png');
    // 强制缓存设置的响应头【expires】（http 1.0 就已支持）
    res.writeHead(200, {
      Expires: new Date('2022-10-13 13:39:59').toUTCString(),
    });
    res.end(data);
  } else if (pathname === '/img/02.png') {
    const data = fs.readFileSync('./img/02.png');
    // 强制缓存设置的响应头【cache-control】（http 1.1 支持）：
    // cache-control采用滑动时间（既从响应给客户端多少秒后缓存失效），单位是秒
    // 解决 expires 过分依赖本地时间戳带来的缓存问题
    res.writeHead(200, { 'Cache-Control': 'max-age=5' });
    res.end(data);
  } else if (pathname === '/img/03.png') {
    const data = fs.readFileSync('./img/03.png');
    // 协商缓存，在服务器端判断文件是否被修改了，如果被修改了那么响应最新的文件给客户端，否则可以使用客户端缓存的文件
    // 获取文件的修改时间
    const { mtime } = fs.statSync('./img/03.png');
    const ifModifiedSince = req.headers['if-modified-since'];

    if (ifModifiedSince === mtime.toUTCString()) {
      // 缓存生效
      res.statusCode = 304;
      res.end();
      return;
    }

    // 这种协商缓存的处理方式有两个缺点：
    // 1、文件名变更了有变回去，文件内容没有变更，也会导致缓存失效，因为是获取的文件修改时间，并非解析文件内容是否真正变更
    // 2、是秒级别的，如果某些文件的变更是毫秒级别的，会导致bug

    res.setHeader('last-modified', mtime.toUTCString());
    res.setHeader('Cache-Control', 'no-cache');
    res.end(data);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
