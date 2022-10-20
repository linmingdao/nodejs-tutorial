const http2 = require('http2');
const path = require('path');
const fs = require('fs');

const { HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS } = http2.constants;

const server = http2.createSecureServer({
  cert: fs.readFileSync(path.resolve(__dirname, './ryans-csr.pem')),
  key: fs.readFileSync(path.resolve(__dirname, './ryans-key.pem')),
});

server.on('stream', async function (stream, headers) {
  const requestPath = headers[HTTP2_HEADER_PATH];
  if (requestPath === '/') {
  } else {
  }
});
