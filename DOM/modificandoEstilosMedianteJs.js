/* 
    Modificar estilos CSS mediante "Inline Styles"
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja');
ultimaCaja.style.backgroundColor = '#000000';
ultimaCaja.style.color = '#ffffff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        tamaño ++;
        caja.style.fontSize = `${tamaño}px`;
    });
};

const disminuirFuente = () => {
    cajas.forEach((caja) => {
        tamaño --;
        caja.style.fontSize = `${tamaño}px`;
    });
};