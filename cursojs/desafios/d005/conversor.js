function converter(){
var valor = window.document.getElementById('valor').value;

console.log(`Valor selecionado: ${valor}`);
console.log(`Tipo da variavel que recebe o valor em mt: ${typeof(valor)}`);

var mm = valor * 1000;
var cm = valor * 100;
var dm = Math.floor(valor) * 10; //Forma alternativa importando a função Math
var Dam = valor / 10;
var Hm = valor / 100;
var km = valor / 1000;

var saida = window.document.getElementById('saida');
saida.innerText = `A distância de ${valor} metros corresponde a: \n  
 ${mm} Milimetros (mm) \n ${cm} Centimetros (cm) \n ${dm} Decimetros (dm)\n \n ${Dam} Dacametros (Dam)\n ${Hm} Hectômetros (Hm)\n ${km} Quilometros (km)`;

}

/*Verificar a forma de receber o codigo pelo input. Quando crio o link de recebimento pelo input o typeof se torna objeto
var valor = document.getElementById(valor); >> typeof objetct

RESPOSTA: O erro acontecia por falta de aspas dentro do parenteses e porque eu não tinha adicionado o .value depois dos parenteses.

No desafio o Professor pede para aparecer com as variaveis:
var valor = window.prompt('Digite um valor em metros para ser convertido:');
alert('mencionando as distâncias')
*/