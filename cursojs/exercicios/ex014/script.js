function carregar(){
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são exatamente: ${hora} horas.`;
if (hora >= 0 && hora < 12){
    //Bom dia
    imagem.src = 'img/manha.png';
    document.body.style.background = '#96c2eb';

} else if (hora >= 12 && hora <= 18){
    //Boa tarde
    imagem.src = 'img/tarde.png';
    document.body.style.background = '#b9846f';

} else {
    //Boa noite
    imagem.src = 'img/noite.png';
    document.body.style.background = '#515154';

}
}
