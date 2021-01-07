
var altura
var largura

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}


     ajustaTamanhoTela()



     function posicaoRandomica(){

        // cria cordenadas de forma dinamica
        var posicaoX = Math.floor(Math.random() * largura) -90
        var posicaoY = Math.floor(Math.random() * altura) -90

        posicaoX = posicaoX<0 ? 0 :posicaoX
        posicaoY = posicaoY<0 ? 0 :posicaoY


        console.log(posicaoX,posicaoY)

        //cria o elemento html em js e insere no body
        var mosquito = document.createElement('img')
        mosquito.src ="img/mosca.png"
        mosquito.className ='mosquito1'
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY +'px'
        mosquito.style.position='absolute'
        document.body.appendChild(mosquito)
        
        
     }

     
