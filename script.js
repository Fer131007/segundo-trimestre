const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
  {
      enunciado:"você tem um sono bom?"
    alternativas: [
  {
    texto: "sim";
     afirmação: "não";
}
{
  texto: "não"
]
},
  {
      enunciado:"você tem uma alimentação boa"
    alternativas:[
    "sim";
     "não";
]
},
  {
      enunciado:"você pratica esportes?"
    alternativas:[
    "sim";
     "não";
]
},
  {
      enunciado:"você toma água frequente?"
    alternativas:[
    "sim";
     "não";
]
},
  {
      enunciado:"você vai no medico frequentemente?"
    alternativas:[
    "sim";
     "não";
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click,()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionadas(opçaoSelecionada){
  cont afirmaçoes = opçaoSelecioanada.afirmaçoes;
mostraPergunta();
