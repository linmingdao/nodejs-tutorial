const http = require('http');

const server = http
  .createServer((req, res) => {
    console.log('1111');
  })
  .listen(1234, () => {
    console.log('server running at 1234');
  });
