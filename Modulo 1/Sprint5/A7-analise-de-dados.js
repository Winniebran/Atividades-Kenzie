let arrData = ['João', 'Ana', 'José', 'Maria']

function analyticsData (str, arr){
    
    for(i = 0; i < arr.length; i++){
        if ( str === arr[i]){
            return `O usuário ${str} existe na lista e está na ${i+1}ª posição`
        }
    }
    arrData.push(str)
    return `Como o usuário não foi encontrado, foi inserido dentro da lista, segue a nova estrutura:[${arrData}]`
}
console.log(analyticsData('João', arrData))