module.exports = {
    posts: [
        {
            id: 'IDTESTE',
            title: 'Exemplo de título',
            description: 'Exemplo de descrição'
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description })
    }



}


function generateID() {
    return Math.random().toString(36).substring(2, 9)
    //função gera ID aleatório na base 36, ou seja, 26 letras e 10 números. 
    //substring serve porque a função random gera um número aleatório de 0 a 1, 
    //então o valor inicial é onde começa a string e o final onde termina.

}
