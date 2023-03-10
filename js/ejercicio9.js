//Crea un script que escriba los números del 1 al 500, que indique cuáles 
// son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

for (i = 1; i <= 500; i++){
    document.write(i);
    if(i % 4 === 0){
        document.write(" es múltiplo de 4");
    } 
    if (i % 9 === 0){
        document.write(" es multiplo de 9");
    } 
    document.write("<br>");
    if (i % 5 === 0){
        document.write("<hr>");
    }
}