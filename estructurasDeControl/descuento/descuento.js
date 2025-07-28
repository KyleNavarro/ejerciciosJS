let cantidadProductos = parseInt(prompt('Ingrese cuantos productos llevará'));
const dw = document.writeln.bind(document);

if(isNaN(cantidadProductos) || cantidadProductos <= 0){
    dw('Cantidad no valida')
}else if(cantidadProductos <= 4){
     dw(`Llevas ${cantidadProductos} productos, por ende tienes un 0% de descuento`)
}else if(cantidadProductos <=9){
    dw(`Llevas ${cantidadProductos} productos, por ende tienes un 10% de descuento`)
}else if(cantidadProductos >= 10){ 
    dw(`Llevas ${cantidadProductos} productos, por ende tienes un 20% de descuento`)
}