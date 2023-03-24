/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    function jogarBlackjack() {

      if (confirm("Deseja iniciar uma nova rodada?")) {
          alert("Vamos lá!");
          console.log("Vamos lá!");
  
  
          let cartaUsuario1 = comprarCarta();
          let cartaUsuario2 = comprarCarta();
          let cartaIA1 = comprarCarta();
          let cartaIA2 = comprarCarta();
  
  
          let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
          let pontuacaoIA = cartaIA1.valor + cartaIA2.valor;
  
  
          console.log(
              "Usuário - cartas: " +
              cartaUsuario1.texto +
              " " +
              cartaUsuario2.texto +
              " - pontuação: " +
              pontuacaoUsuario
          );
          console.log(
              "IA - cartas: " +
              cartaIA1.texto +
              " " +
              cartaIA2.texto +
              " - pontuação: " +
              pontuacaoIA
          );
  
  
          if (pontuacaoUsuario === 21) {
              console.log("Parabéns! Você ganhou com um Blackjack!");
          } else if (pontuacaoIA === 21) {
              console.log("Que pena! A IA ganhou com um Blackjack.");
          } else {
  
              let continuarComprando = confirm("Deseja comprar mais cartas?");
              while (continuarComprando) {
                  let novaCarta = comprarCarta();
                  pontuacaoUsuario += novaCarta.valor;
                  console.log(
                      "Nova carta do usuário: " +
                      novaCarta.texto +
                      " - pontuação: " +
                      pontuacaoUsuario
                  );
  
                  if (pontuacaoUsuario > 21) {
                      console.log(
                          "Que pena! Você ultrapassou a pontuação máxima. A IA ganhou!"
                      );
                      return;
                  }
  
                  continuarComprando = confirm("Deseja comprar mais cartas?");
              }
  
              while (pontuacaoIA < 17) {
                  let novaCarta = comprarCarta();
                  pontuacaoIA += novaCarta.valor;
                  console.log(
                      "Nova carta da IA: " +
                      novaCarta.texto +
                      " - pontuação: " +
                      pontuacaoIA
                  );
  
  
                  if (pontuacaoIA > 21) {
                      console.log(
                          "Parabéns! A IA ultrapassou a pontuação máxima. Você ganhou!"
                      );
                      return;
                  }
              }
  
              if (pontuacaoUsuario > pontuacaoIA) {
                  console.log("Parabéns! Você ganhou!");
              } else if (pontuacaoIA > pontuacaoUsuario) {
                  console.log("Que pena! A IA ganhou.");
              } else {
                  console.log("Empate!");
              }
  
  
              if (confirm("Deseja jogar novamente?")) {
  
                  jogarBlackjack();
              } else {
                  alert("Obrigado por jogar!");
                  console.log("Obrigado por jogar!");
              }
          }
      } else {
          alert("Que pena! Até a próxima.");
          console.log("Que pena! Até a próxima.");
      }
  }
  
  jogarBlackjack();