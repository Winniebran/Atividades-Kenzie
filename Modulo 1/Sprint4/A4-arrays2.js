//Exercício 1
function premiacao(livro, posicao) {
    for (let i = 0; i <= carrinhoCompras.length; i++) { 
        if (livro[i] == "Vou ser Dev" && posicao == 0) {
            console.log("Cliente premiado")
        }
        else {
            console.log("Cliente não premiado")
        }
    }
}
let carrinhoCompras = ["Código Limpo", "Vou ser Dev", "Algoritmos"]
premiacao(carrinhoCompras, 0)




//Exercício 2
function qualTipoDeElemento(lista, posicao) {
    if (typeof (lista[posicao]) == "number") {
        return true
    }
    else {
        return false
    }
}
let tiposDiversos = [1.5, "String", true, 10]
console.log(qualTipoDeElemento(tiposDiversos, 1))





//Exercício 3
let nomes = ["Ana", "Maria", "Joana"]
let num = Math.floor(Math.random() * (4 - 1) + 1)

function bilhetePremiado(nomes, num) {
    if (num == 1) {
        console.log(`O ganhador do premio foi ${nomes[0]}.`)
    }
    else if (num == 2) {
        console.log(`O ganhador do premio foi ${nomes[1]}.`)
    }
    else {
        console.log(`O ganhador do premio foi ${nomes[2]}.`)
    }
}

bilhetePremiado(nomes, num)
console.log(num)