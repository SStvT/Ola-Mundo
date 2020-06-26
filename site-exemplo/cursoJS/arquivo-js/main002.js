var a = document.getElementById('area')
a.addEventListener('click', clicar) // substitui no HTML, god
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerHTML = 'Clicou!'
}
function entrar() {
    a.innerHTML = 'Entrou!'
    a.style.background = 'red'
}
function sair() {
    a.innerHTML = 'Saiu!'
    a.style.background = 'green'
}