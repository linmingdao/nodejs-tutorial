// alloc创建buffer实例
const b1 = Buffer.alloc(10); // 10字节大小的buffer，1Byte = 8bit，1KB = 1024Byte
console.log(b1); // <Buffer 00 00 00 00 00 00 00 00 00 00> =》 00：16进制表示的，一个0是4位

// allocUnsafe创建buffer实例 -> 可能会有脏数据
const b2 = Buffer.allocUnsafe(10);
console.log(b2); // <Buffer 89 0c 5a ef 1c 19 00 00 02 00>

// from创建buffer实例
const b3 = Buffer.from("中国"); // The encoding of string. Default: 'utf8'.
// const b3 = Buffer.from("1", 'utf8');
console.log(b3); // <Buffer 31>
console.log(b3.toString("utf8")); // <Buffer 31> // The character encoding to use. Default: 'utf8'.

// const b4 = Buffer.from([1, 2, 3]);
// console.log(b4); // <Buffer 01 02 03>
