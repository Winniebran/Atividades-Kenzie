//Exercício 1

let circuito = 9
function funcaoContaPasso(passos) {

    let index = 1
    while (index <= passos) {
        if (passos > 0) {
            console.log(`visitei a ${index}ª casa.`)
        }
        index++
    }
    if (passos <= 0) {
        console.log('Eliminado')
    }
}
funcaoContaPasso(circuito)


//Exercício 2


function desafio(voltaPassos){
    let i = voltaPassos 
    while (i > 0){ 
        if (voltaPassos > 0 && voltaPassos != 1){
            console.log (`voltei a ${i}ª casa.`)
        }
    i--
    }
    if (voltaPassos <= 0){
        console.log(`Valor Inválido`) 
    }   
}

desafio(circuito)