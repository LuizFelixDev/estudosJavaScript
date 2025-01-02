let tab = window.document.getElementById('tab')
let num = window.document.getElementById('inum')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n){
 if(Number(n) >= 1 && Number(n) <= 100){
    return true
 }
 else{
    return false
 }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
} 

function analisador(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `O valor ${num.value} adicionado`
        tab.appendChild(item)
    }
    else{
        alert('Valor inválido ou já encontrado na lista')
    }    
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione algun valor antes de iniciar!')
    }
    else{
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>${maior} é o maior valor cadastrado</p>`
        res.innerHTML += `<p>${menor} é o menor valor cadastrado</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}<p/>`
        res.innerHTML += `<p>A média entre todos os valores é ${media}</p>`
    }
}