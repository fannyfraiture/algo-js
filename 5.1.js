const readlineSync = require("readline-sync");

const askTVSerie=() => {
    let serie={}
    let userinput
    serie.name = readlineSync.question("What's the name ? ")
    serie.year = readlineSync.question("What's the production year ? ")
    serie.cast = []
    while (userinput != "stop"){
        userinput = readlineSync.question("What's the name of the cast members ? Type stop to stop ")
        
    
        if(userinput != "stop") {
            serie.cast.push(userinput)
        }

    }
console.log (serie)
}
askTVSerie()