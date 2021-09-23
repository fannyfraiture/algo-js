const readlineSync = require("readline-sync");
let i = readlineSync.question("Pick a number");

while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i += 1;
}
