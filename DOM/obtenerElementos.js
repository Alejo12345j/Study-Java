/* 
    getElementById

const contenedor1 = document.getElementById('contenedor1')
console.log(contenedor1);
*/

/* 
    children 

console.log(contenedor1.children);
*/

/* 
    parentElement

console.log(contenedor1.parentElement);
*/

/* 
    getElementsByTagName

const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en la pagina`);
*/

/* 
    getElementsByClassName

const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores);
*/

/* 
    querySelector

const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);
*/

/* 
    querySelectorAll

const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

cajas.forEach((caja)  => {
    console.log(caja);
});
*/

/* 
    closest

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));
*/

/* 
    Podemos encadenar todos los metodos  para obtener elementos
*/

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));