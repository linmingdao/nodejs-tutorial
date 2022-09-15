class MyTransformCode {
  constructor() {
    // 包头部的占四个字节的长度
    this.packageHeaderLen = 4;
    // 用来标识不同数据包的序列号
    this.serialNum = 0;
    // 序列号占两个字节
    this.serialLen = 2;
  }

  encode(data, serialNum) {
    // 将数据转成二进制
    const body = Buffer.from(data);

    // 封装头部-1 先按照指定的长度申请一片内存空间
    const headerBuf = Buffer.alloc(this.packageHeaderLen);
    // 封装头部-2 写入该数据包的序列号
    headerBuf.writeInt16BE(serialNum || this.serialNum);
    // 封装头部-3 写入该数据包消息体的长度
    headerBuf.writeInt16BE(body.length, this.serialLen);

    // 处理序列号的自增
    if (serialNum === undefined) {
      this.serialNum++;
    }

    // 返回编码后的数据包
    return Buffer.concat([headerBuf, body]);
  }

  decode(buffer) {
    const headerBuf = buffer.slice(0, this.packageHeaderLen);
    const bodyBuf = buffer.slice(this.packageHeaderLen);

    return {
      serialNum: headerBuf.readInt16BE(),
      bodyLength: headerBuf.readInt16BE(this.serialLen),
      body: bodyBuf.toString(),
    };
  }

  getPackageLen(buffer) {
    if (buffer.length < this.packageHeaderLen) {
      return 0;
    } else {
      return this.packageHeaderLen + buffer.readInt16BE(this.serialLen);
    }
  }
}

module.exports = MyTransformCode;
