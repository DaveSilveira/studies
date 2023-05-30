const elementos = [
    {tag: 'p', texto: 'Frase 1: Este é uma tag paragrafo'},
    {tag: 'div', texto: 'Frase 2: Esta é uma tag div'},
    {tag: 'footer', texto: 'Frase 3: Esta é uma tag footer'},
    {tag: 'section', texto: 'Frase 4: Esta é uma tag section'},
];

const div = document.createElement('div');
const corpo = document.querySelector('.container');


for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada =  document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
};

corpo.appendChild(div);