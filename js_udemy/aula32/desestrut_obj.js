//Lembrando que objeto == {}

const pessoa = {
    nome: 'david',
    peso: 80,
    sobrenome: 'silveira',
    idade: 26,
    endereco: {
        rua: 'Av Carcara',
       numero: 480
    }
}

//Desestruturação

const { nome } = pessoa; //Aqui eu criei uma variavel nome extraida do obj pessoa, logo ela tera o mesmo valor que tinha na variavel

const {sobrenome, idade} = pessoa; //criei duas variaveis distintas com seus respectivos valores

const {rua, casa = '37'} = pessoa.endereco; //posso setar um valor ou cria-lo caso não exista no objeto
// para selecionar um objeto dentro de outro posso fazer como no exemplo acima ou no exemplo abaixo..

const {endereco: {numero}, endereco } = pessoa;

//o endereco: serve para acessar o obj dentro de pessoa, o outro, estou chamando todo o objeto endereco

//posso mudar o nome de uma variavel criada no objeto e seu valor ao mesmo tempo, como no exemplo abaixo, no caso o novo valor só passa a ser exibido caso a variavel dentro do objeto original nao tenha valor

const {endereco: {rua: r = '1245' }} = pessoa

//o resto funciona da mesma forma que no array

const {peso, ...resto} = pessoa;

console.log(resto); //puxou tudo menos o peso
console.log(nome, sobrenome, idade, rua, casa, rua, endereco, r);
//  >> david