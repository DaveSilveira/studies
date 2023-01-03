/*	OBSERVAÇÃO
*	A resolução do exercicio feita aqui é bastante diferente da resolução do professor Luiz.
*	Ele cria algumas funções para criar elementos HTML, realizar e verificar os calculos e utiliza um array para a verificação, 
*	coisa que eu não fiz, apenas designei
*	o if steatment dentro de uma função escopo, capturei o form, criei um preventDefault para
*	o botão de submit e rodei a fórmula.
*/

function escopoImc(){
let form = document.querySelector('.form');
/*Capturando o formularo para parar o envio do mesmo pela função evento*/

	form.onsubmit = function (evento){
        evento.preventDefault();
		/*Igual no exercicio da aula 20, essa é uma forma diferente de enviar os dados para o js e não atualizar a pagina com o button*/
		
	let peso = document.getElementById('peso').value;
	let altura = document.getElementById('altura').value;
	let res = document.getElementById('res');
	
		/*Não preciso puxar o submit pois quando adiconar o eventListener menciono ele, logo que esta dentro do form*/
		
	let imc = (peso / (altura * altura)).toFixed(2);
	
	
	if(peso == 0 || altura == 0){ //Setando erro caso não digite o peso
		res.innerHTML = `Você esqueceu de digitar algum valor. Insira o peso e a altura e tente novamente.`;
		res.style.backgroundColor = '#800000';
		res.style.color = 'white';
	res.style.borderRadius = '10px';
	} else if(imc > 0 && imc <= 18.5){ //desnutrição
		res.innerHTML = `Seu IMC é de ${imc}. Você se encontra abaixo do peso, procure atendimento médico.`;
		res.style.backgroundColor = '#FF6347';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	} else if(imc > 18.5 && imc <= 24.9){ //normal
		res.innerHTML = `Seu IMC é de ${imc}. Seu peso está normal.`;
		res.style.backgroundColor = '#2E8B57';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	} else if(imc >= 25 && imc <= 29.9){ //sobrepeso
		res.innerHTML = `Seu IMC é de ${imc}. Você está com sobrepeso, é ideal que você procure atendimento médico.`;
		res.style.backgroundColor = '#FF6347';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	} else if(imc >= 30 && imc <= 34.9){ //obesidade grau 1
		res.innerHTML = `Seu IMC é de ${imc}. Você está com obesidade grau 1, procure um médico.`;
		res.style.backgroundColor = '#FF6347';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	} else if(imc >= 35 && imc <= 39.9){ //obseidade grau 2
		res.innerHTML = `Seu IMC é de ${imc}. Você está com obesidade grau 2, procure um médico.`;
		res.style.backgroundColor = '#FF6347';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	} else if(imc > 40){ //obesidade grau 3
		res.innerHTML = `Seu IMC é de ${imc}. Você está com obesidade grau 3, procure atendimento médico.`;
		res.style.backgroundColor = '#800000';
		res.style.color = 'white';
		res.style.borderRadius = '10px';
	}
	 
	};
}
escopoImc();