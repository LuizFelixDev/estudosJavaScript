let lista = []


function adicionar(){
    let valor = window.document.getElementById('listaNum').value
    if(valor == ''){
        window.document.getElementById('lista').innerHTML = 'O valor digitado é inválido!'
    }else{
    lista.push(valor);
    let listatxt = window.document.getElementById('lista')
    listatxt.innerHTML = 'lista = ' + lista
    }
}

function refazer(){
    lista = Array.from(new Set(lista))
    lista = lista.sort((a, b) => a - b)
    
    listaRef = window.document.getElementById('refe')
    listaRef.innerHTML = "Lista refeita = " + lista
}