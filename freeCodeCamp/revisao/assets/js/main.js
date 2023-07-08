let foto = document.querySelector('.foto')
let nome = document.querySelector('.nome')
let profissao = document.querySelector('.profissao')
let comentario = document.querySelector('.comentario')

const review = [
    {foto: 'URL(./assets/img/userM.png)', nome: 'Dave', profissao: 'Biomedico', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {foto: 'URL(./assets/img/userM.png)', nome: 'Julius', profissao: 'Contador', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {foto: 'URL(./assets/img/userF.png)', nome: 'Clara', profissao: 'Advogada', comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
]

const btnVolta= document.querySelector('.volta')
const btnFrente = document.querySelector('.frente')
const aleatorio = document.querySelector('.aleatorio')
let item = 0;

document.addEventListener('DOMContentLoaded', function(){

    foto.style.backgroundImage = review[item].foto
    nome.textContent = review[item].nome
    profissao.textContent = review[item].profissao
    comentario.textContent = review[item].comentario
});
btnFrente.addEventListener('click', ()=> item++)
btnFrente.addEventListener('click', ()=> item - 1)
aleatorio.addEventListener('click', ()=> item = Math.floor(Math.random() * review.length))