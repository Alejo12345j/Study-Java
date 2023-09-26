const  contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
});

const primeraCaja =  document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation(); // Siempre se pone en el evento hijo.
    console.log('Hiciste click en la primera caja');
});
