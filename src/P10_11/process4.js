process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write("data -> " + chunk);
  }
});
