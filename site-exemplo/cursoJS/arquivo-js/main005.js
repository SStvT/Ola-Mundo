function calcular() {
    var txtv = document.getElementById('txtvel')
    var vel = Number(txtv.value)
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> quilômetros por hora.</p>`
    if (vel>60) {
        res.innerHTML+= `<p>Você está <strong>multado</strong></p>`
    }
    res.innerHTML+='<p>Diriga sempre com cinto de segurança!</p>'
}