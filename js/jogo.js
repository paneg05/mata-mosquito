
var altura
var largura

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}
     ajustaTamanhoTela()

     // cria cordenadas de forma dinamica
     var posicaoX = Math.floor(Math.random() * largura)
     var posicaoY = Math.floor(Math.random() * altura)

     console.log(posicaoX,posicaoY)

     