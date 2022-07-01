let garden = [
    [0,0,0,'G'],
    [0,0,'G',0],
    [0,'G',0,0],
    ['G',0,0,0]
    ]

function trimTheGrass(jardim){
    for(i = 0; i < jardim.length; i++){
        for(j = 0; j < jardim[i].length; j++){
            if (jardim[i][j] == 'G'){
                jardim[i][j] = 0
            }
        }
    }
    return 'Tarefa Concluída'
}
console.log(trimTheGrass(garden))

function verification (trim){
    for(i = 0; i < trim.length; i++){
        for(j = 0; j < trim[i].length; j++){
            if (trim[i][j] == 'G'){
               return "Ainda falta concluir."
            }
            return "Grama totalmente cortada."
        }
    }
}
console.log(verification(trimTheGrass(garden)))