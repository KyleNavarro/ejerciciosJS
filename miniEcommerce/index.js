const productos = [
    ['tarta de everdura', 200],
    ['milanesa', 500],
    ['palanga', 40],
    ['alfajor jorgito', 100],
    ['mouse read dragon', 340],
    ['gaseosa', 5000],
    ['mayonesa', 40]
]
//podríamos iterar con un ciclo for.
function crearMenuProductos(){
    for(let i = 0; i < productos.length; i++){
        for(let j = 0; j < productos[i].length ; j++){
            document.writeln(productos[i][j]);
        }       
        document.writeln('<br>')
    }  
}



function crearMenuProductosForEach(){
    productos.forEach(producto =>{
        producto.forEach(dato =>{
            document.writeln(dato)
        })
        document.writeln('<br>')
    })
}

//el for primero pasa por cada elimento y no pasa al siguiente hasta iterar todos los elementos de la matriz   