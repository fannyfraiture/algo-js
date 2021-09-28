/**Math.random() is a built-in method that can be used to generate random numbers in JavaScript. */
/**
 * Me revoit un chiffre random
 * @returns renvoit un chiffre random
 * Partie 2 = optimisé (cheminement à l'envers du 2)
 */

const rand10 = () => {
    return Math.floor(Math.random()*10)
}

console.log(rand10())

/* Partie 1 = cheminement logique, mais pas optimisé)

    const rand10 = () => {
    let random = 0 
    random = Math.random() *10
    random = Math.floor(random)
    return random
}



*/