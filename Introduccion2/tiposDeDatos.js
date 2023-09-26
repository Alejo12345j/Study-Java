/* 
    Tipos de datos que podemos guardar en las variables

    string-Cadena de texto
    number-Numero
    boolean-Booleano
    object-Objeto
    funtion Funciones

    null- nulo
    undefined-Valor sin definir
*/

const nombre = 'Carlos';
const parrafo = 'Este es un parrafo';
const parrafo2 = 'Este es un "parrafo"';
const parrafo3 = 'Este es un \'parrafo\'';

// Numeros

const numero = 4;
const numero2 = -4.123;

// Booleanos

const usuarioConectado = true;
const mayorQue = 10 > 2;
// console.log(mayorQue)

// Arreglos

const arreglo = ['texto', 456, true, {propiedad: 'valor'},[1,2,3]];
// console.log(arreglo)

// Objeto

const persona = {
    nombre: 'Marco',
    edad: 27,
    carro: {
        marca: 'Mitsubishi',
        color: 'Negro'
    },
};
// console.log(persona.carro)

// Funcion
// Definiendo la funcion
function hola(){
    console.log('Hola');
}
// Ejecutar codigo
hola();

// Null

const miVariable = null;
const miVariable2 = undefined;