const http = require('http');

// 客户端发起 GET 请求
// http.get(
//   {
//     host: 'localhost',
//     port: 1234,
//     path: '/?a=1',
//     method: 'GET',
//   },
//   (res) => {},
// );

// 客户端发起 POST 请求
// const req = http.request(
//   {
//     host: 'localhost',
//     port: 1234,
//     method: 'POST',
//     path: '/?a=1',
//   },
//   (res) => {},
// );
// req.end('我是中文内容');

// 发送JSON格式的数据
const reqJson = http.request(
  {
    host: 'localhost',
    port: 1234,
    method: 'POST',
    path: '/?a=1',
    headers: {
      'Content-type': 'application/json',
    },
  },
  (res) => {
    const arr = [];
    res
      .on('data', (chunk) => {
        arr.push(chunk);
      })
      .on('end', () => {
        console.log(Buffer.concat(arr).toString());
      });
  },
);

reqJson.end('{"name": "lg"}');

// 发送表单格式的数据
const reqForm = http.request(
  {
    host: 'localhost',
    port: 1234,
    method: 'POST',
    path: '/?a=1',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  },
  (res) => {
    const arr = [];
    res
      .on('data', (chunk) => {
        arr.push(chunk);
      })
      .on('end', () => {
        console.log(Buffer.concat(arr).toString());
      });
  },
);

reqForm.end('a=1&b=2');
