
let array1 = ["quaranta", "pere", "ape", "peperoncino", "cat"]
let array2 = ["miele", "DOC", "tre", "arcobaleno", "age"]

function filtraPerLunghezza(array_uno,array_due,lunghezza_min) {
    
    let arrayUnito = array_uno.concat(array_due)
    
    arrayUnito = arrayUnito.filter((elemento) => elemento.length >= lunghezza_min )
    
    console.log(arrayUnito)
    
}

filtraPerLunghezza(array1,array2,4)

