const b = Buffer.allocUnsafe(2).fill("h");
console.log(b); // <Buffer 68 68>
console.log(b.toString()); // hh
