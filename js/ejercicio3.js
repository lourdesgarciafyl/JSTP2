/* Realiza un script que pida cadenas de texto 
hasta que se pulse “cancelar”. Al salir con “cancelar”
deben mostrarse todas las cadenas concatenadas con un guión -. 
*/
let cadena =``;

do{
    let palabra = prompt("Ingresa una palabra o frase")
    if (cadena == ``){
        cadena = palabra;
    } else {
        cadena = cadena + " - " + palabra;
    }
} while (confirm("¿Desea seguir agregando palabras?"));

document.write(cadena);