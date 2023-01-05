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

function diaSemanaTexto(diaSemana){

switch (diaSemana){ //variavel que estou checando
    case 0 : diaSemanaTexto = 'Domingo'; //variavel em que vou retornar a string
    return diaSemanaTexto; //Como está em função tenho que colocar o return, caso contrario é break
    case 1 : diaSemanaTexto = 'Segunda-feira';
    return diaSemanaTexto;
    case 2:  diaSemanaTexto = 'Terça-feira'; 
    return diaSemanaTexto;
    case 3 : diaSemanaTexto = 'Quarta-feira';
    return diaSemanaTexto;
    case 4 : diaSemanaTexto = 'Quinta-feira';
    return diaSemanaTexto;
    case 5 : diaSemanaTexto = 'Sexta-feira';
    return diaSemanaTexto;
    case 6 : diaSemanaTexto = 'Sábado';
    return diaSemanaTexto;
    dafault : ''; //Não precisa de break. Funciona como o else
}
}
const data = new Date();
const dataBrasil = formataData(data);
const diaSemana = diaSemanaTexto(data.getDay());
const retornaData = document.querySelector('.container h1');

retornaData.innerHTML = `${diaSemana}, ${dataBrasil}`;
retornaData.style.textAlign = 'center';

//Deixei o desafio por aqui