let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'https://tarcisiogsouza.github.io/bronzodias/bronzodia.png') {
      minhaImagem.setAttribute (link ref 'src','https://tarcisiogsouza.github.io/bronzodias/meme1.jpg');
    } else {
      minhaImagem.setAttribute (link ref 'src','https://tarcisiogsouza.github.io/bronzodias/bronzodia.png');
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'BRONZÓDIA,  ' + meuNome;
  }
}
  meuBotao.onclick = function() { defineNomeUsuario();
}
