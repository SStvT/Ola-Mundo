function updateTime(){
    //var t_str = document.getElementById('hrs')
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
    document.getElementById('hrs').innerHTML = tempo
}
setInterval(updateTime, 1000);
