//  Realiza un script que muestre la posición de la 
// primera vocal de un texto introducido por teclado.

let frase = prompt("Ingresa una frase");
let fraseMayuscula = frase.toUpperCase();
let vocales = ["A", "E", "I", "O", "U"];
let posicion = 0;
let parar = false;

for (i = 0; i < fraseMayuscula.length; i++){
    let letra = fraseMayuscula.charAt(i)
    for (v = 0; v <= vocales.length; v ++){
        if (vocales[v] == letra ){
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar){
        break;
    }
} document.write(`La primera vocal está ubicada en la posicion ${posicion}`)



/*Profes, no sabía usar arrays, pero vi explicaciones 
en youtube, asi que guiándome de ahi lo hice. Intenté hacerlo
sin un array pero no pude */