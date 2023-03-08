/* Crea script para generar la pirámide siguiente 
con los números del 1 al número que indique el 
usuario (no mayor de 50) 
*/
let numero = parseInt(prompt("Ingresa un numero entre el 1 y el 50"));

if(!isNaN(numero)){
    if(numero >= 1 && numero <= 50){
        for(let i = 1; i <= numero; i++){
            for(let r = 1; r <= i; r++){
                document.write(r);
            }
            document.write("<br>");
        } 
    } else{
        alert("Ingrese un numero entre el 1 y el 50");
    }

} else{
    alert("Ingrese un numero entre el 1 y el 50");
}
