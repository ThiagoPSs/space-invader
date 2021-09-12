class jogador{

   //variaveis

  mapaDeTeclas
  posicaoY;
  posicaoX;
  velocidade;
  hitBox;
  vidas;
  projetil;
  
  
  constructor( posicaoX, vidas, projetil){
     this.posicaoX = posicaoX;
     this.vidas = vidas;
     this.projetil = projetil;
    }
  mover(){
  // aqui sera onde a posicaoX serao alteradas usando o mapa de teclas 
  return posicaoX;
  }
  
 atirar(){
 // aqui seria usado a classe porjetil para começar um disparo
 }
 
 destruir(){
 // aqui seria onde a nove do jogador seria destruida ao perder todas as vidas

 }
 
 perderVida(){
 // aqui sera onde as vidas do jogador serão controladas e armazenadas
 return vidas;
 }
 
 checarHitBox(){
 // aqui sera onde vamos usar a hitBox(forma) do jogador para indentificar se o projetil toca o jogador
 return hitBox;
 }
