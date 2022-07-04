//Exercício 1

let pessoa = {
    nome: 'Winnie',
    nascimento: '1992',
    cpf: '036.964.237-15',
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: 'Rua da paz, 462',
}

//Exercício 2

let escola = {
    nome: 'Kenzie Academy',
    cnpj: '12.455.445/0001-37',
    atuacao: 'Ensino superior',
    cidade: 'Curitiba',
    estado: 'Paraná',
    logradouro: 'Avenida Getúlio Vargas, 273',
    curso: 'Desenvolvedor FullStack',
}

//Exercício 3

let curso = {
    nome: 'Desenvolvedor Full',
    duracao: '1 ano',
    turma: '13',
    modulos: ['Html', 'Css', 'JavaScript', 'React', 'TypeScript', 'Pyton', 'Redux'],
}

//Exercício 4

let endereco = {
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: 'Rua minas gerais, 78',
    cep: '41.445-190',
}

//Exercício 5

let turma = {
    professores: ['Hudson', 'Igor', 'João'],
    alunos: [['Ana', 'Joana', 'Marcelo', 'Patrick'], ['José', 'Augusto', 'Aurora', 'Felipe'], ['Renato', 'Vitoria', 'Eduarda', 'Samila']],
    inicio: '21/07/2022',
    formatura: '01/08/2023',
}
console.log(turma.alunos[0][1])