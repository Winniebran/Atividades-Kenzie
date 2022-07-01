let bigString = 'Pneumoultramicroscopicossilicovulcanoconiótico'

function palavraMaluca(upperCaseString){
    let string1 = upperCaseString.toUpperCase().replaceAll('O', 'Y').replace('Ó', 'Y').split('').reverse()
    let newString = [string1[0]]
    
    for(let i = 0; i < string1.length; i++){
        if(newString.includes(string1[i]) !== true){
            newString.push(string1[i])
        }
    }
    let string2 = newString.join('').toLowerCase()
    return string2.replace(string2[0], string1[0])
}
console.log(palavraMaluca(bigString))

/* let array1 = bigString.split('') 
let array2 = [...new Set(array1)]
console.log(array2) */