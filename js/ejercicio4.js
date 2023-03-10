/* Realiza un script que PIDA números HASTA QUE 
se pulse “cancelar”. Si no es un número deberá 
indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total 
de los números introducidos.*/
let acumulador = 0;
let numero = 0;
do{
    numero = parseInt(prompt("Introduce un número"));
    if(!isNaN(numero)){
        acumulador = acumulador + numero;
    } else{
        alert("No es un número. Introduce un número");
    }
} while (confirm("¿Desea continuar?"));

document.write("Resultado: "+ acumulador);


