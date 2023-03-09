//Realiza un script que pida una cadena de texto y lo
// muestre poniendo el signo – entre cada carácter sin usar el método replace. 

let frase = prompt("Ingrese una frase");

for(i = 0; i < frase.length; i++){
    let letra = frase.charAt(i);
    if(i == frase.length - 1){
        document.write(letra);
    } else{
        document.write(letra + "-");
    }
}
