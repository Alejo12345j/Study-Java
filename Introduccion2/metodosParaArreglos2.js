/* 
    .indexOf()
    Obtenemos el primer index de un elemento
*/

const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres.indexOf('Gema'));

/* 
   .lastIndexOf()
    Obtenemos el último index de un elemento
*/

// const nombres2 = ['Carlos', 'Rafael', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres2.lastIndexOf('Rafael'));

/* 
    .forEach()
    Nos Permite ejecutar una funcion por cada elemento
*/

/* nombres.forEach((nombres, index) => {
    console.log(`Hola ${nombres} (${index})`);
}); */

/* 
    .find()
    Nos permite recorrer un arreglo y devuelve el Primer elemento
*/

/* const resultado = nombres.find((nombre) => {
     if(nombre[0] === 'E'){
        return nombre
     }
});

console.log(resultado); */

/* 
    .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultado de esa funcion
*/

// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
/* const nombresMayusculas = nombres.map((nombre) => {
    return nombre.toUpperCase();
});
console.log(nombresMayusculas);
 */
/* 
   .filter()
    Nos permite recorrer un arreglo y devuelve un nuevo arreglo con los elementos que cumplan una condicion
*/

/* const nombres4Letras = nombres.filter((nombre) => {
    if(nombre.length === 5){
        return nombre;
    } 
});

console.log(nombres4Letras); */

/* 
    .include()
    Nos permite saber si el arreglo contiene un elemento especificado
*/

/* console.log(nombres.includes('Julio'));
console.log(nombres.includes('Carlos')); */

/* 
    .every()
    Nos permite ejecutar un codicional sobre cada elemento
*/

/* const nombresValidos = nombres.every((nombre)  => {
    if(typeof nombre === 'string'){
        return true;
    } else {
        return false;
    }
});

console.log('¿Todos los nombres son validos? ' + nombresValidos); */

/* 
   .some()
    Nos permite ejecutar un codicional sobre cada elemento
*/

const nombresValidos = nombres.some((nombre)  => {
    if(typeof nombre !== 'string'){
        return true;
    } else {
        return false;
    }
});

console.log('¿Todos los nombres son validos? ' + nombresValidos);
