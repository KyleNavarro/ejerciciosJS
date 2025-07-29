function usuarioConectado(estado){
    const mensaje = estado === 'online' ? 'Usuario conectado' : 'Usuario desconectado';
    return mensaje;
}

document.writeln(usuarioConectado('online'));