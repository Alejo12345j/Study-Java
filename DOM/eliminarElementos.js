const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaAEliminar = padre.querySelector('.caja');

    if(cajaAEliminar) {
        padre.removeChild(cajaAEliminar);
    } else {
        console.log('No se ha eliminado nada');
    }
}