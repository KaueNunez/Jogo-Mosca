// Pegando dados da tela - Inicio
var height = 0;
var width = 0;
var vidas = 1;
var tempo = 15;
var nivelMosca = 1500;

// Nivel - inicio

var nivel = window.location.search;
nivel = nivel.replace('?','');

if(nivel === 'normal'){
    nivelMosca = 1500;
}else if(nivel === 'facil'){
    nivelMosca = 1750;
}else if(nivel === 'dificil'){
    nivelMosca = 1000;
}else if(nivel === 'hardcore'){
    nivelMosca = 750;
}

// Nivel - Fim
// ===============================================

function dadosAlturaLargura(){
    height = window.innerHeight;
    width = window.innerWidth;

    console.log(height,width);
}
dadosAlturaLargura();
// Pegando dados da tela - Fim
// ===============================================

// cronometro - inicio

var cronometro = setInterval(function (){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosca);
        window.location.href = './vitoria.html';
    }else{
        document.getElementById('cronomentro').innerHTML = tempo;
    }

},1000)

// cronometro - Fim
// ===============================================

// Posição da mosca - Inicio
function posicaoMosca(){

    // verificar se a mosca existe
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();

        if(vidas > 3){
            window.location.href = './game_over.html';
        }else{
            document.getElementById('v'+vidas).src = '../img/coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * width) - 90;
    var posicaoY = Math.floor(Math.random() * height) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX,posicaoY);

    var mosca = document.createElement('img');
    mosca.src = './img/mosca.png';
    mosca.className = tamanhoMosca() + ' ' + ladoMosca();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca';
    mosca.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosca);

    console.log(ladoMosca());

}

// Posição da mosca - Fim
// ===============================================

// Tamanho da mosca - Inicio

function tamanhoMosca(){
    var classMosca = Math.floor(Math.random() * 3);
    
    if(classMosca === 0 ){
        return 'mosca1';
    }else if(classMosca === 1){
        return 'mosca2';
    }else if(classMosca === 2){
        return 'mosca3';
    }
}

// Tamanho da mosca - Fim
// ===============================================

// Lado da mosca - Inicio

function ladoMosca(){
    var ladoMosca = Math.floor(Math.random()*2);

    if(ladoMosca === 0 ){
        return 'moscaA';
    }else if(ladoMosca === 1){
        return 'moscaB';
    }
}