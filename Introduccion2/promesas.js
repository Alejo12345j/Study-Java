const promise = new Promise((resolve, reject) => {
    // Accion que se ejecutara

    setTimeout(() => {
        const exito = false;
        
        if (exito) {
            resolve('La operacion tuvo exito');
        } else {
            reject('Algo salió mal');
        }
    }, 4000);
});

promise.then((resultado) => {
    alert(resultado);
});

promise.catch((error) => {
    alert(error);
});