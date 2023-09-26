/* 
    Modificar estilos CSS mediante clases
*/

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

// Nos permite agregar clases a un elemento
const agregarClase = () => {
    primeraCaja.classList.add('activa');
}

// Nos permite elimar clases de un elemento
const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
}

// Nos permite alternar clases
const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
}

// 
const comprobarClase = () => {
    if(primeraCaja.classList.contains('activa')){
        console.log('La caja tiene la clase activa');
    } else {
        console.log('La caja no tiene la clase activa');
    }

    console.log('Y contiene las siguientes clases: ');
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    });
}