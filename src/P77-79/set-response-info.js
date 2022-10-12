const http = require('http');

const server = http
  .createServer((req, res) => {
    // res.write('ok');
    // res.end();

    // res.end('test ok');

    res.statusCode = 302;
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.end('我是中文内容');
  })
  .listen(1234, () => {
    console.log('server running at 1234');
  });
