// Generar una calculadora basica en JavaScript

function calculadora(operacion, num1, num2){
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if(num2 === 0 ){
                console.log('operación no válida')
                return;
            }else return num1 / num2;
    
        default:
            console.log('operación no válida');
            break;
    }
}

console.log(calculadora('suma', 5, 5));