/* Global Scope o variables globales

    -Son las variables declaradas fuera de una funcion
    -Podemos acceder a ellas desde cualquier parte del codigo
    -Podemos usar const, let y var
*/

var nombre = 'Marco';
console.log(nombre);

const saludo = () =>{
    console.log('Hola ' + nombre);

    nombre = 'Pedro';
    console.log('El nuevo nombre es ' + nombre);
};
saludo();