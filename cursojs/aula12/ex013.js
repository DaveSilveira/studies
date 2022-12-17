//Exemplificando switch:
var agora = new Date();
var diaSem = agora.getDay(); 
/*  Para o js sempre começa do 0
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/
console.log(`Como o js lê o dia atual: ${diaSem}`);

//O switch serve para criar "condições simplficadas", se eu escrevesse em if e else seria mais longo o código

switch(diaSem){ //O switch é otimo para testar valores pontuais, caso tenha expressão é mais indicado o if/else

    case 0: console.log('Domingo');

        break /* Se eu esquecer de colocar o break ele vai até o resultado e executa todos os valores a frente dele até encontrar um break ou até o código acabar */

    case 1: console.log('Segunda-feira');
        break
    case 2: console.log('Terça-feira');
        break
    case 3: console.log('Quarta-feira');
        break
    case 4: console.log('Quinta-feira');
        break
    case 5: console.log('Sexta-feira');
        break
    case 6:  console.log('Sábado');
        break
        default: console.log('ERRO - Dia inválido.');
        break
}