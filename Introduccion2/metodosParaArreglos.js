const colores = ['Rojo', 'Verde', 'Azul']

/* 
    .length()
    (Propiedad) - Nos permite conocer la cantidad de elementos de un arreglo
*/

// console.log(colores.length)

/* 
    .tostring()
    (Propiedad) - Nos permite transformar un arreglo a una cadena de texto.
*/

// document.body.innerHTML = colores.toString();

/* 
    .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
*/

// console.log(colores.join(' - '));

/* 
    .sort()
    Nos permite ordenar un arreglo de cadena de texto, de forma alfabetica
*/

// const letras = ['c','b','d','a'];
// console.log(letras.sort());

// const numeros = [ 3, 2, 4, 1];
// console.log(numeros.sort());

/* 
   .reverse()
    Nos permite invertir el orden de un arreglo de forma desendente 
*/

// console.log(letras.reverse());
// console.log(numeros.reverse());

/* 
    .concat()
    Nos permite juntar dos arreglos

*/

// const arreglo1 = [1, 2, 3];
// const arreglo2 = ['A','B','C'];

// const arreglo3 = arreglo1.concat(arreglo2);

// console.log(arreglo3);

/* 
    .push()
    Nos permite agregar un elemento al final del arreglo
*/

// colores.push('Amarillo');
// console.log(colores);

/* 
   .pop()
    Nos permite eliminar un elemento del final del arreglo
*/

// colores.pop();
// console.log(colores);

/* 
   .shift()
    Nos permite eliminar un elemento del inicio del arreglo
*/

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(dias);
const diaEliminado = dias.shift();
console.log(diaEliminado);

/* 
   .unshift()
    Nos permite agregar un elemento al inicio del arreglo
*/

dias.unshift('Marco');
console.log(dias);

/* 
  .splice()
    Nos permite insertar elementos a un arreglo donde lo especifique
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(1, 2, 'Rafael', 'Roberto');
console.log(amigos);

/* 
    .slice()
    Nos permite copiar una parte de un arreglo a otro
*/

const frutas = ['Fresa', 'Manzana', ' Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas)
