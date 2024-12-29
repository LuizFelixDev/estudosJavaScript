function contar(){

    let ini = window.document.getElementById('ini')
    let fim = window.document.getElementById('fim')
    let pass = window.document.getElementById('pass')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = `Impossível contar`
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if(p <= 0){
            window.alert(`Passo inválido! Vou considerá-lo como 1.`)
            p = 1
        }
        
        res.innerHTML = ``
        for(c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F6F9}`;
        }
        res.innerHTML += `FIM`
    }
}
