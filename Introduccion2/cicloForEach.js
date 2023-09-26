/* 
    Ciclo ForEach


const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((amigo, index) => {console.log(`El amigo ${index} es ${amigo}`);});

*/

/* 
    Ciclo For In

const persona = {
    nombre: 'Juan',
    edad: 25, 
    correo: 'correo@gmail.com'
}

for (propiedad in persona) {
    persona[propiedad] = '';
}
console.log(persona);

*/

/* 
    Ciclo For Of
*/

const etiquetas = document.head.children;

/* for(elemento of etiquetas) {
    console.log(elemento);
} */

[...etiquetas].forEach((etiquetas) => {
    console.log(etiquetas);
});