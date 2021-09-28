/**
 * Racine carré : math.sqrt
 * Mettre au carré : math.pow
 * @param {*} x1 valeur point A
 * @param {*} x2 valeur point A
 * @param {*} y1 valeur point B
 * @param {*} y2 valeur point B
 * @returns 
 */
const calcDistance =(x1, x2, y1, y2) => {
return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}

console.log (calcDistance(1, 2, 4, 6))