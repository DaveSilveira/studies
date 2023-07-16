const navbar = document.querySelector('.navbar');
const links = document.getElementsByTagName('a')
const escopo = document.querySelector('.escopo-geral')

function criaCaixa(){
	const caixa = document.createElement('div');
    caixa.style.cssText = `width:10px; height:10px; margin:2px 2px auto; border-radius:50px; 
    border:1px solid #ffff; display:inline-block;`
	return caixa;
}
function themeSelector(fundo, primeiroPlano, fonte,){
    let cor = criaCaixa()
    navbar.appendChild(cor)
    cor.style.backgroundColor = fundo;
    cor.addEventListener('click', () => {
        document.body.style.backgroundColor = fundo;
        document.body.style.color = fonte;
        links.style.backgroundColor = fonte;
        navbar.style.backgroundColor = primeiroPlano;
        escopo.style.backgroundColor = primeiroPlano;
    }, false)

}

themeSelector('#000000', '#363636','#EEEEEE')
themeSelector('#FFFFFF', '#EEFEEE', '#262626')