let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.});
}

function exibirMensagemInicial() {

   exibirTextoNaTela('h1','Jogo do numero secreto');
   exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Parabéns, você acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Muito bem! você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p','O número secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
   }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio ();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;
   }
 }



function limparCampo (){
   chute=document.querySelector('input');
   chute.value='';
}

function reiniciarJogo(){
   numeroSecreto=gerarNumeroAleatorio();
   limparCampo();
   tentativas=1
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}






//por padrão nossas funções devem ter nomenclaturas descritivas.
//evite a repetição de códigos com funções!
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = ('Escolha um número entre 1 e 100');
//string = texto

//Pratique o uso dos operadores (== "comparativo" / = "atribuir valor")
//number = número
//input = entrada de usuário
// Boolean = Verdadeiro / Falso







