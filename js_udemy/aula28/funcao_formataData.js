function zeroAEsquerda (num){
	return num >= 10 ? num : `0${num}`; //condição que adiciona zero na frente do numero caso < 10
}

function formataData(data){
const ano = zeroAEsquerda(data.getFullYear());
const mes = zeroAEsquerda(data.getMonth() + 1); //Mês com a data real
const dia = zeroAEsquerda(data.getDate());
const semana = zeroAEsquerda(data.getDay()); //Zero é domingo e 6 é sabado
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
const ms = zeroAEsquerda(data.getMilliseconds());

return `${semana} ${dia}/${mes}/${ano} ${hora}:${min}:${seg}.${ms}`
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);