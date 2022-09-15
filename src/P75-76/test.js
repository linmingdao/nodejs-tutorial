const MyTransformCode = require('./myTransform');

const ts = new MyTransformCode();

const str1 = '中国';

// test encode
// console.log(Buffer.from(str1));
// console.log(ts.encode(str1));

// test decode
// const encodeBuf = ts.encode(str1, 1);
// const a = ts.decode(encodeBuf);
// console.log(a);

// test getPackageLen
const encodeBuf = ts.encode(str1, 1);
const len = ts.getPackageLen(encodeBuf);
console.log(len);
