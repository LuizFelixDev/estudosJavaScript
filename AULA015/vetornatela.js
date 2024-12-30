let num = [9,4,7,5,6]
console.log(`Forma mais hamônica de mostrar um vetor:`)
num.sort()

/*
for(let i=0; i< num.length; i++){
    console.log(`A posicão ${i} tem o valor ${num[i]}`)
}
*/

for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}