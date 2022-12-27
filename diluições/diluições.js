/*CALCULO DE MOLARIDADE
MM - Massa molecular
m - massa 
v - volume (L)
mol - molaridade (mol/L)
*/


/*OBSERVAÇÕES

ADICIONAR TEOR E DENSSIDADE E VERIFICAR POR QUE ESTÁ RETORNANDO VALOR NULL QUANDO CAIXA ESTA ZERADA.
REVERTER ISSO, QUEM SABE COLOCANDO CONDICIONAL NA SELEÇÃO DOS VALORES??
*/

function enviar(){

var MM = Number(document.getElementById('MM')).value;
var m = Number(document.getElementById('m')).value;
var vol = Number(document.getElementById('vol')).value;
var mol = Number(document.getElementById('mol')).value;
var teor = Number(document.getElementById('teor')).value;
var densi = Number(document.getElementById('densi')).value;
var res = document.getElementById('res');
var und = document.getElementsByName('und');

	if (und[2].checked){
		m = mol * MM * vol;
		res.innerHTML = `O valor da massa é ${m}`;
	} else if (und[0].checked) {
		mol = m / (MM * vol);
		res.innerHTML = `O valor da molaridade é: ${mol}`;
	} else if (und[1].checked){
		vol =  m / (MM * mol);
		res.innerHTML = `O valor do volume é: ${vol}`;
	} else if (und[3].checked){
		MM = m / (mol * vol);
		res.innerHTML = `O valor do Peso molecular é de: ${MM}`;
	}
res.style.textAlign = 'center';
res.style.backgroundColor = 'green'
}