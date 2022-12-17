//Condição simples
var idade = 10;
if(idade <= 18){
  console.log('você é menor de idade.');
}

//Condição composta
var idade2 = 23;
if(idade2 < 18){
    console.log('você é menor de idade.');
} else{
    console.log('você é maior de idade.');
}

//Condição aninhada
var idade3 = 65;
if (idade3 < 16){
    console.log('Você não vota.');
} else if (idade3 < 18 || idade3 > 67) {
    console.log('Seu voto e facultativo');
} else {
    console.log('Seu voto é obrigatorio.')
}
