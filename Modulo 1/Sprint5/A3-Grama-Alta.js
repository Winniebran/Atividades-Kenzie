let garden = [
    [0,0,0,'G'],
    [0,0,'G',0],
    [0,'G',0,0],
    ['G',0,0,0]
    ]

function trimTheGrass(jardim){
    for(i = 0; i < jardim.length; i++){
        for(j = 0; j < jardim.length; j++){
            if (jardim[i][j] == 'G'){
                jardim[i][j] = 0
            }
        }
    }
    return 'Tarefa Concluída'
}
console.log(trimTheGrass(garden))

function verification (trim){
    
}