process.on("beforeExit", (code) => {
  console.log("beforeExit:", code);
  // 只能写一些同步代码，不支持异步代码，写这里会导致程序无法正常退出
  //   setTimeout(() => {
  //     console.log("ffff");
  //   }, 1000);
});

process.on("exit", (code) => {
  console.log("exit:", code);
  // 只能写一些同步代码，不支持异步代码
  setTimeout(() => {
    console.log("uiuiu");
  }, 1000);
});

process.exit();

console.log("代码执行完");

process.exit();
