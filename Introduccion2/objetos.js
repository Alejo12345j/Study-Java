const persona = {
    nombre: 'Marco',
    edad: 21,
    correo: 'marcoalejandrosantamaria@gmail.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negron', 'Rojo'],
    saludo: function(){
        alert('Saludo');
    }
};

// console.log(persona);
// console.log(persona['edad']);

const variable = 'suscripciones';
// console.log(persona['suscripciones']);
// console.log(persona.suscripciones.correo);

persona.pais = 'Mexico';
persona.pais = 'España';

console.log(persona);
persona.saludo();

