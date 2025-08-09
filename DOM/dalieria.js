const fotoBig = document.getElementById('imagen');
const fotoName = documento.getElementById('nombre');
function cambiarFoto(url, nombre){
    fotoBig.setAttribute('src', url);
    fotoName.innerHTML = nombre;
}

console.log({fotoBig});

