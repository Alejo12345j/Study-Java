/* 
    Estructura de una clase
    -Definicion
    -Propiedades
    -Constructor
    -Metodos
*/

class Usuario {
    tipo = 'usuario';
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nueva usuario registrado');
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo datos ... ');
        return `${this.nombre} ${this.apellido}`;
    }
}

const usuario = new Usuario('Marco', 'Santamaria');
console.log(usuario.obtenerNombreCompleto());

