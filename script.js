const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
      enunciado:"você tem um sono bom?",
    alternativas: [
  {
    texto: "sim",
     afirmação: "não"
},
{
  texto: "não"
}
]
},
  {
      enunciado:"você tem uma alimentação boa"
    alternativas:[
     {
    texto: "sim",
     afirmação: "não"
},
{
  texto: "não"
}
]
},
  {
      enunciado:"você pratica esportes?"
    alternativas:[
   {
    texto: "sim",
     afirmação: "não"
},
{
  texto: "não"
}
]
},
  {
      enunciado:"você toma água frequente?"
    alternativas:[
   {
    texto: "sim",
     afirmação: "não"
},
{
  texto: "não"
}
]
},
  {
      enunciado:"você vai no medico frequentemente?"
    alternativas:[
    {
    texto: "sim",
     afirmação: "não"
},
{
  texto: "não"
}
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
  return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textcontent = "";
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
  cont afirmaçoes = opçaoSelecioanada.afirmação;
  historiaFinal  += afirmaçoes + " ";
  atual++;
mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "em 2049";
  textoResultado. textContent = historiaFinal;
  caixaAlternativa. textContent = "";
}
mostraPergunta();
