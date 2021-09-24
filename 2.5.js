const readlineSync = require("readline-sync");
let favoriteNumber = 0;

while (favoriteNumber != 42) {
  favoriteNumber = readlineSync.question("What's your favorite number ?");

  if (favoriteNumber != 42) {
    console.log("Are you sure ?");
  }
}

console.log("thanks");
