function compra(){

var prod = window.prompt('Qual produto você está comprando?');
var preço = Number(window.prompt(`Quanto custa ${prod}, que você está comprando?`))
var pgmt = Number(window.prompt(`Quanto em dinheiro você deu para pagar o ${prod}?`))
var troco = pgmt - preço;

//Fatou adicionar ( .toLocaleString('pt-br', {style: 'currency', currency:'BRL'}); ) as variaveis que de nenhum jeito da certo 100%
window.alert(`Você comprou ${prod}, que custa ${preço}. Pagando ${pgmt} você terá ${troco} de troco.`);
}