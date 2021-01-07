
var altura
var largura
var vidas=1
var tempo = 10

var criaMosquitoTempo=1500

var nivel=window.location.search
nivel=nivel.replace('?','')

if (nivel==='normal') {
    criaMosquitoTempo=1500
} else if(nivel==='dificil'){
    criaMosquitoTempo=1000
}else if('chuck norris'){
    criaMosquitoTempo=750
}


function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    
}


     ajustaTamanhoTela()

    var cronometro = setInterval(function(){
        tempo--
        if(tempo<0){
            clearInterval(cronometro)
            clearInterval(inicio)
            alert('vitoria!!!!')
            window.location.href='vitoria.html'
        }
        document.getElementById('cronometro').innerHTML=tempo
        
    },1000)

     function posicaoRandomica(){


        //remove o mosquito anterior caso exista
        if(document.getElementById('mosquito')){


            document.getElementById('mosquito').remove()

            if (vidas>3) {
                clearInterval(inicio)
                clearInterval(cronometro)
                
                alert('interropa o jogo !!')
                window.location.href='fim_de_jogo.html'
            } else {
                 document.getElementById('v'+(vidas)).src='img/coracao_vazio.png'
                vidas++
            }

            
            
           
        }

       

    


        // cria cordenadas de forma dinamica
        var posicaoX = Math.floor(Math.random() * largura) -90
        var posicaoY = Math.floor(Math.random() * altura) -90

        posicaoX = posicaoX<0 ? 0 :posicaoX
        posicaoY = posicaoY<0 ? 0 :posicaoY


        

        //cria o elemento html em js e insere no body
        var mosquito = document.createElement('img')
        mosquito.src ="img/mosca.png"
        mosquito.id='mosquito'
        mosquito.className =tamanhoAleatorio() + ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY +'px'
        mosquito.style.position='absolute'
        mosquito.onclick=function (){
            this.remove() //this faz referenci ao proprio elemento html que executa a função
        }

        document.body.appendChild(mosquito)
        
        
        tamanhoAleatorio()
        
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




     
