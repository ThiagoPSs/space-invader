classe barricada{

   //variaveis

 forma;
 hitBox;
 parteDestruida;
 
 constructor(parteDestruida){
	 this.parteDestruida = parteDestruida;
 }
 
  destruir(){
 // aqui sera onde usaremos a forma e geraremos assim as partes vazias, que serão usadas pelo painel para concertar essas partes quando  o jogo for reiniciado.
  return parteDestruida;
 }
 
 
  checarHitBox(){ 
 // checar se algum disparo tocou a barricada
 return forma;
 }