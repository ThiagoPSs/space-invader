class Painel{

   //variaveis
   
   Barricada;
   pontuacao;
   hitBox;
   jogador;
   Inimigo;
   derrota;
   tamanho;
   nivel;
 
   constructor(pontuacao, derrota , nivel){
   
     this.pontuacao = pontuacao;
     this.derrota = derrota;
	 this.nivel = nivel;
    }
 
  Iniciar(){
  // aqui é onde as primeiras ações do jogo serão feitas, sera resetada a pontuação e posicionado os demais itens( jogador e inimigos)
  }
 
  
  Perdeu(){
  // vai usar a classe do jogador para verificar q quantidade de vidas, se estiver sem vidas o jogo acabara
  return derrota;

  }
  
  AtualizarPontuacao(){
  // quando um inimigo for morto a pontuação gerada por ele vai ser adicionda a pontuação do painel
  return pontuacao;
  }
 
  AtualizarNivel(){
  // esse metodo sera usado para mudar o nivel assim que não existirem mais inimigos na tela
  return nivel;
  }
 
 construirBarricadas(){
 // aqui quando o jogo for iniciado e reiniciado devera checa os espaços vasios da barricada e concertar eles
 }
 
 checarLimite(){
 // aqui sera onde o limite do painel sera definido, assim evitando que o jogador e os inimigos saiam o painel
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
