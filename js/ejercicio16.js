//Realiza un script que pida una cadena de texto y la devuelva al revés. 

let cadena = prompt("Escribe una frase");

for (i = cadena.length; i >= 0; i--){
    let letra = cadena.charAt(i);
    document.write(letra);
}