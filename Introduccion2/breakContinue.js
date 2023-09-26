/* 
    Break

const nombres = ['Arturo', 'Andres', 'Alejandra', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

for(let i = 0; i <= nombres.length; i++){
    if(nombres[i][0] !== 'A'){
        console.log('ALTO, hay un nombre que no empieza por la letra A');
        console.log(nombres[i] + ' No empieza por la letra A');
        break;
    }
    console.log(nombres[i]);
} */

/* 
    Continue
*/

const nombres = ['Carlos', 'Christian', 'Christopher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptada');

for(let i = 0; i <= nombres.length; i++){
    if(nombres[i] === 'Jorge'){
        continue;
    }
    console.log(nombres[i]);
}