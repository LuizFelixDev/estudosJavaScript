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