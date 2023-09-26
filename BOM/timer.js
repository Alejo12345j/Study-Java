/* 
    window.setTimeout()

const saludo = () => {
    console.log('Hola!')
}

let id;
const iniciar = () => {
    console.log('Iniciando...')
    id = setTimeout(saludo, 5000);
}

const parar = () => {
    console.log('Parando...')
    clearTimeout(id);
}
*/

/* 
    window.setInterval()
*/


let cuenta = 0;
let id;

const iniciar = () => {
    console.log('Iniciando...');
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;

    }, 1000);
};

const parar = () => {
    console.log('Parando...');
    clearInterval(id);
};
