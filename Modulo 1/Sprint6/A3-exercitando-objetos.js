const carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
]


//Exercício 1
function contaTotal(carList){
    let quantidade = 0
    for (let i = 0; i < carList.length; i++){
        quantidade ++
    }
    return quantidade
}
console.log(contaTotal(carros))


//Exercício 2
function precoTotal(carList){
    let carPrice = 0
    for (let i = 0; i < carList.length; i++){
        let newPrice = Number(carList[i].preco.slice(3).replace('.', '').replace(',', '.'))
        carPrice += newPrice
    }
    return carPrice.toFixed(2)
}
console.log(precoTotal(carros))


//Exercício 3
function filtraPorMarca(carList, carBrand){
    let arr = []
    for (let i = 0; i < carList.length; i++){
        if (carList[i].marca == carBrand){
            arr.push(carList[i])
        }
    }
    return arr
}
console.log(filtraPorMarca(carros, 'VW'))


//Exercício 4
let acessoriosFiltrados = carros.filter(elemento => elemento.acessorios.length != 0)
console.log(acessoriosFiltrados)


//Exercício 5
let veiculosCompletos = carros.filter (elemento =>  elemento.completo == true)
console.log(veiculosCompletos)


//Exercício 6
let novoCarro = {modelo:"Novo Uno",
marca:"Fiat",
ano:"2014",
cor:"Vermelho",
completo: true,
acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
preco: 'R$ 20.429,52'}

function adicionaCarro(newCar){
    carros.push(newCar)
    return carros
}
console.log(adicionaCarro(novoCarro))


//Exercício 7
function removeCarro(carList, index){
    carList.splice(index, 1)
    return carros
}
console.log(removeCarro(carros, 2))


//Exercicio 8
function contaCarrosNovos(carList, anoAtual){
    let menosDe10Anos = anoAtual - 10
    let quantidade = 0
    for (let i = 0; i < carList.length; i++){
        if (carList[i].ano > menosDe10Anos){
            quantidade ++
        }
    }
    return quantidade
}
console.log(contaCarrosNovos(carros, 2022))


//Exercício 9
function contaCarrosVelhos(carList, anoAtual){
    let menosDe10Anos = anoAtual - 10
    let quantidade = 0
    for (let i = 0; i < carList.length; i++){
        if (carList[i].ano < menosDe10Anos){
            quantidade ++
        }
    }
    return quantidade
}
console.log(contaCarrosVelhos(carros, 2022))


//Exercício 10
function insereDono(carList,index,people){
    carros.push(carList[index].dono = [people])
    return carros
}
console.log(insereDono(carros, 1, {nome: 'Jhon Dhoe', cpf: '122-133-144-55'}))
