/*CALCULO DE MOLARIDADE
MM - Massa molecular
m - massa 
v - volume (L)
mol - molaridade (mol/L)
*/

var MM = document.getElementById('MM').value;
var m = document.getElementById('m').value;
var vol = document.getElementById('vol').value;
var mol = document.getElementById('mol').value;

if (massa || Massa){
	m = mol * MM * vol;
	window.alert(`O valor da massa é ${m}`);
} else if (molaridade || Molaridade) {
	mol = m / (MM * vol);
	window.alert(`O valor da molaridade é: ${mol}`);
} else if (volume || Volume){
	vol =  m / (MM * mol);
	window.alert(`O valor do volume é: ${vol}`);
} else if (massa molar || PM || MM){
	MM = m / (mol * vol);
	window.alert(`O valor do Peso molecular é de: ${MM}`)
}
