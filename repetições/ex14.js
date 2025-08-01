let valores = [1,4,5,6,]

console.log(`os numeros são ${valores}`)

valores.push(423)
console.log(valores)
console.log(valores.length)
console.log(`${valores.sort()}`)

for(let itens = 0; itens < valores.length; itens++){
    console.log(` a posição ${itens} tem o valor ${valores[itens]}`)
} 


for(let pos in  valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(8)
if(pos == -1){
    console.log(`O valor não existe`)
}else{
    console.log(`o valor está na posição ${pos}`)
   
    }