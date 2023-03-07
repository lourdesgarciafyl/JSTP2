/*Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada
no es un número válido indicarlo en un mensaje.*/

let edad = parseInt(prompt("Ingresá tu edad para saber si podes conducir"));

switch(true){
    case ((edad > 18) && (edad <= 100) ): 
    document.write("<p>Ya podes conducir</p>");
    break;
    case (edad <= 18):
    document.write("<p>No podes conducir todavía</p>");
    break;
    case (edad > 100):
    document.write("<p>Ingresá un numero válido por favor</p>");
    break;
    default:
    document.write("Ingresa un numero por favor");
}