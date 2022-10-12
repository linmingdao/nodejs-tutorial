const http = require('http');
const url = require('url');

// 1、http协议请求体的格式
// 2、url 由哪几部分组成

const server = http
  .createServer((req, res) => {
    console.log('有请求进来了');
    // url
    console.log(req.url);
    let urlObj = url.parse(req.url, true);
    console.log(urlObj);
    console.log(req.method);
    console.log(req.httpVersion);
    console.log(req.headers);

    // 获取请求体
    // 使用curl模拟客户端发起 POST 请求： curl -v -X POST -d "'name':'lg'" http://localhost:1234/
    let arr = [];
    req.on('data', (data) => {
      arr.push(data);
    });
    req.on('end', () => {
      console.log(Buffer.concat(arr).toString());
    });
  })
  .listen(1234, () => {
    console.log('server running at 1234');
  });
