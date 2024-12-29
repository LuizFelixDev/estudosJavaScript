function gerarTabuada(){
    num = window.document.getElementById('numi')
    tab = window.document.getElementById('tab')

    if(num.value.length == 0){
        window.alert(`Por favor, diite um número válido!`)
    }
    else{
        tab.innerHTML = ''
        n = Number(num.value)
        for(i=1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.value = `tab${i}`
            tab.appendChild(item)
        }
    }
    
    
}