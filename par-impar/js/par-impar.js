function escolhaParouimpar() {
    let min=0; 
    let max=20; 
    let par = document.getElementById('pPar')
    let impar = document.getElementById('pImpar')
    if (par) {
        let numRandom = Math.floor(Math.random() * (+max - +min)) + +min;
        let jogada = document.getElementById('jogadaPlayer')
        if (((jogada+numRandom)%2)==0) {
            let res = document.getElementById('resultadoJogo')
            res.innerHTML = `Oi`
        }
    }

}

function selec() {

}