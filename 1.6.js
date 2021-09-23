const readlineSync = require("readline-sync");
let firstNumber = new Number(readlineSync.question('What\'s your first number?'));
let secondNumber = new Number(readlineSync.question('What\'s your second number?'));
let totalNumber = firstNumber / secondNumber;
console.log(totalNumber)