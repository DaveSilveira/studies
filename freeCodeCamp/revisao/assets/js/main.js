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
    {foto: '', nome: 'Dave', profissao: 'Biomedico', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {foto: '', nome: 'Julius', profissao: 'Contador', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {foto: '', nome: 'Clara', profissao: 'Advogada', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
]

corpo.addEventListener('DOMContentLoaded', function(){
    corpo.innerText = 'começando'
    /*
    review.forEach()
    
    let foto = criaDiv()
    let nome = criaP()
    let profissao = criaP()
    let comentario = criaP()

    let antes = '<'
    let proximo = '>'
    let aleatorio = 'suprise-me'

*/
});
