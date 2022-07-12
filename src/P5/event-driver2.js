const { sleepByLoop } = require("../utils/sleep");
const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.on("事件1", () => {
  sleepByLoop(1500);
  console.log("事件1_1处理了");
});
console.log("同步代码1");
myEvent.on("事件1", () => {
  sleepByLoop(2000);
  console.log("事件1_2处理了");
});
myEvent.emit("事件1");
let i = 7;
let j = i * 7;
console.log("同步代码2", j);
