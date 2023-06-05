function adicionar(num){
    document.querySelector('.resposta').innerHTML += num
}

function limpar(){
    document.querySelector('.resposta').innerHTML = ''
}

function apagar(){
    let resposta = document.querySelector('.resposta').innerHTML
    document.querySelector('.resposta').innerHTML = resposta.substring(0 , resposta.length -1)
}

function calcular(){
    let resposta = document.querySelector('.resposta').innerHTML
    document.querySelector('.resposta').innerHTML = eval(resposta)
}