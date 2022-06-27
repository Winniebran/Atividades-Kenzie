
//Exercicio 1
function quantidade(array){
    let cont = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            cont++
        }
    } return cont
}
const numerosAleatorios = [1, -10, 450, -20, -34, 82, 45, -25]
console.log(quantidade(numerosAleatorios))

//Exercício 2
function soma (array){
    let soma = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            soma += array[i]
        }
    }return soma
}
console.log(soma(numerosAleatorios))

//Exercício 3
function pares(array){
    let pares = []

    for (let i = 0; i < array; i++){
        if (i % 2 == 0){
            pares.push(i)
        }
    }return pares
}
console.log(pares(10))


//Exercício 4
function negativos(array){
    let negativos = []
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            negativos.push(array[i])
        }
    }return negativos
}
console.log(negativos(numerosAleatorios))

//Exercício 5
function bolean(array){
    let somaGeral = 0
    for (let i = 0; i < array.length; i++){
        somaGeral += array[i]
    }
    if(somaGeral > array.length){
        return true
    }
    return false
}
console.log(bolean(numerosAleatorios))

//Exercício 6
function maisCinco(array){
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        novoArray.push(array[i]+5)    
    }   
    return novoArray
}
console.log(maisCinco(numerosAleatorios))


//exercicio 7
function media (array){
    let somaArray = 0
    let novoArray = []

    for (let i = 0; i < array.length; i++){
        somaArray += array[i]
    }
    
    let mediaArray = (somaArray/array.length)
    
    for (let j = 0; j < array.length; j++){
        if (array[j] > mediaArray){
            novoArray.push(array[j])
        }
    }
    return novoArray
}
console.log(media(numerosAleatorios))

//Exercício 8
function string1 (array){
    let string = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] == 'a'){
            string++
        }
    }   
    return string
}
let string = 'abracadabra'
console.log(string1(string))

//Exercício 9
function stringArray (array){
    let stringsArray = 0
    for (let i = 0; i < array.length; i++){
        stringsArray += array[i].length
    }   
    return stringsArray
}
let strings = ['um', 'toque', 'vira', 'mágica']
console.log(stringArray(strings))

//Exercício 10
function outroArray (string){
    retornaArray = string.split(' ')
    retornaImpar = []
    for (let i = 0; i < retornaArray.length; i++){
        if (retornaArray[i].length % 2 !== 0){
            retornaImpar.push(retornaArray[i])
        }
    }
    return retornaImpar
}
const iniciaString = 'Ser simples requer tempo e esforço'
console.log(outroArray(iniciaString))

//Exercício 11
function novoParamentro (string){
    let string1 = ''
    for (let i = 0; i < string.length; i++){
        if(string[i] == 'o'){
            string1 += '0'
        }else {
            string1 += string[i]
        }
    }
    return string1
}
console.log(novoParamentro(iniciaString))

//Exercício 12
function ultimoParametro(string){
    let newString = ''
    for (let i = 0; i < string.length; i++ ){
        if (string[i] == 'p'){
            newString += 'P'
        }else{
            newString += string[i]
        }
    }
    return newString
}
let stringDoP = 'pedro paulo pereira pinto, pequeno pintor português, pintava portas, paredes, portais. porém, pediu para parar porque preferiu pintar panfletos.'
console.log(ultimoParametro(stringDoP))