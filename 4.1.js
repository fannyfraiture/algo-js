const readlineSync = require("readline-sync");
const calcSurface = (length, width) => {
    return length * width;
};

const userInput = readlineSync.question(
    "Give me the length and the width of a rectangle? "
);
const userInputs = userInput.split(" ");
console.log(
    calcSurface(
        new Number(userInputs[0]),
        new Number(userInputs[1])
    )
);