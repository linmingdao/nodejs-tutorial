const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/') {
    fs.createReadStream(path.join(__dirname, '/index.html')).pipe(res);
  } else {
    const requestUrl = path.join(__dirname, pathname);
    console.log(requestUrl);
    try {
      fs.accessSync(requestUrl);
      fs.createReadStream(requestUrl).pipe(res);
    } catch {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }
});

server.listen(3001);
