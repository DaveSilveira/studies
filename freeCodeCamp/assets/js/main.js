const navbar = document.querySelector('.navbar');
const links = document.getElementsByTagName('a')
const escopo = document.querySelector('.escopo-geral')

function criaDiv(){
    let div = document.createElement('div')
    return div;
}

const tema = criaDiv()
navbar.appendChild(tema)
tema.innerText = 'Tema';
tema.classList.add('botao')

function themeSelector(fundo, primeiroPlano, fonte, nome){
    let cor = criaDiv()
    let nomeCor = criaDiv()
    navbar.appendChild(nomeCor)
    navbar.appendChild(cor)
    cor.style.cssText = `width:10px; height:10px; margin:2px 2px auto; border-radius:50px; 
    border:1px solid #ffff; display:block; background-color:${fundo}`

    cor.addEventListener('click', () => {
        document.body.style.backgroundColor = fundo;
        document.body.style.color = fonte;
        links.style.backgroundColor = fonte;
        navbar.style.backgroundColor = primeiroPlano;
        escopo.style.backgroundColor = primeiroPlano;
    });
    nomeCor.innerText = nome;
}
tema.addEventListener('click', function(){
themeSelector('#000000', '#363636','#EEEEEE','Noite');
themeSelector('#FFFFFF', '#EEFEEE', '#262626', 'Dia');
})
