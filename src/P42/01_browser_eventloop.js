setTimeout(() => {
  console.log("s1");
  Promise.resolve().then(() => {
    console.log("p2");
  });
  Promise.resolve().then(() => {
    console.log("p3");
  });
});

Promise.resolve().then(() => {
  console.log("p1");
  setTimeout(() => {
    console.log("s2");
  });
  setTimeout(() => {
    console.log("s3");
  });
});
