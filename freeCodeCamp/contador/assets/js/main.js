const escopo = document.querySelector('.escopo-geral');
const contar = document.querySelector('.contar');
const zerar = document.querySelector('.zerar');
let valor = 0;
contar.innerHTML = valor;

escopo.addEventListener('click', function(){
	contar.innerHTML = `${valor++}`;
});
zerar.addEventListener('click', function(){
	contar.innerHTML = `${valor = 0}`;
});
