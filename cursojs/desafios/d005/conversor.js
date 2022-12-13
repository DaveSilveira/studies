window.alert('Teste');

function converter(){

var valor = Number(document.getElementById(valor));

console.log(typeof(valor));

var mm = valor / 1000;
var cm = valor / 100;
var dm = valor / 10;

var Dam = valor * 10;
var Hm = valor * 100;
var km = valor * 1000;

alert(`A distância de ${valor} metros corresponde a: \n  
 ${mm} Milimetros \n ${cm} Centimetros \n ${dm} Decimetros \n ${Dam} Dacametros \n ${Hm} Hectômetros \n ${km} Quilometros`)

}