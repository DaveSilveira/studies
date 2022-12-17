var agora = new Date(); // Pega a hora atual do sistema
var hora = agora.getHours(); //o get pode puxar diferentes dados de data
console.log(`São exatamente ${hora} horas.`)
if (hora >= 6 && hora <= 12) {
    console.log('Está de manhã.');
    console.log('Bom dia!');
} else if (hora => 13 && hora < 18){
    console.log('Está de tarde.');
    console.log('Boa tarde!');
} else if(hora > 18 && hora < 23){
    console.log('Está de noite.');
    console.log('Boa noite!');
} else {
    console.log('É de madrugadaaaa estou sozinho em casa.');
    console.log('Vai dormir trem.');
}