/**Math.random() is a built-in method that can be used to generate random numbers in JavaScript. */
const readlineSync = require("readline-sync");

const rand10 = () => {
    return Math.floor(Math.random()*10)
}
/**
 * Affiche un tableau de nombre alléatoire de taille n
 * @param {Int} n la longeur du tableau
 * 
 */


const multiRand = (n) => {
    let array = new Array(n)
    for (let i=0; i<array.length; i++) {
        array[i]=rand10();
    }
    console.log(array)
}
let n = parseInt (readlineSync.question("Pick a number : "))

multiRand(n)

/**
 * ParseInt : convertit un string en nombre

 */