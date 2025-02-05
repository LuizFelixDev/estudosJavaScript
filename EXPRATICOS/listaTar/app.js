
function titulo(){
const  dataAtual = new Date()
const diaMes = dataAtual.getDate()
const mes = dataAtual.getMonth()
switch(mes){
    
}

titulo = window.document.getElementById('titulo')
titulo.innerHTML = `Lista de tarefas de ${diaMes} de ${mes}`
}

document.addEventListener("DOMContentLoaded", titulo);

function adicionar(){
    let lista = window.document.getElementById('minhaLista')
    let novo = window.document.createElement('li')
    let input = window.document.getElementById('item').value

    novo.textContent = input

    lista.appendChild(novo)
    

}

function limpar(){
    lista = window.document.getElementById('minhaLista')
    lista.innerHTML = ''
}

