class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
    }

    static registrados = 1000;

    /* 
        Static: Definir propiedades y metodos sin necesitad de definir nuevos objetos 
    */
}

// const usuario = new Usuario ('Carlos', 'correo@gmail.com');
usuario.borrar(1);
