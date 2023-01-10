const corpo = document.querySelector('.corpo');

function criaCaixa(){
	const caixa = document.createElement('div');
	caixa.style.width = '10px';
	caixa.style.height = '10px';
	caixa.style.margin = '2px 2px auto';
	caixa.style.borderRadius = '50px';
	caixa.style.border = '1px solid #ffff';
	caixa.style.display = 'inline-block';
	return caixa;
}

function lancaCaixa(){ //É necessário criar a função e chamala, pois com o innerHTML ele imprime o objeto div e não a caixa em si

let preto = criaCaixa();
corpo.appendChild(preto);
preto.style.backgroundColor = 'black';
preto.addEventListener('click', function(){document.body.style.backgroundColor='black'; document.body.style.color='white'; corpo.style.border='1px solid #ffff';
}, false); 	/* false no final para deixar a função desligada até eu clicar */

let verm = criaCaixa();
corpo.appendChild(verm);
verm.style.backgroundColor = 'red';
verm.addEventListener('click', function(){document.body.style.backgroundColor='red';}, false);

let azul = criaCaixa();
corpo.appendChild(azul);
azul.style.backgroundColor = 'blue';
azul.addEventListener('click', function(){document.body.style.backgroundColor='blue';}, false);

let verde = criaCaixa();
corpo.appendChild(verde);
verde.style.backgroundColor = 'green';
verde.addEventListener('click', function(){document.body.style.backgroundColor='green';}, false);

let roxo = criaCaixa();
corpo.appendChild(roxo);
roxo.style.backgroundColor = 'purple';
roxo.addEventListener('click', function(){document.body.style.backgroundColor='purple';}, false);

let branco = criaCaixa();
corpo.appendChild(branco);
branco.style.backgroundColor = 'white';
branco.addEventListener('click', function(){document.body.style.backgroundColor='white';}, false);

let marrom = criaCaixa();
corpo.appendChild(marrom);
marrom.style.backgroundColor = 'brown';
marrom.addEventListener('click', function(){document.body.style.backgroundColor='brown';}, false);

let amarelo = criaCaixa();
corpo.appendChild(amarelo);
amarelo.style.backgroundColor = 'yellow';
amarelo.addEventListener('click', function(){document.body.style.backgroundColor='yellow';}, false);

return preto, verm, verde, azul, roxo, branco, marrom, amarelo;
}
lancaCaixa();