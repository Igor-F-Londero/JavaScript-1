function contar(){
    let ini = document.getElementById('in')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pa')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('as entradas não podem ser vazias')
    }else{
        res.innerHTML = 'contando....'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(i < f){
           for(let c = i; c <= f; c += p){
                res.innerHTML += `  ${c}`

                } 
        }else{
            for(let c =  i; c >= f; c-= p){
               res.innerHTML += ` ${c}` 
            }
        }
        
    }

}
