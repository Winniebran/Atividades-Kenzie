let tasks = [
    {
      titulo: "Comprar comida para o gato",
      tipo: "Urgente"
    },
    {
      titulo: "Limpar o quarto",
      tipo: "urgente"
    },  
    {
      titulo: "Consertar Computador",
      tipo: "prioritário"
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: "Urgente"
    },  
    {
      titulo: "Beber água",
      tipo: "prioritário"
    },
]

const tarefas = document.querySelector('.tarefas')
let createUl = document.createElement('ul')

let arrUrgente = []
let arrPrioritario = []
let arrNormal = []

function priorityTask(priority) {
  for(let i = 0; i < priority.length; i++){
    if(priority[i].tipo.toLowerCase() === 'urgente'){
      arrUrgente.unshift(priority[i].titulo)
    }else if(priority[i].tipo.replace('á', 'a').toLowerCase() === 'prioritario'){
      arrPrioritario.unshift(priority[i].titulo)
    }else if(priority[i].tipo.toLowerCase() === 'normal'){
      arrNormal.unshift(priority[i].titulo)
    }
  }
}
priorityTask(tasks)

function createTask(task){
  for (let i = 0; i < task.length; i++){
    let createLi = document.createElement('li')
    createLi.innerText = `${task[i]}`
    createUl.appendChild(createLi)
    tarefas.appendChild(createUl)
  }
}
createTask(arrUrgente)
createTask (arrPrioritario)
createTask (arrNormal)