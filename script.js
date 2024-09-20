//selecionar imagem principal
const imagem = document.getElementById('imagem')

//selecionar os botões
const botão1 = document.getElementById ('botão1');
const botão2 = document.getElementById ('botão2');
const botão3 = document.getElementById ('botão3');

//função pra trocar imagem
function trocarImagem(img){
    imagem.src = img;
}

//adcionar eventos aos botoes para trocar a imagem
botão1.addEventListener('click',function () {
    trocarImagem('imagem1.jpg');
})

botão2.addEventListener('click',function () {
    trocarImagem('imagem2.jpg');
})
botão3.addEventListener('click',function () {
    trocarImagem('imagem3.jpg');
})

botão4.addEventListener('click',function () {
    trocarImagem('download.jpeg');
})

botão5.addEventListener('click',function () {
    trocarImagem('download.webp');
})
botão6.addEventListener('click',function () {
    trocarImagem('download (1).jpeg');
})

function ativarBotao(botao) {
    botao.forEach(b > b.classlist.remove('ativo'));
    botao.classlist.add('ativo')
}

botoes.forEach((botao, index)=>  {
    botao.addEventListener('click', function() {
        trocarImagem(`imagem${index+1}.jpg`);
        ativarBotao(botao)
    })
})