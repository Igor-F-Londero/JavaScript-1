/*let idade = 22
if (idade > 18 && idade <= 59){
  console.log(`maior de idade`)
}else if (idade > 16 && idade < 18){
    console.log(`está quase se tornando maior de idade`)
}else if(idade > 60){
    console.log(`idoso`)
}else{
    console.log(`menor de idade`)
}*/

let agora = new Date()
var hora = agora.getHours()

if (hora >= 1 && hora <= 5){
    console.log(`Boa Madrugada para você!!`)
}else if (hora >=6 && hora <= 11){
    console.log(`Bom Dia para você!!`)
}else if (hora >=12 && hora <= 17){
    console.log(`Boa Tarde para você!!`)
}else if (hora == 18){
    console.log(`Bom Final de tarde para você!!`)
}else{
    console.log(`Boa Noite para você!!`)
}

