let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function eGanhador(pessoa){
    let nome = pessoa.nome[0].toUpperCase() + pessoa.nome.slice(1)
    
    if (nome == ganhador.nome && pessoa.cpf == ganhador.cpf){
        return `É ganhador!`
    }else{

        return `É alarme falso!`
    }
}
console.log(eGanhador({nome: 'adamastor', cpf : '123.321.789-98'}))


let data = []

function nGanhador(pessoa){
    let nome = pessoa.nome[0].toUpperCase() + pessoa.nome.slice(1)
    console.log(nome)
    if (nome == ganhador.nome && pessoa.cpf == ganhador.cpf){
        return `É ganhador!`
    }else{
        data.push(pessoa)
        return `${data.length} pessoa tentou retirar o prêmimo.`
    }
}
