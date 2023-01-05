/**
/////////////////////////VAR - Somente tem escopo de função \\\\\\\\\\\\\\\\\\\\\

var exemplo = 'exemplo';

var exemplo = 'diferente';
console.log(exemplo): 

	>> diferente (pois o valor se atualizou)

var exemplo2 = 'exemplo2'

function mostrar(){
	var exemplo2 = 'recriou essa variavel e ela só serve para esse escopo';
	console.log(exemplo2); 
	
		>> recriou essa variavel e ela só serve para esse escopo (porque a função retem dentro do escopo dela variaveis var)
}

console.log(exemplo2); 

	>> exemplo2 (isso porque ela vai procurar o valor da var que esta no escopo global)

**********-----------------------*************

////////////////////////LET - Tem escopo de bloco (em qualquer bloco)\\\\\\\\\\\\\\\\\\\\

let exemplo = 'exemplo';
exemplo = 'mudou';

console.log(exemplo);
	>>mudou (isso porque não está dentro de nenhum outro escopo e ela se atualiza)
	
Qualquer elemento com bloco {
	let exemplo = 'recriei a let, ela vai retornar dentro do bloco o que está aqui'
	console.log(exemplo);
		>>recriei a let, ela vai retornar dentro do bloco o que está aqui
}

console.log(exemplo);
	>>mudou (pois a let que está dentro do bloco foi ignorada, para o escopo global ela não existe, diferente da var, que só funciona dessa maneira caso seja escopo de função)


OBS: se let esta com valor declarado em depois de um elemento que ela foi chamada ela ira retornar um erro, pois ela precisa estar sempre antes, pela lógica.
Isso não acontece com var, caso ela seja chamada antes de declarado um valor, no local que ela foi chamada irá retornar undefined, pois o js seta ela sem valor
no topo do código por ela existir em algum lugar dele.
FUNÇÂO - pega valor de variavel de fora, porém tudo que esta no seu escopo é restrito a ela mesma

**/