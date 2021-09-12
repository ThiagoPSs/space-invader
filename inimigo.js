class inimigo{

    //variaveis

  posicaoX;
  posicaoY;
  velocidade;
  forma;
  pontuacao;
  vivo;
  hitBox;
  projetil;
  
  constructor( posicaoX, posicaoY, velocidade, vivo, projetil){
  
     this.posicaoX = posicaoX;
     this.posicaoY = posicaoY;
     this.velocidade = velocidade;
     this.vivo = vivo;
     this.projetil = projetil;
    }
  
  mover(){
  // aqui é onde vamos usar as variaveis de posição para a movimetação dos inimigos;
  return posicaoX;
  return posicaoY;
  
  atacarJogador(){
  // aqui apos um certo tempo um dos inimigos que não estão mortos, mais proximo ao jogador vai disparar
  }
  
  construir(){ 
  //aqui é onde apos os inimigos serão cosntruidos, incluindo os que apenas passam rapidamente
  }
  mudarVelocidade(){
  // aqui é onde a velocidade dos inimigos ira mudar após matar um deles
  return velocidade;
  
  }
  
  destruir(){
  // aqui é onde vamos destruir o sprite dos inimigos para quando mortos não ficarem no painel
  
  }
  
  morto(){
  // aqui é onde verificamos se o inimigo esta morto
  return vivo;
  }
  
  checarHitBox(){
  // aqui é onde vamos indentificar se algum disparo do jogador toca o inimigo
  return hitBox;
  }
  
  somarPontos(){
  // cada inimigo morto gera uma pontuação para o painel, aqui é onde essa pontuação é gerada e somada
  return pontucao;
  }