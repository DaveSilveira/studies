const num = document.querySelector('.numero');
const enviar = document.querySelector('.enviar');
const resultado = document.querySelector('.resultado');
const laco = document.querySelector('.laco');

function fizzBuzz(x){
    if(x % 3 == 0 && x % 5 == 0) return 'FizzBuzz'
    if(x % 3 == 0) return 'Fizz'
    if(x % 5 == 0) return 'Buzz'
    return x
}

enviar.addEventListener('click', function(){
resultado.innerHTML = fizzBuzz(num.value);
});

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}