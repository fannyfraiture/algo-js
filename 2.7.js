const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("Can you give a number? "));
let sum = 0;

for (let x = 0; x < n; x++) {
  sum += parseInt(readlineSync.question("Can you give an another number? "));
}

console.log(sum);
