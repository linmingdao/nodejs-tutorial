// 1、cpu 内存
// {
//     rss: 23175168, // 常驻内存
//     heapTotal: 4509696, // 该程序运行申请的总内存大小
//     heapUsed: 2406384, // 使用的内存大小
//     external: 778028, // 扩展内存大小（底层c/c++所占用的内存大小）
//     arrayBuffers: 9386 // 独立的缓冲区大小
//   }
// console.log(process.memoryUsage());

// { user: 25077, system: 9421 }
// console.log(process.cpuUsage());

// 2、运行环境：运行目录，node环境，cpu架构，用户环境，系统平台
// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env);
// console.log(process.platform);

// 3、运行状态：启动参数、pid、运行时间
// [
//   "/Users/mingdaolin/.nvm/versions/node/v12.19.0/bin/node",
//   "/Users/mingdaolin/workspace/personal/nodejs-tutorial/src/P10/process.js",
//   "1",
//   "2",
// ];
console.log(process.argv); // node process.js 1 2
console.log(process.argv0); // node
console.log(process.argv1); // undefined
console.log(process.pid);
console.log(process.uptime());
