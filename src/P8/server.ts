import express from "express";
import data from "./data.json";

const app = express();

app.get("/", (req, res) => {
  res.end("1122");
});

app.get("/user", (req, res) => {
  res.json(data);
});

app.listen(8080, () => {
  console.log("服务启动了");
});
