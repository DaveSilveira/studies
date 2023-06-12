/*Criar uma função que identifique se a foto está em formato paisagem ou não*/

//utilizando ternários
const ePaisagem = (largura, altura) => largura > altura ? 'Paisagem' : 'retrato';
console.log(ePaisagem(1024, 738));

//utilizando if steatment
const ePaisagem2 = (largura, altura) => {if (largura > altura)return 'Paisagem'; else return 'retrato';}
console.log(ePaisagem2(600, 800))

//com a propria condição retornando booleanos
const ePaisagem3 = (largura, altura) => {return largura >= altura} //>= caso a img for quadrada ser true
console.log(ePaisagem3(1024, 1280))