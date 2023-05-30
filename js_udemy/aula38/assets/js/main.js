let paragrafos = document.querySelector('.paragrafos');
let ps = document.querySelectorAll('p'); //gerando nodeList

const styleBody = getComputedStyle(document.body); //pegando os estilos do body

/*getComputedStyle é do navegador, não funciona no node*/

const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);

/*O professor queria pegar os estilos computados do body do html e jogar a 
background color da pagina no fundo do paragrafo, alem disso ele queria
deixar a cor da letra do ps branca*/

for (let p of ps){ //for e iteração
    p.style.backgroundColor = backgroundColorBody; 
    p.style.color = '#ffffff';
}

/*Como eu setei uma informação de cor na variavel backgroundColorBody chamando ela 
em style.backgroundColor ela vai me retornar o valor que está na memoria, caso a informação
que estivesse na variavel fosse outra provavelmente retornaria um erro no console, pois o js
não encontraria um dado que coincida com o que ele precisa (bckgColor)*/