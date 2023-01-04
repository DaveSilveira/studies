// ? : Operadores ternários

//Utilizado para simplificação de condições simples, exemplo:

const ponturacaoUsuario = 999;
const nivelUsuario = ponturacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario comum'; //uma das formas como a op. ternaria pode ser usada
console.log(nivelUsuario);
 
 /*COMO A OPERAÇÃO TERNARIA FUNCIONA
 *
 * condição (pode estar entre parenteses) ? Resulado caso verdadeiro : Resultado caso falso ;
 *
 */
 
/* Com if steatment:

if (ponturacaoUsuario >= 1000){
	console.log('Usuario VIP');
} else {
	console.log('Usuario normal');
}

*/