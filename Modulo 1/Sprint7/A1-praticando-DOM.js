//Kata1
const container = document.getElementById('root')
console.log(container)

//Kata2
const Kata2 = document.getElementById('root')
Kata2.innerText = 'repetir'

//Kata3
const kata3 = document.getElementById('root')
kata3.innerText = 'repetir mais\n'

//Kata4
const repetir = document.createElement('span')
console.log(repetir)

//Kata5
const kata5 = document.createElement("span")
kata5.innerText = 'preciso repetir'
console.log(kata5)

//Kata6
let kata6 = document.createElement('span')
const container2 = document.getElementById('root')
kata6.innerText = 'repetir e repetir'
container2.appendChild(kata6)
console.log(container2)

//kata7
const container3 = document.getElementById('root')

let createUl = document.createElement('ul')
let createList = document.createElement('li')

createList.innerText = 'repetir cada vez mais'

createUl.appendChild(createList)
container3.appendChild(createUl)

console.log(container3)