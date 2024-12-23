function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f5dbc4'
        msg.innerHTML = `Agora é de manhã são ${hora} horas.`
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#e37b1c'
        msg.innerHTML = `Agora é de tarde são ${hora} horas.`
        
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#182a44'
        msg.innerHTML = `Agora é de noite são ${hora} horas.`
    }
    
}