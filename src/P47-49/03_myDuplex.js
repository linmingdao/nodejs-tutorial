let { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor(source) {
    super();
    this.source = source;
  }

  _read() {
    let data = this.source.shift() || null;
    this.push(data);
  }

  _write(chunk, en, next) {
    process.stdout.write(chunk);
    process.nextTick(next);
  }
}

let source = ["a", "b", "c"];
let myDuplex = new MyDuplex(source);

myDuplex.on("data", (chunk) => {
  console.log(chunk.toString());
});

// let cnt = 0;
// setInterval(() => {
//   myDuplex.write(`${++cnt}%\r\n`, "utf-8");
// }, 1000);
