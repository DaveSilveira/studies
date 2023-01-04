//const data = new Date(); A função date é uma função construtora e quando eu insiro new estou falando com a função construtora
//Funções construtoras começam com a primeira letra maiuscula

/*
As datas do Date são baseadas no timestamp unix, ou epoca unix (01/01/1970) ou marco zero unix
Logo Date(0) == 01/01/1970
	 Date(-1) == 01/01/1969
	 Date(1) == 01/01/1971...

const dataAtual = new Date();
const dataFormato1 = new Date(2022, 2, 7, 20, 37, 14, 500); // (ano, mes, dia , hora, min, seg, ms) com number, nunca zero a esquerda
const dataFormato2 = new Date('2023-01-01 00:00:01');

OBSERVAÇÕES IMPORTANTES

*O js reconhece o mes a partir do 0, logo, janeiro é o mes 0 e dezembro é o mes 11 em js

*/


//Exemplo de uma função para imprimir hora no nosso padrão

function zeroAEsquerda (num){
	return num >= 10 ? num : `0${num}`; //condição que adiciona zero na frente do numero caso < 10
}

function formataData(data){
const ano = zeroAEsquerda(data.getFullYear());
const mes = zeroAEsquerda(data.getMonth() + 1); //Mês com a data real
const dia zeroAEsquerda(data.getDate());
const semana = zeroAEsquerda(data.getDay()); //Zero é domingo e 6 é sabado
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
const ms = zeroAEsquerda(data.getMilliseconds());

return `${semana} ${dia}/${mes}/${ano} ${hora}:${min}:${seg}.${ms}`
}