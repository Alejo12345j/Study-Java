/* Parametros y Argumentos

- Parametros: Los valores especificados en la definicion
- Argumentos: Los valores que le pasamos a la funcion cuando la invocamos

*/

/* const saludo = (nombre = 'Amigo') => {
    console.log(`Hola ${nombre}!`);
};

saludo('Marco');
saludo('Alberto');
saludo('Flores');
saludo(); */

/* Multiples parametros */

const operacion = (tipo,numero1, numero2) => {
    if (tipo === 'suma'){
        console.log(numero1+numero2);
    } 
    else if (tipo === 'resta'){
        console.log(numero1-numero2);
    }
}

operacion('suma',100, 100);
operacion('resta',100, 200);

