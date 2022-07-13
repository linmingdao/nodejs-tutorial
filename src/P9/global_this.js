console.log(this === global); // false
(function () {
  console.log(this === global); // true
})();
