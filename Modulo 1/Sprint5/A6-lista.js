let list = "Verifcar se está conectado na energia, Verificar se o monitor está conectado na energia, Verificar se todos os cabos estão conectados, Apertar o botão de power, Esperar tela acender, usar"

function convertToArray(str){
    let strToArr = str.split(',')
    return strToArr
}
console.log(convertToArray(list))

function convertToArray2(arr){
    let arrToList = []
    for ( i = 0; i < arr.length; i++){
        let newArr = `${i+1}º -${arr[i]}`
        arrToList.push(newArr)
    }
    return arrToList
}
console.log(convertToArray2(convertToArray(list)))