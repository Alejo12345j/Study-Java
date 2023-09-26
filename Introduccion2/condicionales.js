// Estructuras Condicionales

/*Ejemplo #1
const usuario = {
    edad: 17,
    pais: 'Honduras',
    ticket: true
}

/* if(usuario.edad > 17){
    console.log('El usuario es mayor de edad, puede entrar al concierto');
} 
else {
    console.log('El usuario no puede entrar al concierto');
} */


/* Ejemplo #2 Combinando operadores
const usuario = {
    edad: 18,
    pais: 'Honduras',
    ticket: true
}

if(usuario.edad >= 18 && usuario.ticket === true){
    console.log('El usuario es mayor de edad y tiene ticket');
}
else {
    console.log('El usuario no puede entrar al concierto');
} */


/* Ejemplo #3 Anidando condicionales
const usuario = {
    edad: 18,
    pais: 'Honduras',
    ticket: true
}

if(usuario.edad >=18){
    if(usuario.ticket === true){
        console.log('El usuario es mayor de edad y tiene ticket');
    }
    else {
        console.log('El usuario es mayor de edad, pero no tiene ticket');
    }
}
else {
    console.log('El usuario es menor de edad');
} */

// Ejemplo #4 elseif
const usuario = {
    edad: 18,
    pais: 'Honduras',
    ticket: true
}

if(usuario.pais === 'Honduras'){
    console.log('El usuario es hondureño');
}
else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano');
} 
else if(usuario.pais === 'españa'){
    console.log('El usuario es español');
} else {
    console.log('El usuario es de otro pais');
}