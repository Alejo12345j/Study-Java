const agregarCaja = () => {
    // Paso 1: Crear el elemento
    const nuevaCaja = document.createElement('div');

    // Paso 2: Agregamos texto y atributos
    nuevaCaja.innerText = 'Nueva Caja';
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    // Paso 3: Agregar el elemento al DOM
    const contenedor =  document.getElementById('contenedor1');

    /* Se agrega como ultimo elemento
    contenedor.appendChild(nuevaCaja);*/

    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
    // contenedor.insertAdjacentElement('beforebegin', nuevaCaja);
    // contenedor.insertAdjacentElement('afterend', nuevaCaja);
    // contenedor.insertAdjacentElement('beforeend', nuevaCaja);

    /*  
        .replaceWith
    */

    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);

};