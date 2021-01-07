
var altura
var largura

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    
}


     ajustaTamanhoTela()



     function posicaoRandomica(){

        // cria cordenadas de forma dinamica
        var posicaoX = Math.floor(Math.random() * largura) -90
        var posicaoY = Math.floor(Math.random() * altura) -90

        posicaoX = posicaoX<0 ? 0 :posicaoX
        posicaoY = posicaoY<0 ? 0 :posicaoY


        

        //cria o elemento html em js e insere no body
        var mosquito = document.createElement('img')
        mosquito.src ="img/mosca.png"
        mosquito.className =tamanhoAleatorio() + ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY +'px'
        mosquito.style.position='absolute'
        document.body.appendChild(mosquito)
        
        console.log(tamanhoAleatorio())
        tamanhoAleatorio()
        console.log(ladoAleatorio()) 
     }

function tamanhoAleatorio(){

    var classe =Math.floor(Math.random() * 3) 
    switch(classe){
        case 0:
            return' mosquito1'
            
        case 1:
            return ' mosquito2'
            
        case 2:
            return ' mosquito3'
            
    }

}


function ladoAleatorio (){
    var lado =Math.floor(Math.random()*2)
    switch(lado){
        case 0:
            return ' ladoA'
        case 1:
            return ' ladoB'
    }
}

     
