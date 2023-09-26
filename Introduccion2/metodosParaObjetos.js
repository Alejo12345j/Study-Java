const usuario = {
    nombre: 'Marco',
    edad: 21,
    amigos: ['Alberto', 'Jose', 'Lissandro'],
    saludo: () => {
        console.log('Hola!');
    }
}

/*  
    Metodos propios
    Los objetos pueden tener metodos persoanlizados.
*/

// usuario.saludo();

/* 
    Object.keys()
    Nos decuelve un arreglo con llaves
*/

// const resultados = Object.keys(usuario);

/* 
    Object.values()
    Nos decuelve un arreglo con valores
*/
const resultados = Object.values(usuario);
console.log(resultados);

/* 
    Object.entries()
    Nos decuelve un arreglo con llaves y valores
*/

const resultados2 = Object.entries(usuario);
console.log(resultados2);

