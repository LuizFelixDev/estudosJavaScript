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
    if(l.indexOf(Number(n) != -1)){
        return true
    }
    else{
        return false
    }
} 

function analisador(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        alert('Tudo ok!')
    }
    else{
        alert('Valor inválido ou já encontrado na lista')
    }    
}