function temperatura(t){
    let mensaje = t >= 30 ? 'Hace calor' : 'Clima agradable'
    return mensaje;
}

document.writeln(temperatura(30));