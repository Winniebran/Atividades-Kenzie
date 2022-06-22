// Exercício 1

const arr = [5, 4, 7, 30, 16, 89]

function numerosPares (pares){
    let arrPar = [ ]
           
        for (i = 0; i <= pares.length; i++){
            
            if(pares[i] % 2 == 0){
               arrPar.push (pares[i])
            }
        }  
    return arrPar
}

console.log(numerosPares (arr))

//Exercício 2
const somaArray = [1, '4', 9, 18]

function somaNumeros (soma){
    
    let somando = 0

            for (i = 0; i < soma.length; i++){
            somando += parseInt(soma[i])  
        }

    return somando
}

console.log(somaNumeros(somaArray))