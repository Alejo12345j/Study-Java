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

fetchPosts().then((posts) => {
    console.log(posts);
}).catch((error) => {
    console.log(error);
});