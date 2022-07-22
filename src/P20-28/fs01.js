// const fs = require("fs");
// const path = require("path");
import * as fs from "fs";
import * as path from "path";

// readFile
fs.readFile(path.resolve("data.txt"), "utf-8", (err, data) => {
  // Nodejs的错误优先
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

// 如果文件不存在，会默认创建，并且是覆盖写入内容
fs.writeFile(path.resolve("data_1.txt"), "学习Nodejs的fs.writeFile", (err) => {
  if (!err) {
    fs.readFile(path.resolve("data.txt"), "utf-8", (err, data) => {
      // Nodejs的错误优先
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
    });
  }
});

fs.writeFile(
  path.resolve("data_1.txt"),
  "学习Nodejs的fs.writeFile",
  {
    mode: 438,
    flag: "w+",
    encoding: "utf-8",
  },
  (err) => {
    if (!err) {
      fs.readFile(path.resolve("data.txt"), "utf-8", (err, data) => {
        // Nodejs的错误优先
        if (!err) {
          console.log(data);
        } else {
          console.log(err);
        }
      });
    }
  }
);
