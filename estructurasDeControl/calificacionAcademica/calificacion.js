let calificaicon = parseInt(prompt('Ingresa una Nota'));
const dw = document.writeln.bind(document);

if(isNaN(calificaicon)){
    dw('No ingresaste un numero válido')
}else if(calificaicon < 0 || calificaicon > 100){
    dw('Nota fuera de rango')
}else if(calificaicon >= 90){
    dw('Excelente')
}else if(calificaicon >= 70){
    dw('Aprobado')
}else{
    dw('Reprobado')
}






/*if(isNaN(calificaicon)){
    dw('No ingresaste un numero')
}else if(calificaicon >= 90 && calificaicon <= 100){
    dw('Excelente')
}else if(calificaicon >= 70 && calificaicon <= 89){
    dw('Aprobado')
}else if(calificaicon >= 0 && calificaicon <= 69){
    dw('Reprobado')
}else if(calificaicon > 100){
    dw('Nota fuera de rango')
}else{
    dw('No ingresaste una nota valida')
}*/