const readlineSync = require("readline-sync");
let userName = readlineSync.question('What\'s your name?');
let userFirstName = readlineSync.question('What\'s your first name ?');
let userCity = readlineSync.question('Where do you live ?');
console.log(
  "Your name is " + userName , userFirstName + " and you live in " + userCity
);
