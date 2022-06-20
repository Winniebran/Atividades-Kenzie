//Exercício 1

function somarValores (valor1, valor2){
    return valor1 + valor2
  }
console.log(somarValores(15, 876))

//Exercício 2
function verificarTipo (valor){
  console.log(typeof (valor))
  console.log(valor)
}
verificarTipo(2)

//Exercício 3
function somaBimestres (nota1, nota2, nota3, nota4){
  if (typeof(nota1, nota2, nota3, nota4) !== typeof(1)){ 
    console.log("A função só pode receber números")
  }
  
  else {
    return nota1 + nota2 + nota3 + nota4
  }
}

console.log(somaBimestres(1, 2, 3, 4))