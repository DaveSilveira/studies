const form = document.querySelector('.formulario');
//captura o evento submit do formulario

form.addEventListener('submit', function(e){ // Segundo o professor é comum ver códigos aprensentando esta organização
	e.preventDefault(); //e de evento, também muito comum
	
	const inputPeso = e.target.querySelector('#peso'); //o .target pega o elemento dentro do elemento setado no evento (subtmit do form)
	const inputAltura = e.target.querySelector('#altura');
	
	const peso = Number(inputPeso.value); //Convertendo o valor recebido para number e frisando que eu quero valor (.value)
	const altura = Number(inputAltura.value);
	
	if (!peso){ //Se peso for falso, ou não avaliado como um valor (no caso se eu não digito nada no input retorna NaN)
		setResultado('Peso inválido!', false);
		return;
	} 
	
	if (!altura){
		setResultado('Altura inválida!', false);
		return;
	}
	
	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);
	
	const msg = `Seu IMC é ${imc}. Você está com ${nivelImc}`;
	
	setResultado(msg, true);
});


function getImc(peso, altura){
	const imc = peso / altura ** 2;
	return imc.toFixed(2); //Nunca esquecer do return para finalizar a função!!!
}

function getNivelImc (imc){
	const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
	
	if (imc > 40){ return nivel[5]; } //Caso um dos resultados seja true o return para a função, por isso não é necessário else if 
	if (imc >= 34.9 ){ return nivel[4];	} //É necessário nesse caso a ordem decrescente pois se ele encontra um valor ele para a checagem
	if (imc >= 29.9){ return nivel[3]; }
	if (imc >= 24.9){ return nivel[2]; }
	if (imc >= 18.5){ return nivel[1]; }
	if (imc < 18.5){ return nivel[0]; } 
	/*só para diminuir a quantidade de linhas, pode se tirar a chaves se o conteudo do if fica na mesma linha porém não é uma boa pratica */
}

function criaP (){
	const p = document.createElement('p');
	return p;
}

function setResultado(msg, isValid){
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = '';
	
	const p = criaP();
	p.innerHTML = msg
	resultado.appendChild(p);
	
	if (isValid){
		p.classList.add('paragrafo-resultado');
	} else {
		p.classList.add('bad');
	}
}