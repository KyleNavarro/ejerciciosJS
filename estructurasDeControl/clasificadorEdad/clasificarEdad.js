let edad = parseInt(prompt('Ingrese la Edad'))
const dw = document.writeln.bind(document)

if(isNaN(edad) || edad <= 0){
    dw('Edad no Válida')
}else if(edad < 13){
    dw('Niño')
}else if(edad < 18){
    dw('Adolecente')
}else if(edad < 65){
    dw('Adulto')
}else{
    dw('Adulto mayor')
}