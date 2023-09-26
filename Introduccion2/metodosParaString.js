/* 
    .length
    Devuelve el numero de caracteres
*/

const texto = 'Hola soy Marco';
console.log(texto.length);

/* 
 .indexOf()
    Devuelve el indice de la primera ocurrencia de un elemento en la cadena
*/

const texto2 = 'Hola soy Marco';
console.log(texto2.indexOf('o')); 

/* 
.lastIndexOf()
    Devuelve el indice de la ultima ocurrencia de un elemento en la cadena
*/

const texto3 = 'Hola soy Marco';
console.log(texto3.lastIndexOf('o'));

/* 
    .slice()
    Devuelve una subcadena de la cadena
*/

const texto4 = 'Hola soy Marco';
console.log(texto4.slice(8,13));
console.log(texto4.slice(-7,-1));

/* 
    .replace()
    Devuelve una cadena de texto en donde remplaza un valor
*/

const texto5 = 'Hola soy Marco';
console.log(texto5.replace('o','a'));

/* 
   .split()
    Divide una cadena en subcadenas
*/

const texto6 = 'Hola soy Marco';
console.log(texto6.split(' '));

/* 
  .toLowerCase()
    Devuelve una copia de la cadena en minuscula
*/

console.log(texto5.toLowerCase());

/* 
   .toUpperCase()
    Devuelve una copia de la cadena en mayuscula
*/

console.log(texto5.toUpperCase());