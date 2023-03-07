/*Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada
no es un número válido indicarlo en un mensaje.*/

let edad = parseInt(prompt("Ingresá tu edad para saber si podes conducir"));

if (!isNaN(edad) && edad >= 0 && edad <= 100){
    if(edad >= 18){
        document.write("<p>Puedes conducir</p>");
    } 
    else{
        document.write("<p>Aún no puedes conducir</p>");
    }
}else{
    alert("Ingrese un número válido");
}
