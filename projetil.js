classe projetil{

    //variaveis

 velocidade;
 posicaoX;
 posicaoY;
 tiroinimigo;
 formato;
 hitBox;
 
 constructor(posicaoX, posicaoY, tiroinimigo){
 this.posicaoX = posicaoX;
 this.posicaoY = posicaoY;
 this.tiroinimigo = tiroinimigo;
 }
 
 construir(){
 // aqui sera construido o projetil, sendo do jogador ou dosinimigos
 }
 
 seDestruir(){
 // aqui o projetil sera destruido ao entrar em contato com outro objeto ou saindo do limite do painel
 }
 
 mover(){
 // aqui sera o movimento do tiro
 return posicaoX;
 return posicaoY;
 }