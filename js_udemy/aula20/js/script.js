function meuEscopo(){ //Funções mantem escopos protegidos, no caso do escopo global variaveis podem mudar
    let form = document.querySelector('.form');

    const pessoas = []; // criei a constante inicialmente sem valores para adicionar com o push

    function recebeEventoForm (evento) { //Função para receber os dados dos inputs
        evento.preventDefault(); //Função para não deixar pag atualizar por addEventListener

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value; //depois que estipulei uma vez o value em uma variavel não posso fazer isso novamente pois o js retorna null ou undefined
        const altura = form.querySelector('.altura').value; //value é importante, se não ele captura só a tag
        const resultado = document.querySelector('.resultado');

        pessoas.push({ //push é o elemento que adiciona argumentos novos ao indice
            nome: nome, //Não precisa do nome:, sem ele o js entende que estou buscando o elemento linkado
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        console.log(pessoas); //joga os dados para o console

        resultado.innerHTML += `<p> Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura} </p>`; //imprime os valores na div criada com um paragrafo para cada submit
    }
    form.addEventListener('submit', recebeEventoForm ); //não deixa a pagina atualizar, só acontece depois que clico em submit
}
meuEscopo(); //joga a função para rodar no global, sem retirar sua proteção por estar dentro do escopo


   /* form.onsubmit = function (evento){
        evento.preventDefault();
        console.log('1');
    }; Essa é uma forma de não deixar a pagina atualizar após um subtmit*/