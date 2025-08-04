let datos = [];

function cargarDatos(){
    const usuarios = prompt('escriobe el nombre de usuario: ');
    datos.push(usuarios);
}

function mostrarDatos(){
    console.clear();
    console.table(datos);
}

function eliminarDatos(){
    const idx = prompt('Elije el indice que quieres eliminar: ');
    datos.splice(idx, 1)
}

function eliminarValor(){
    const nombreUsuario = prompt('Escribe el nombre de usuario que quieres eliminar: ');
    datos = datos.filter(u => u != nombreUsuario);
}


