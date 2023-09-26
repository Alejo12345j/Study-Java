const crearCookie = () => {
    // document.cookie = 'nombre=Carlos';
    document.cookie = 'nombre=Marco;';
}

const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `nombre ${usuario}; expires = 1 Jan 2023 01:00:00 UTC`;
    alert('Sesion iniciada')

}

/* 
    Forma para obtener el usuario de las cookies
*/

let usuario;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'nombre') {
        usuario = cookie.split('=')[1];
    }
});

if(usuario){
    console.log('Hola ' + usuario);
}
else {
    console.log('Usuario no encontrado');
}

const cerrarSesion = () => {
    document.cookie = 'nombre=; expires = Thu, 01 Jan 1970 00:00:00 UTC';
    alert('Sesion cerrada')
}