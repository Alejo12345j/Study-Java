const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const posts = ['Posts1', 'Posts2', 'Posts3'];
            const error = false;

            if(error) {
                reject('Hubo un error al intentar obtener los datos');
            } else {
                resolve(posts);
            }

        }, 2000);
    });
}


const mostrarPosts = async() => {
    try {
        const posts = await fetchPosts();
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}

mostrarPosts();
