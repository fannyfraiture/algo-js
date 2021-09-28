const readlineSync = require("readline-sync");
const rand10 = () => {
    return Math.floor(Math.random()*10)
}
const average = (arr) => {
    let total = 0
    for (let i=0; i<arr.length; i++){
        total += arr[i]
    }

    console.log(total/arr.length)
}

average ([1,2,3,4,5,8,9])

const min = (arr) => {

    console.log(Math.min(...arr))
}

min ([1,2,3,4,5,8,9])

const max = (arr) => {

    console.log(Math.max(...arr))
}

max ([1,2,3,4,5,8,9])

const multiRand = (n) => {
    let array = new Array(n)
    for (let i=0; i<array.length; i++) {
        array[i]=rand10();
    }
    return array 
}
let n = parseInt (readlineSync.question("Pick a number : "))

let array = multiRand(n)
max(array)
min(array)
average(array)