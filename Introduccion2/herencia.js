class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['Post1', 'Post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('Borrar')){
            console.log(`El post con el id ${id} ha sido borrado`);
        } else {
            console.log('No tienes permiso para borrar este post');
        }
    }
}

const usuario = new Usuario('Carlos', '123456');
console.log(usuario.obtenerPosts());

const moderador = new Moderador('Felipe', '123', [/* 'Borrar', */ 'Editar']);
console.log(moderador.obtenerPosts());
console.log(moderador.permisos);
moderador.borrarPost(2);