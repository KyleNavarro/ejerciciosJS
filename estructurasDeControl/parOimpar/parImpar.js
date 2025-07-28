let numero = parseInt(prompt('ingrese un numero '));
if(isNaN(numero)){
    document.writeln('No ingresaste un numero')
}else if(numero < 0){
    document.writeln('ingresaste un numero negativo')
}else if(numero % 2 === 0){
    document.writeln('Excelente, el numero que ingresaste es Par')
}else{
    document.writeln('El numero que ingresaste9 es Impar')
}