function aleatorio() {
    var numeroInp = document.getElementById('entradAleat')
    var n1 = Number(numeroInp.value)
    var numeroDiv = document.getElementById('numAleat')
    var tf = document.getElementById('tOf')
    var min=0; 
    var max=10;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    numeroDiv.innerHTML = `Número aleatório gerado: ${random}`
    if (n1>10 || n1<0)
    tf.innerHTML = `Número digitado inválido`
    if (random == n1)
    tf.innerHTML = `Número digitado ${n1}, número gerado ${random}, você acertou!`
    else if (random != n1)
    tf.innerHTML = `Número digitado ${n1}, número gerado ${random}, você errou!`
    //document.write("Random Number Generated : " + random );
    }