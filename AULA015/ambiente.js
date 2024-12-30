let num = [5,2,8,9,6]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log(`Esse valor não existe nesse vetor`)
}
else{
    console.log(`O valor que você busca está na posição ${pos}`)
}