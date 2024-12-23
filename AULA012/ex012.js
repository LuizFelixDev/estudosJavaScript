var idade = 64
if(idade < 16){
    console.log(`Você tem ${idade} anos de idade, você não pode votar!`)
}else{
    if(idade < 18 || idade >= 65){
        console.log(`Você tem ${idade} anos, você pode votar, mas não é obrigado!`)
    }else{
        console.log(`Você tem ${idade} anos, você é obrigado a votar!`)
    }
}