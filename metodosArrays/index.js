const usuarios = [
    'kyle',
    'laura',
    'sara',
    'ricardo'
];

function mostrarUsuarios (){
    usuarios.forEach(valor => {//el forEach recibe una callback y puede ser arrowFunction
            document.writeln(valor)
            document.writeln('<br>')
        }
    );
}