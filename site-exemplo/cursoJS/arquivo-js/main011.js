function seMaiusculo() {
  let texto = document.getElementById('entradaUsuario')
  let textoConverte = texto.value
  let resultado = document.getElementById('res')
  resultado.innerHTML = textoConverte.toUpperCase()
}

function seMinusculo() {
  let texto = document.getElementById('entradaUsuario')
  let textoConverte = texto.value
  let resultado = document.getElementById('res')
  resultado.innerHTML = textoConverte.toLowerCase()
}

function seCapital() {
  let texto = document.getElementById('entradaUsuario')
  let textoConverte = texto.value
  let resultado = document.getElementById('res')
  resultado.innerHTML = textoConverte[0].toUpperCase() +  
  textoConverte.slice(1); 
}

function seInverte() {
  let texto = document.getElementById('entradaUsuario')
  let textoConverte = texto.value
  let resultado = document.getElementById('res')
  resultado.innerHTML = 
  textoConverte.split("").reverse().join("")
}