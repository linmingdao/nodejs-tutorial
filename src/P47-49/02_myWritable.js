const { Writable } = require("stream");

class MyWritable extends Writable {
  constructor() {
    super();
  }

  _write(chunk, en, done) {
    process.stdout.write(chunk.toString());
    process.nextTick(done);
  }
}

let cnt = 0;
const myWritable = new MyWritable();

setInterval(() => {
  myWritable.write(`${++cnt}%\r\n`, "utf-8");
}, 1000);
