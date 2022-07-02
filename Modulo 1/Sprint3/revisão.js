// REFAZENDO ENTREGA 1 - SPRINT 3
let nome1 = prompt("Insira o seu nome.")
let sobrenome1 = prompt("Insera o seu sobrenome.")
let dataAtual1 = prompt("Insira a data do dia atual.")
let mesAtual1 = prompt("Insira o mês atual.")
let anoAtual1 = prompt ("Insira o ano atual")
let dataNascimento1 = prompt("Insira o dia em que nasceu.")
let mesNascimento1 = prompt("Insira o mês em que nasceu.")
let anoNascimento1 = prompt("Insira o ano em que nasceu 'Ex: 1990'.")
let cidade1 = prompt("Insira a cidade em que mora atualmente.")

    if (mesNascimento1 <= mesAtual1 && dataAtual1 <= dataNascimento1){
        console.log(`Eu sou ${nome1} ${sobrenome1}, tenho ${anoAtual1 - anoNascimento1} anos e moro em ${cidade1}.`)
    }
    else {
        console.log(`Eu sou ${nome1} ${sobrenome1}, tenho ${(anoAtual1 - anoNascimento1)-1} anos e moro em ${cidade1}.`)
    }


// REFAZENDO ENTREGA 2 - SPRINT 3
const refrigerante = 11.99
let refrigeranteTotal = (refrigerante * 3)
const macarrao = 6.99
let macarraoTotal = (macarrao * 4)
const ervilha = 6.99
let ervilhaTotal = (ervilha * 3)
const arroz = 22.99
let arrozTotal = (arroz * 3)
const feijao = 11.89
let feijaoTotal = (feijao * 2)
const vinho = 70.00
let vinhoTotal = (vinho * 3)


let valorComprasComVinho = (refrigeranteTotal + macarraoTotal + ervilhaTotal + arrozTotal + feijaoTotal + vinhoTotal)
console.log (`O total da compra deu ${valorComprasComVinho}`)
let metadeComVinho = (valorComprasComVinho / 2)

let valorComprasSemVinho = (refrigeranteTotal + macarraoTotal + ervilhaTotal + arrozTotal + feijaoTotal)
console.log (`O total da compra deu ${valorComprasSemVinho}`)
let metadeSemVinho = (valorComprasSemVinho / 2)

if (valorComprasSemVinho % 2 == 0) {
    console.log(`O total da compra deu PAR! Você pagará R$${metadeSemVinho} e seu amigo pagará ${metadeSemVinho + vinhoTotal}`)
} else {
    console.log(`O total da compra deu IMPAR! Você e seu amigo pagarão R$${metadeComVinho} cada um.`)
}
