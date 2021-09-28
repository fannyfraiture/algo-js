let arr = [1, 2, 3, 4, 5],
  arr2 = [100, 101, 102];

  console.log((arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) /arr.length),
  console.log((arr2[0] + arr2[1] + arr2[2])/arr2.length);

  /**
 * Correction
 * const arr = [1, 2, 3, 4, 5] 
 * const arr2 = [100, 101, 102];
 * 
 * const averageArray = arr => {
 * let sum = 0;
 *  arr.forEach( el => {
 *      sum += el;      
 *      })
 * let average = sum / arr.length
 * return sum;
 * }
 * consol.log(sumArray(arr1) );
 */