/* Block Scope o Alcance tipo bloque
    -Pertenerce las variables declaradas con const o let dentro de un bloque {}
    -Solo podemos acceder a ellas dentro de un bloque
*/

const edad = 19;
if(edad >= 18){
    const accesoPermitido = true;
    if(true){
        console.log(accesoPermitido);
    }
    const miFuncion = () => {
        console.log(accesoPermitido);
    }
    miFuncion();
}

const accesoPermitido = 'Si';
console.log(accesoPermitido); 



// Siempre se accedera en ellas al trabajar con Var
if(true){
    var nombre = 'Marco';
}

console.log(nombre);