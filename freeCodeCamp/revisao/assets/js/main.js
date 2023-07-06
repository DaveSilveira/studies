const corpo = document.querySelector('.corpo')

function criaDiv(){
    let div = document.createElement('div')
    return div
}
function criaP(){
    let p = document.createElement('p')
    return p
}

const review = [
    {
        foto: '',
        nome: '',
        profissao: '',
        comentario: '',

    }
]

corpo.addEventListener('DOMContentLoaded', function(){
    let foto = criaDiv()
    let nome = criaP()
    let profissao = criaP()
    let comentario = criaP()
});