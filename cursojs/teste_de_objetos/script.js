/*Testando criação e atribuição de objetos HTML pelo javascript

Alguma informação pode estar errada pois estou praticando e observando as ocorrências para tomar as conclusões.
*/

//Setando o estilo do <body>
document.body.style.backgroundColor = '#000000';
document.body.style.color = '#ffff';
document.body.style.aColor = '#00ff00';

//Criando as <div> corpo, cabecalho e rodapé e chamando elas no HTML
var cabecalho = document.createElement('div');

//insertBefore é importante para criar um nó no HTML, sem ela o console iria retornar um erro de 'node'
document.body.insertBefore(cabecalho, document.body.childNodes[0])
var corpo = document.createElement('div');
document.body.insertBefore(corpo, document.body.childNodes[1])
//importante alterar o valor de ordem do objeto, já que ambas as três são elementos div, se não a propriedade de uma pode ir para outra
corpo.setAttribute('id', 'corpo')
//como na linha acima também posso setar atributos, como id, class, name. Tudo isso já chamando a varivél
var rodape = document.createElement('div');
document.body.insertBefore(rodape, document.body.childNodes[2])

cabecalho.innerHTML = `<h1>Titulo</h1>`; //Posso setar elementos HTML, desde que entre crases
cabecalho.style.textAlign = 'center';
cabecalho.style.backgroundColor = '#DDDDDD';
cabecalho.style.color = '#000000';
cabecalho.style.height = '20%';
cabecalho.style.width = '500px';
cabecalho.style.margin = 'auto';

//Com o innerHTML posso inserir elementos html direto e setar informações nele como id, classe, etc. E logo após chama-los
corpo.innerHTML = `Qual seu nome? <input type="text" id="nome" value="">`;
corpo.style.textAlign = 'center';
corpo.style.backgroundColor = '#DDDDDD'
corpo.style.color = '#000000';
corpo.style.height = '65%';
corpo.style.width = '500px';
corpo.style.margin = 'auto';
corpo.style.marginTop = '10px';

var nome = document.getElementById('nome').value;
console.log(typeof('nome'));


rodape.innerHTML = `<p>rodape</p>`
rodape.style.textAlign = 'center';
rodape.style.backgroundColor = '#DDDDDD';
rodape.style.color = '#000000';
rodape.style.height = '10%';
rodape.style.width = '500px';
rodape.style.margin = 'auto';
rodape.style.marginTop = '10px';
