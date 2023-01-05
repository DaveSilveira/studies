/*switch case */

//Usado para checar varios valores dentro de uma variavel apenas

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){ //variavel que estou checando
    case 0 : diaSemanaTexto = 'Domingo'; //variavel em que vou retornar a string
    break; //Se não colocar o break depois do case msm a condição sendo verdadeira vai rodar o resto do cod.
    case 1 : diaSemanaTexto = 'Segunda-feira';
    break;
    case 2:  diaSemanaTexto = 'Terça-feira'; 
    break;
    case 3 : diaSemanaTexto = 'Quarta-feira';
    break;
    case 4 : diaSemanaTexto = 'Quinta-feira';
    break;
    case 5 : diaSemanaTexto = 'Sexta-feira';
    break;
    case 6 : diaSemanaTexto = 'Sábado';
    break;
    dafault : ''; //Não precisa de break. Funciona como o else
}

console.log(diaSemanaTexto);

//Caso eu queira usar o switch dentro de uma função ao inves do brake colocaria return, como a syntax da função pede