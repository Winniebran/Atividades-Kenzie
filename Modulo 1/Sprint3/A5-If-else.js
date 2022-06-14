//Exercício 1
let usuarioAutenticado = true
if (usuarioAutenticado == true){
    console.log("Seja Bem vindo")
}
else {
    console.log("Usuário não autenticado")
}

//Exercício 2
let usuario = "Ana"
let autenticado = false
let usuarioExistente = (usuario == "Ana" && autenticado == true)
if (usuarioExistente){
    console.log(`Olá ${usuario}, você está autenticado.`)
}
else {
    console.log("Usuário inexistente")
}

//Exercício 3
let produto = "maçã"
let quantidadeDoProduto = 2
let quantidadeDoProdutoParaPromocao = (5 - quantidadeDoProduto)
if (produto == "maçã" && quantidadeDoProduto >= 5){
    console.log("Você recebeu uma promoção, o valor do produto será R$5.00")
}
else {
    console.log (`Se você adicionar mais ${quantidadeDoProdutoParaPromocao} de maçãs, o valor sairá por R$5.00`)
}