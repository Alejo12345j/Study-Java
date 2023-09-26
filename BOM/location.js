// Obtener URL de la pagina actual
console.log(location.href);

// Obtiene el hostname de la pagina actual
console.log(location.hostname);

// Obtiene el pathname de la pagina actual
console.log(location.pathname);

// Obtiene el protocolo de la pagina actual
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign('https://www.google.com/');
}

const regresar = () => {
    // history.back(); Regresar
    history.forward(); //Ir hacia adelante
}