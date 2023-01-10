const corpo = document.querySelector('.corpo');

function criaH1(){
	let h1 = document.createElement('h1');
	return h1;
}
function criaBtn(){
	let btn = document.createElement('button');
	return btn;
}

function contador(){
	let contar = criaH1();
	corpo.appendChild(contar);
	contar = Number(0);
	console.log(contar)
	return contar;
}

contador();