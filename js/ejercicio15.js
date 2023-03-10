// Realiza un script que cuente el número de vocales 
// que tiene un texto.

let frase = prompt(`Ingresa una frase`);
let contadorDeVocales = 0;

for (i = 0; i < frase.length; i++){
    let caracter = frase.charAt(i);
    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        contadorDeVocales ++;
    }
} document.write(`La cantidad de vocales es: ${contadorDeVocales}`);