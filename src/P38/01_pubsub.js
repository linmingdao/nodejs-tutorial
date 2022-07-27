// 订阅发布中心
class PubSub {
  constructor() {
    this._events = {};
  }

  // 注册
  subsrcibe(event, callback) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(callback);
  }

  // 发布
  publish(event, ...args) {
    const cbs = this._events[event];
    if (!cbs) return;
    if (cbs && cbs.length) {
      cbs.forEach((cb) => {
        cb.call(this, args);
      });
    }
  }

  // 移除
  remove(event, callback) {
    // TODO:待实现
  }
}

const ps = new PubSub();
ps.subsrcibe("事件1", (param) => {
  console.log("处理事件1", ...param);
});
ps.publish("事件1", 1, 2, 3);
ps.publish("事件2", 1, 2, 3);
