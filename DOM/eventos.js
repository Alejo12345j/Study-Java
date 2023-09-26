const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', (e) => {
    primeraCaja.classList.toggle('activa');
});

/* 
    Agregando el evento a multiples elementos
    Forma no optima
*/

const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        
        console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
    });
});