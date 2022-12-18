function enviar(){
var data = new Date();
var ano = data.getFullYear();
var fAno = document.getElementById('nasc').value;
var res = document.getElementById('res');


if (fAno == 0 || fAno >= ano){
    window.alert('[ERRO] Verifique os dados e tente novamente.');
    window.alert('TENHO ORGULHO DE SER UM GAFANHOTO!! \n Desculpa prof. Guanabara, eu via seus vídeos em velocidade 2.0x RSRS');
} else{
    var fSex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fSex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //Crianço
            res.innerHTML = `Você ainda é criança menino, tem ${idade} anos`;
            img.setAttribute('src', 'img/menino.png');
        } else if (idade >= 10 && idade < 21){
            //Adolescente
            res.innerHTML = `Você já ta ficando grandinho menino, tem ${idade} anos`;
            img.setAttribute('src', 'img/adolescente.png');
        } else if (idade < 65){
            //Adulto
            res.innerHTML = `Eu te entendo, ser adulto é dificil rsrs. Você tem ${idade} anos`;
            img.setAttribute('src', 'img/homem.png');
        } else if(idade > 65){
            //idoso
            res.innerHTML = `Opa meu senhor, como vai? Percebi que o senhor tem ${idade} anos`;
            img.setAttribute('src', 'img/idoso.png');
        }
    } else if (fSex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //Criança
            res.innerHTML = `Olá menininha, você ainda é crionça, tem ${idade} anos`;
            img.setAttribute('src', 'img/menina.png');
        } else if (idade >= 10 && idade < 21){
            //Adolescenta
            res.innerHTML = `Oi moça hehe, percebi que tem ${idade} anos`;
            img.setAttribute('src', 'img/adolescenta.png');
        } else if (idade < 65){
            //Adulta
            res.innerHTML = `Olá senhorita, como vai? Moça bonita! Tem ${idade} anos`;
            img.setAttribute('src', 'img/mulher.png');
        } else if(idade > 65){
            //idosa
            res.innerHTML = `Oba minha senhora. Sua idade é ${idade} anos`;
            img.setAttribute('src', 'img/idosa.png');
        }
    }
    res.appendChild(img);
    res.style.textAlign = 'center';
}
}