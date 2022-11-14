var http = require('http');

http
  .createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html;charset=UTF-8');
    response.setHeader('Transfer-Encoding', 'gzip,chunked');

    var html =
      '<!DOCTYPE html>' +
      '<html lang="en">' +
      '<head>' +
      '<meta charset="utf-8">' +
      '<title>Chunked transfer encoding test</title>' +
      '</head>' +
      '<body>';

    response.write(html);

    html = '<h1>Chunked transfer encoding test</h1>';

    response.write(html);

    let i = 0;
    const interval = setInterval(function () {
      if (i < 5) {
        response.write(`<p>chunk ${i}</p>`);
      } else {
        clearInterval(interval);
        response.end('</body></html>');
      }
      i++;
    }, 1000);
  })
  .listen(1337, () => {
    console.log('server running at: localhost:1337');
  });
