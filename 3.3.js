// Write a program that will create a duplicate of a given array.

numbers = [1, 2, 3];
numbersCopy = [];

for (i = 0; i < numbers.length; i++) {
  console.log((numbersCopy[i] = numbers[i]));
}

// méthode push
numbers = [1, 2, 3];
numbersCopy = [];

numbersCopy.push(4);
console.log(numbers, numbersCopy);