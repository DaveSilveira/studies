const corpo = document.querySelector('.corpo');

function criaCaixa(){
	const caixa = document.createElement('div');
	caixa.style.width = '20px';
	caixa.style.height = '20px';
	caixa.style.margin = '2px';
	return caixa;
}

function lancaCaixa(){ //É necessário criar a função e chamala, pois com o innerHTML ele imprime o objeto div e não a caixa em si
let caixaMae = criaCaixa();
corpo.appendChild(caixaMae);
caixaMae.style.margin = 'auto';

let vermelho = criaCaixa();
caixaMae.appendChild(vermelho);
vermelho.style.backgroundColor = 'red'

let azul = criaCaixa();
caixaMae.appendChild(azul);
azul.style.backgroundColor = 'blue'

let verde = criaCaixa();
caixaMae.appendChild(verde);
verde.style.backgroundColor = 'green'

let preto = criaCaixa();
caixaMae.appendChild(preto);
preto.style.backgroundColor = 'black'

	function mudaCor(){ //melhor jeito para mudar a cor?
		const mudaCor = document.body.style.backgroundColor = '';
		return mudaCor;
	}

//criar interação ao clique nas divs

return preto, verde, azul, vermelho;
}

lancaCaixa();