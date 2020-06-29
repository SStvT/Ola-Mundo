
function par() {
    let resultado = document.getElementById('resultadoJogo')
    let inputJogador = document.getElementById('jogadaPlayer')
    let escolhaPar = document.getElementById('botaoPar')
    let escolhaImpar = document.getElementById('botaoImpar')
    let numeroJogador = Number(inputJogador.value)
    var min=0; 
    var max=20;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    if (escolhaPar) {
        if ((numeroJogador+random)%2==0) {
            resultado.innerHTML = `Você escolheu par, jogou ${numeroJogador} e o computador ${random}, você ganhou!`
        }
        else {
            resultado.innerHTML = `Você escolheu par, jogou ${numeroJogador} e o computador ${random}, você perdeu`
        }
    }
}
function impar() {
    let resultado = document.getElementById('resultadoJogo')
    let inputJogador = document.getElementById('jogadaPlayer')
    let escolhaPar = document.getElementById('botaoPar')
    let escolhaImpar = document.getElementById('botaoImpar')
    let numeroJogador = Number(inputJogador.value)
    var min=0; 
    var max=20;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    if (escolhaImpar) {
        if ((numeroJogador+random)%2==1) {
            resultado.innerHTML = `Você escolheu ímpar, jogou ${numeroJogador} e o computador ${random}, você ganhou!`
        }
        else {
            resultado.innerHTML = `Você escolheu ímpar, jogou ${numeroJogador} e o computador ${random}, você perdeu`
        }
    }
}