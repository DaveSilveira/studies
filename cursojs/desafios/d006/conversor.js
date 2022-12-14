function converter(){
var valor = Number(window.document.getElementById('valor').value);

console.log(`Valor selecionado: ${valor}`);
console.log(`Tipo da variavel que recebe o valor em celsius: ${typeof(valor)}`);

var f = valor + 32.0;
var k = valor + 273.00;
var r = valor * 493.47;
//conferir a formula
var saida = window.document.getElementById('saida');
saida.innerText = `A temperatura de ${valor} ºC corresponde a: \n  
 ${f} ºF (Fahrenheit) \n ${k} ºK (Kelvin) \n ${Conferir} ºR (Rankine)`;

}

/*Adaptado do desafio 005, somente foram alteradas as formulas e referencia no codigo
*/