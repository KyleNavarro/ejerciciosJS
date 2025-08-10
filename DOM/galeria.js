function $(id){
    return document.getElementById(id);
}



const fotoBig = $('imagen');
const fotoName = $('nombre');
const submodal = $('submodal');

const mini1 = $('img1');
const mini2 = $('img2');
const mini3 = $('img3');
const div = $('large')

const fotitos = document.querySelectorAll('#thumbs img');


let actual = mini1;
div.onclick = function(){
    div.className = '';// al dar click por fuera del modal, éste se cierra
}

submodal.onclick = function(evento){
    evento.stopPropagation();//evita que el div.className cierre el modal en cualquier lado.. parando la propagación del click..
    
}


for(let i = 0; i < fotitos.length; i++){
    fotitos[i].addEventListener('click', e => {
        cambiarFoto(
            e.currentTarget.src,
            e.currentTarget.nextElementSibling.innerHTML
        )
    });
}

//addEventListener  contempla 2 parametros normalmente (string del evento, función)
function cambiarFoto(url, nombre){
    fotoBig.src = url;
    fotoName.innerHTML = nombre; //manipulo el html, con esto puedo cambiar el nombre de cada imagen
    div.className = 'visible'

    console.log(fotoName.innerHTML)
}
//addEventListener permite agregar diferentes eventos al mismo objeto... con 'onclick' no es posible por que se reemplazaría
// mini1.addEventListener ('click', evento => { de esta forma se hace rudimentario y poco escalable
//     actual.className = '';
//     evento.currentTarget.className = 'active';
//     actual = evento.currentTarget;
//     //console.log(evento.currentTarget)
//     cambiarFoto('/DOM/fotos/dandadan.webp', 'Dandadan')

//})
//     function(){
//         fotoBig.setAttribute('src', '/DOM/fotos/dandadan.webp')
//         fotoName.innerHTML = 'Dandadan';
// }
// mini2.onclick = evento => {
//     actual.className = '';
//     evento.currentTarget.className = 'active';
//     actual = evento.currentTarget;
//     //console.log(evento.currentTarget)
//     cambiarFoto('/DOM/fotos/levi.webp', 'Levi');

// }

//     function(){
//         fotoBig.setAttribute('src', )
//         fotoName.innerHTML = 'Dandadan';
// }
// mini3.onclick = evento => {
//     actual.className = '';
//     evento.currentTarget.className = 'active';
//     actual = evento.currentTarget;
//     //console.log(evento.currentTarget)

//     cambiarFoto('/DOM/fotos/tanjiro.webp', 'Tanjiro');

// }
//     function(){
//         fotoBig.setAttribute('src', '/DOM/fotos/tanjiro.webp')
//         fotoName.innerHTML = 'Dandadan';
// }

