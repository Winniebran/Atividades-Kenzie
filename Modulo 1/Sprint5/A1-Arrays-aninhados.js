let amigoHigiene = ['papel higiênico', 'sabonete', 'pasta de dente', 'shampoo', 'condicionador']
let amigoAlimentacao = ['banana', 'pasta de amendoim', 'pão', 'suco de laranja']
let amigoCuidadosMedicos = ['bandAid', 'alcool', 'gaze', 'esparadrapo', 'medicamento']
let amigoLazer = ['violão', 'jogo de tabuleiro', 'frescoBall', 'bola', 'livro', 'baralho', 'tablet']

let caixaSuprimentos = [amigoHigiene, amigoAlimentacao, amigoCuidadosMedicos, amigoLazer]

let nomes = ['Maria', 'João', 'José', 'Ana']

for (let i = 0; i < caixaSuprimentos.length; i++){
    for (let j = 0; j < caixaSuprimentos[i].length; j++){
        if (caixaSuprimentos[i].length < 5){
            console.log (`Quantidade errada de itens.`) 
            if (5 - caixaSuprimentos[i].length == 1){
                console.log (`${nomes[i]} pegue mais ${5 - caixaSuprimentos[i].length} item.`)
                break
            }else{
                console.log (`${nomes[i]} pegue mais ${5 - caixaSuprimentos[i].length} itens.`)
                break
            }
        }else if (caixaSuprimentos[i].length > 5){
            console.log (`Quantidade errada de itens.`)
            if (caixaSuprimentos[i].length - 5 == 1){
                console.log (`${nomes[i]} deixe ${ caixaSuprimentos[i].length - 5} item.`)
                break
            }else{
                console.log (`${nomes[i]} deixe ${caixaSuprimentos[i].length - 5} itens.`)
                break
            }
        }
    }
}   
