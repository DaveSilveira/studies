let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let enviar = document.querySelector('.enviar');
let resultado = document.querySelector('.resultado');

const max =(x, y) => x > y ? x : y;

enviar.addEventListener('click', function(){resultado.innerHTML = max(num1.value, num2.value)});