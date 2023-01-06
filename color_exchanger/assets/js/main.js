const corpo = document.querySelector('.corpo');

function criaCaixa(){
	const caixa = document.createElement('div');
	caixa.style.width = '20px';
	caixa.style.height = '20px';
	caixa.style.margin = 'auto';
	caixa.style.borderRadius = '50px';
	return caixa;
}


function lancaCaixa(){ //É necessário criar a função e chamala, pois com o innerHTML ele imprime o objeto div e não a caixa em si
let caixa = criaCaixa();
corpo.appendChild(caixa);
caixa.style.margin = 'auto';
caixa.style.backgroundColor = 'red';

return caixa;
}


lancaCaixa();
lancaCaixa();