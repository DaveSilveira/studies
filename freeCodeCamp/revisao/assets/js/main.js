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
function mostrarQuadro(){
    let div = criaDiv()
    let foto = criaDiv()
    foto.innerHTML = review[0]['foto']
    div.appendChild(foto)
    let nome = criaP()
    nome.innerText = review[0]['nome'].textContent
    div.appendChild(nome)
    let profissao = criaP()
    profissao.innerText = review[0]['profissao']
    div.appendChild(profissao)
    let comentario = criaP()
    comentario.innerText = review[0]['comentario']
    div.appendChild(comentario)

    return div;
        }

document.addEventListener('DOMContentLoaded', function(){
    let comentario = criaDiv()
    corpo.appendChild(comentario)
    comentario.innerHTML = mostrarQuadro()
    let antes = '<'
    let proximo = '>'
    let aleatorio = 'suprise-me'

});
