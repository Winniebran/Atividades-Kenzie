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
    return people.nome == 'Clara' ? people.nome = 'clara': people.nome = 'Clara'
}
normalizaDado(novaPessoa)

//Exercício 3
function criandoListaDeUsuarios(people){
    let novoUsuario = people.toLowerCase()
    return people == novoUsuario ? people = people : people = novoUsuario
}
criandoListaDeUsuarios(novaPessoa.nomeDeUsuario)

//Exercício 4
function calculaVale(people){
    let novaDistancia = people.distanciaDoTrabalho.replace('120km', 120)
    let valorLitro = 6.99
    let valeCombustivel = (novaDistancia * valorLitro) * 0.7
    
    let teste = people.temCarro == true ? people.valeCombustivel = 'R$ 0,00': people.valeCombustivel = `R$${valeCombustivel}`
    console.log(teste)
} 
calculaVale(novaPessoa)
console.log(novaPessoa)

//Exercício 5
let novoEndereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}

function adicionarTipo(adress){
    let teste00 = 'Casa'
    let pushTipo = adress.tipo.push(teste00)
    console.log(pushTipo)
}
adicionarTipo(novoEndereco)
  
//Exercício 6
function adicionarEnderecoEmPessoa(adress, people){
    return people.endereco.push(adress)
}
adicionarEnderecoEmPessoa(novoEndereco, novaPessoa)

console.log(novaPessoa)    

