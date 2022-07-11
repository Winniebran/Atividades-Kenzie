let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

function newEvent(object){

    let tagSpan1 = document.createElement('span')
    let tagSpan2 = document.createElement('span')
    let tagSpan3 = document.createElement('span')
    let tagSpan4 = document.createElement('span')
    let tagAncora = document.createElement ('a')
    let tagLi = document.createElement('li')

    tagSpan1.innerText = `${object.nome}`
    tagSpan2.innerText = `${object.valor}`
    tagSpan3.innerText = `${object.liquidacao}`
    tagSpan4.innerText =  ''
    tagAncora.innerText = `${object.distribuidor}`
    
    tagSpan4.appendChild(tagAncora)
    tagLi.append(tagSpan1, tagSpan2, tagSpan3, tagSpan4)
    
    return tagLi
}
console.log(newEvent(produto))

let element = document.getElementsByClassName("container")[0];
let elementInformado = document.getElementsByClassName("infomacao")[0];

element.addEventListener("click", function (e) {
    let elementoCapture = e.target.className;
    if (elementoCapture == "aqui_dispara") {
        if (elementInformado.children.length === 0) {
          elementInformado.innerHTML = "Sou um toggle";
        } else {
          elementInformado.innerHTML = "";
        }
    }
})