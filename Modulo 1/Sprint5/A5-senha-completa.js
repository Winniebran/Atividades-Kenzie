const bigBoss = [ 
    ["Nome", "Boss"],
    ["Idade", 89],
    ["Cidade", "Rio de Janeiro"],
    ["Estado", "RJ"],
    ["Ano de Nascimento", 1933]
]

generatePassword(bigBoss[0][1], bigBoss[2][1])
//Chamo minha função passando 'Boss' e 'Rio de Janeiro'.

function generatePassword(c1, c2){
    let novaString = `${c1}@${c2}`
    return novaString.replaceAll(' ', '')
}
console.log(generatePassword(bigBoss[0][1], bigBoss[2][1]))


function generatePassword2(a1){
    let frase1 = a1.split('').reverse().join('')
    return frase1
}
console.log(generatePassword2(generatePassword(bigBoss[0][1], bigBoss[2][1])))


function generatePassword3(b1){
    let frase2 = ''

    if (b1[0] === b1[0].toUpperCase()){
        frase2 += b1[0].toLowerCase() + b1.slice(1, -1) + b1[b1.length-1].toUpperCase()
    }else{
        frase2 += b1[0].toUpperCase() + b1.slice(1, -1) +  b1[b1.length-1].toUpperCase()
    }
    return frase2
}
console.log(generatePassword3(generatePassword2(generatePassword(bigBoss[0][1], bigBoss[2][1]))))