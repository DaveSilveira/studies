/*
///////////////////////ATRIBUIÇÃO VIA ESTRUTURAÇÃO\\\\\\\\\\\\\\\\\\\\\\

let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c]	 =		 [1, 2, 3];
desestruturação 	atribuição

console.log(a, b, c);
	>> 1 2 3

/**Outra forma de fazer como acima:

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);
	>> 1 2 3
	
/***Ou assim:

const letras = [b, c, a];
[a, b, c] = letras;

console.log(letras);
	>> b c a

*/

/*
////////////////COM ARRAYS\\\\\\\\\\\\\\\

// indice 		 0   1   2   3   4   5   6   7   8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, terceiroNumero ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero, resto):

	>> 10 20 30 (Atribuindo diretamente os indices da variavel numeros a variaveis distintas)
	   [40 50 60 70 80 90] (como atribui o valor resto depois das retcencias o js entendeu que eu queria o restante dos valores com essa variavel)
	   
///////////SELECIONANDO SOMENTES VALORES DISTINTOS PULANDO A ORDEM\\\\\\\\\\\\\\

const [primeiroNumero, , terceiroNumero, , quintoNumero]; (somente adicionei espaços vazios com virgulas para pular os valores)
console.log(primeiroNumero, quintoNumero);
	>> 10 50


////////////////ARRAYS DENTRO DE ARRAYS\\\\\\\\\\\\\\\\\\\\\\

//Primeiro indice    1          2          3
//Segundo indice  1  2  3    1  2  3    1  2  3 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

**Para acessar o numero 7...

console.log(numeros[3][1]);
	>> 7 (pois o 7 esta dentro do 3º indice no subindice 1)
		
		////////////Com desestruturação via atribuição\\\\\\\\\\\\\\\\
Para pegar o numero 8...

const [ , , [ , oito];

console.log(oito);
	>> 8
*/
