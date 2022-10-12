const http = require('http');
const url = require('url');
const querystring = require('querystring');

http
  .createServer((req, res) => {
    console.log('请求进来了');
    const { pathname, query } = url.parse(req.url);
    console.log(pathname, '-----', query);

    const arr = [];
    req.on('data', (chunk) => {
      arr.push(chunk);
    });
    req.on('end', () => {
      const str = Buffer.concat(arr).toString();
      console.log(str);
      if (req.headers['content-type'] === 'application/json') {
        const obj = JSON.parse(str);
        obj.add = '我是新增的字段';
        res.end(JSON.stringify(obj));
      } else if (
        req.headers['content-type'] === 'application/x-www-form-urlencoded'
      ) {
        const ret = querystring.parse(str);
        res.end(JSON.stringify(ret));
      }
    });
  })
  .listen(1234, 'localhost', () => {
    console.log('server running at localhost:1234');
  });
