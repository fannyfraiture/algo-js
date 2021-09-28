// Write a program that will create a duplicate of a given array.

numbers = [1, 2, 3];
numbersCopy = [...numbers];

for (i = 0; i < numbers.length; i++) {
  console.log((numbersCopy[i] = numbers[i]));
}

// méthode push
const arr1 = [1, 2, 3];
const arr1Copy = [...numbers];

console.log (ar1Copy)