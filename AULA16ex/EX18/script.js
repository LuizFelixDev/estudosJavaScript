function analisador(){
    let tab = window.document.getElementById('tab')
    let num = window.document.getElementById('inum')
    let res = window.document.getElementById('res')
    let n = Number(num.value)

    if(n == 0 || n > 100 || n < 1 ){
        window.alert(`O número inserido é invalido`)
    }
    else{
        alert('Tudo ok!')
    }
}