const arr = [1, 2, 3, 4, 5];
let min = arr[0], max = arr[0];
for (let element of arr) {
    if (element > max) {
        max = element;
    } else if (element < min) {
        min = element;
    }
}
console.log("min:", min, "\nmax:", max);

/**
 * const arr = [1, 2, 3, 4, 5];
 * 
 * console.log (Math.min(...arr) );
 * console.log (Math.max(...arr) );
 */