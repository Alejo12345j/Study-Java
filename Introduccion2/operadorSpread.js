/* 
    Operador Spread
*/

/* const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    usuario: 'correo@correo.com',
    contraseña: '1234567'
};

const usuario = {
    nombre: 'Marco',
    edad: 21,
    ...datosLogin
}

console.log(usuario); */

/* 
    Parametros Rest
*/

/* const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('Marco', 'correo@correo.com')
registrarUsuario('Alberto', 'correo@correo.com', 28, 'Honduras');
 */

/* 
    Destructuracion de objetos
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);

const persona = {
    nombre: 'Marco',
    edad: 21,
    pais: 'Nicaragua'
};

const {nombre, edad, pais} = persona;
console.log(nombre, pais);


// 


const mostarEdad = ({nombre,edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostarEdad(persona);