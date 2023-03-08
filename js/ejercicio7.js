/* Haz un script que escriba una pirámide inversa 
de los números del 1 al número que indique el usuario 
(no mayor de 50) */

let numero = parseInt(prompt("Ingrese un numero entre el 1 y el 50"));
console.log(numero)

if (!isNaN(numero)){
    if(numero >= 1 && numero <= 50){
        for (let i = numero; i >= 1; i --){
            for(let r = i; r >= 1; r --){
                document.write(i);
            } 
            document.write("<br>");
        }
    } else{
        alert("Ingresa un numero entre el 1 y el 50");
    }
} else{
    alert("Ingrese un número entre el 1 y el 50");
}