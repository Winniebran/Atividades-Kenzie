//Simples
const tag = document.createElement('p')
tag.innerText = "Olá, eu sou uma tag criada pelo JS"
document.querySelector('body').appendChild(tag)

//Intermediária
const tagInput = document.createElement('input')
tagInput.placeholder = 'Digite seu texto aqui'
const form = document.querySelector('form')
form.appendChild(tagInput)

//Avançado
const article = document.createElement('article')
const h1 = document.createElement('h1')
const p = document.createElement('p')
const a = document.createElement('a')

h1.innerText = 'Título do Post'
p.innerText = 'Descrição do Post'
a.innerText = 'Ver post completo'

document.querySelector('body').appendChild(article)
article.appendChild(h1)
article.appendChild(p)
article.appendChild(a)