function acao1(){
alert("Página desabilitada")
}


const nightMode = document.querySelector('#switch-shadow')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
})