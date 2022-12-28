/* Testando array*/

let alfabeto = [ 'a', 'b', 'c', 'd']; //arrays com letras precisam estar em string, caso contrario o js reconece como variavel
let numeros = [1,2,3,4];

console.log(alfabeto);
console.log(numeros); 
console.log(alfabeto[2]); // selecionando um elemento no indice

let vogal = alfabeto[0]; //podemos selecionar elementos especificos dentro dos arrays
console.log(vogal)

let alfabeto2 = {...alfabeto}; //ponto e virgula é essencial depois de objetos
alfabeto.pop();
console.log(alfabeto);
console.log(alfabeto2)