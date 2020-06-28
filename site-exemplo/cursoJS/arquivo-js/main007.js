function updateTime(){
    //var t_str = document.getElementById('hrs')
    var horaTela = document.getElementById('hrs')
    var horaAtual = new Date()
    var horas = horaAtual.getHours()
    var minutos = horaAtual.getMinutes()
    var segundos = horaAtual.getSeconds()
    if (minutos < 10){
        minutos = `0${minutos}`
    }
    if (segundos < 10){
        segundos = `0${segundos}`
    }
    var tempo = `Horas: ${horas}:${minutos}:${segundos}`    
    horaTela.innerHTML = tempo
}
setInterval(updateTime, 1000);

function cliqueUm() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nUm')
    let a = Number(num1)
    a+=1
    display.innerHTML = '1'
}

function cliqueDois() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nDois')
    let a = Number(num1)
    a+=1
    display.innerHTML = '2'
}

function cliqueTres() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nTres')
    let a = Number(num1)
    a+=1
    display.innerHTML = '3'
}

function cliqueQuatro() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nQuatro')
    let a = Number(num1)
    a+=1
    display.innerHTML = '4'
}

function cliqueCinco() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nCinco')
    let a = Number(num1)
    a+=1
    display.innerHTML = '5'
}

function cliqueSeis() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nSeis')
    let a = Number(num1)
    a+=1
    display.innerHTML = '6'
}

function cliqueSete() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nSete')
    let a = Number(num1)
    a+=1
    display.innerHTML = '7'
}

function cliqueOito() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nOito')
    let a = Number(num1)
    a+=1
    display.innerHTML = '8'
}

function cliqueNove() {
    let display = document.getElementById('contasCalc')
    var num1 = document.getElementById('nNove')
    let a = Number(num1)
    a+=1
    display.innerHTML = '9'
}