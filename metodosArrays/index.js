const usuarios = [
    'kyle',
    'laura',
    'sara',
    'ricardo'
];

// array.push() agrega contenido al final del array
usuarios.push('navarro');

// array.unshift() agrega elementos al principio del array
usuarios.unshift('yuzzyr', 'dayana');// en el orden que se escriban


//Y PARA ELIMINAR VALORES TENGO .pop('elimina al final') y .shift('elimina al principio')



function mostrarUsuarios (){
    usuarios.forEach((valor, indice) => {//el forEach recibe una callback y puede ser arrowFunction
            document.writeln(`en la posición ${indice} está ${valor}`)
            document.writeln('<br>')
        }
    );
}


//.pop() elimina el ultimo
usuarios.pop();

//.unshift elimina el primero
usuarios.unshift();
