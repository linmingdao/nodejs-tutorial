const { Readable } = require("stream");

// 模拟底层数据
let source = ["=lg=", "=zce=", "=syy="];

// 自定义类继承Readable
class MyReadable extends Readable {
  constructor(source) {
    super();
    this.source = source;
  }

  _read() {
    let data = this.source.shift() || null;
    this.push(data);
  }
}

let myReadable = new MyReadable(source);

// 消费方式一：主动从可读流的缓冲区中读取数据
// myReadable.on("readable", () => {
//   let data = null;
//   while ((data = myReadable.read(2)) !== null) {
//     console.log(data.toString());
//   }
// });

// 消费方式二：流动式地获取可读流缓冲区数据
myReadable.on("data", (chunk) => {
  console.log(chunk.toString());
});

myReadable.on("end", () => {
  console.log("end");
});
