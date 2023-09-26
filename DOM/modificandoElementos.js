/* 
    innerHTML
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = 'Hola mundo';

/* 
    .attribute
*/

primeraCaja.id = 'nuevo-id';

/* 
    setAttribute
*/

primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');

/* 
    style.property
*/

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.backgroundColor = '#000000';
contenedor2Caja1.style.color = '#ffffff';
contenedor2Caja1.style.textTransform = 'uppercase';

