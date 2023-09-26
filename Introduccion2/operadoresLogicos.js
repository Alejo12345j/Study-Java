/* 
    Operadores Logicos

    && -> And
    || -> Or
    ! -> Not
*/

const nombre = 'Marco';
const edad = '17';
const tieneEntrada = true;
const tienePermiso = true;

/* Ejemplo #1 - &&
const permitirAcceso = edad >= 18 && tieneEntrada == true;
console.log('Acesso permitido al concierto: ' + permitirAcceso); */


/* Ejemplo #2 - ||
const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('Acesso permitido al concierto:'+ permitirAcceso); */


/* Ejemplo #3 -!
const variable = false;
console.log(!variable); */