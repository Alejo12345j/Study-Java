// objeto que nos va a permitir interactuar con el navegador

console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

/*  
    window.open()
    Nos permite abrir ventanas del navegador
    Nota: Es posible que el navegador te pida permisos para abrir una nueva

    - ler parametro: Direccién de la nueva ventana
    - 2do parametro: Nombre de la ventana
    - 3er parametro: Cadena de texto de opciones

    Nos devuelve un objeto para aceder a esa ventana
 */

let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Mi nueva ventana','width=500, height=500');
    ventana.document.write('Hola escrbiendo en la nueva venatana');
};

const cerrarVentana = () => {
    ventana.close();
};

/* 
    Screen Object
    Representa la pantalla del usuario.
*/

console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

console.log('Ancho de pantalla sin barra de windows:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de windows:', window.screen.availHeight);

