const readlineSync = require("readline-sync");
let minAge = readlineSync.question("What's your min age?");
let currentAge = readlineSync.question("What's your current age?");
let maxAge = readlineSync.question("What's your max age?");

if (maxAge <= 22 || minAge >= 22) {
  console.log("You are an idiot...");
} else {
  console.log("You are a genius !");
}
