// Realiza un script que pida por teclado 3 edades 
// y 3 nombres e indique el nombre del mayor. 

let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese la primera edad"));

let nombre2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese la segunda edad"));

let nombre3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese la tercera edad"));

let mayor = Math.max(edad1, edad2, edad3);

switch(mayor){
    case edad1:
        document.write(`El mayor es: ` + nombre1);
        break;
    case edad2:
        document.write(`El mayor es: ` + nombre2);
        break;
    case edad3:
        document.write(`El mayor es: ` + nombre3);
        break;
    default:
        alert("Ingresó un valor erróneo");
}