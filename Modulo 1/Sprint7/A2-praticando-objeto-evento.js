let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

const body = document.querySelector('body')

function newEvent(object){

    let tagSpan1 = document.createElement('span')
    let tagSpan2 = document.createElement('span')
    let tagSpan3 = document.createElement('span')
    let tagSpan4 = document.createElement('span')
    let tagAncora = document.createElement ('a')
    let tagLi = document.createElement('li')
    let tagUL = document.createElement('ul')
    let valorComDesconto = object.valor - object.valor * 0.3

    tagSpan1.innerText = `${object.nome}\n`
    tagSpan2.innerText = `${object.valor}\n`
    tagSpan3.innerText = `Liquidação\n`
    tagAncora.innerText = `${object.distribuidor}\n`
    tagAncora.href = 'https://alunos2.kenzie.com.br/courses/99/pages/s7-04%7C-atividade-praticando-objeto-evento'
        
    tagLi.append(tagSpan1, tagSpan2, tagSpan3, tagAncora, tagSpan4)
    tagUL.appendChild(tagLi)
    body.appendChild(tagUL)

    tagAncora.addEventListener('click', function(a){
      if (object.liquidacao === true){
        a.preventDefault()
      } 
    })
    
    tagSpan3.addEventListener('click', function(){
      if(object.liquidacao){
        tagSpan4.innerText = `Apenas hoje: R$ ${valorComDesconto}`
        object.liquidacao = false
      }else{
        tagSpan4.innerText = ''
        object.liquidacao = true
      }
    })
}
newEvent(produto)




/* let element = document.querySelector(".container")
let elementInformado = document.querySelector(".informacao")

element.addEventListener("click", function (e) {
    let elementoCapture = e.target.className;

    if (elementoCapture == "aqui_dispara") {
        if (elementInformado.children.length === 0) {
          elementInformado.innerHTML = '<span>Sou um toggle</span>';
        } else {
          elementInformado.innerHTML = "";
        }
    }
}) */