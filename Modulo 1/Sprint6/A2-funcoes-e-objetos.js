let novaPessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
  }

//Exercício 1
function qualIdade(people){
    let anoAtual = 2022
    return `${people.nome} tem ${anoAtual - people.anoNascimento} anos de idade`
}
console.log(qualIdade(novaPessoa))

//Exercício 2
function normalizaDado(people){
    let firstLetter = people.nome[0].toUpperCase()
    let nomeCompleto = firstLetter + people.nome.substring(1, people.nome.length)
    let nomeFinal = people.nome = nomeCompleto
    return nomeFinal
}
console.log(normalizaDado(novaPessoa))

//Exercício 3
function criandoListaDeUsuarios(people){
    people.nomeDeUsuario = people.nomeDeUsuario.toLowerCase()
    let usuarios = []
    usuarios.push(people)
    return usuarios
}
console.log(criandoListaDeUsuarios(novaPessoa))

//Exercício 4
function calculaVale(people){
    let novaDistancia = Number(people.distanciaDoTrabalho.slice(0, -2))
    let valorLitro = 6.99
    let novoValeCombustivel = (novaDistancia * valorLitro) * 0.7
    
    if (people.temCarro == true){
        return people.valeCombustivel = `R$ ${novoValeCombustivel}`
    }
}
console.log(calculaVale(novaPessoa))

//Exercício 5
let novoEndereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}

function adicionarTipo(adress){
    return adress.tipo.push('Casa')  
}
console.log(adicionarTipo(novoEndereco))


//Exercício 6
function adicionarEnderecoEmPessoa(adress, people){
    people.endereco = adress
    return people
}
console.log(adicionarEnderecoEmPessoa(novoEndereco, novaPessoa))

