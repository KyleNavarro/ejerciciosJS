const usuarios = [
    'kyle',
    'laura',
    'melisa',
    'diana',
    'dayana',
    'milena',
    'alicia',
    'orlando'
   ]

const usuariosFiltrados = usuarios.filter(u =>
    u.length > 5
)

document.writeln(`${usuariosFiltrados} <br>`);