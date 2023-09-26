/* 
    Operadores Arirmeticos
    = -> Operador de asiganacion
    + -> Suma
    - -> Resta
    * -> Multiplicacion 
    / -> Division
    % -> Modulo
    ++ -> Aumento
    -- -> Disminucion

*/

const resultado1 = 10 + 10;
const resultado2 = 10 - 10;
const resultado3 = 10 % 3;
 
let numero1 = 1;
numero1++;
numero1--;

// Operadores de asiganacion

let numero2 = 10;
// numero = numero + 5;
numero2 += 5;
numero2 -= 5;

/* 
    Operadores de comparacion
    == -> Igual que
    === -> Igual en valor y tipo de comparacion
    != -> Diferentes
    !== -> Diferentes en valor y diferentes en tipo de comparacion
    > -> Mayor que
    >= -> Mayor o igual que
    < -> Menor que
    <= -> Menor o igual que
    ? -> Operador ternario
*/

//const resultado = 5 > 1;
//const resultado = 20 <= 20;
//const resultado = 20 == 20;
//const resultado = 20 === '20';

const resultado = 7 > 1 ? 'El primer valor es mayor al segundo': 'El segundo valor es mayor al primero';

console.log(resultado);
