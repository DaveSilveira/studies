/*WHILE
Geralmente se usa o laço while quando não se sabe o length do item (obj, array, string...)

existe diferença na escrita, porém a logica é bastante parecida
*/

let i = 0; //cria a variavel - fora do parenteses do while

while (i <= 10) { //checa a condição
    console.log(i); //executa
    i++ //executa a variavel de controle- não pode esquecer de colocar, se não o laço é infinito, sempre dentro do bloco
}

/*DO WHILE
A unica diferença é que o do while vai primeiro executar o laço e só no final checar a condição

então mesmo que a condição coincida com o check o do while vai mostrar seu valor, enquanto o while não
*/

do{

console.log(i);

}while(i <= 10);