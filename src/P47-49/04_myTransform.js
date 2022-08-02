/**
 * 双工流（duplex）中读和写是独立的，读操作生成的数据是不能直接被写操作当做数据源来操作的
 * 而转换流（transform）中读和写是联通的 并且 转换流还可以对数据进行相应的转换操作
 **/
let { Transform } = require("stream");

class MyTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, en, cb) {
    this.push(chunk.toString().toUpperCase());
    cb(null);
  }
}

const t = new MyTransform();

t.write("a");
t.write("b");
t.write("c");
t.write("d");
t.write("e");
t.write("f");

t.on("data", (chunk) => {
  console.log(chunk.toString());
});
