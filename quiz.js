/* =========================================================
   LÓGICA DO QUIZ 
   Os alunos NÃO precisam mexer aqui.
   As perguntas ficam em perguntas.js
   ========================================================= */

// Perfis de resultado: ajuste textos e emojis à vontade
const PERFIS = [
  {
    minimo: 0.8,
    emoji: "💂🏿",
    titulo: "Guardião do Planeta!",
    texto:
      "Você manda muito bem! Conhece o assunto e pode ensinar os outros a cuidar do nosso futuro.",
  },
  {
    minimo: 0.5,
    emoji: "🌳",
    titulo: "Árvore Forte",
    texto:
      "Você já sabe bastante! Com mais algumas atitudes, vira um Guardião do Planeta.",
  },
  {
    minimo: 0,
    emoji: "🪴",
    titulo: "Semente do Futuro",
    texto:
      "Todo guardião começou como semente! Que tal colocar em prática as dicas que você viu aqui?",
  },
];

let atual = 0;
let acertos = 0;

const $ = (id) => document.getElementById(id);

function mostrarTela(id) {
  document
    .querySelectorAll(".tela")
    .forEach((t) => t.classList.remove("ativa"));
  $(id).classList.add("ativa");
  window.scrollTo(0, 0);
}

function comecar() {
  atual = 0;
  acertos = 0;
  mostrarTela("tela-pergunta");
  mostrarPergunta();
}

function mostrarPergunta() {
  const p = PERGUNTAS[atual];
  $("contador").textContent = `Pergunta ${atual + 1} de ${PERGUNTAS.length}`;
  $("progresso").style.width = `${(atual / PERGUNTAS.length) * 100}%`;
  $("texto-pergunta").textContent = p.pergunta;
  $("feedback").classList.add("escondido");

  const caixa = $("opcoes");
  caixa.innerHTML = "";
  p.opcoes.forEach((texto, i) => {
    const b = document.createElement("button");
    b.className = "opcao";
    b.textContent = texto;
    b.onclick = () => responder(i);
    caixa.appendChild(b);
  });

  // reinicia a animação de entrada
  const tela = $("tela-pergunta");
  tela.classList.remove("entrar");
  void tela.offsetWidth;
  tela.classList.add("entrar");
}

function responder(escolha) {
  const p = PERGUNTAS[atual];
  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach((b) => (b.disabled = true));

  botoes[p.correta].classList.add("certa");
  const acertou = escolha === p.correta;
  if (acertou) {
    acertos++;
  } else {
    botoes[escolha].classList.add("errada");
  }

  $("feedback-titulo").textContent = acertou
    ? "✅ Acertou!"
    : "❌ Não foi dessa vez";
  $("feedback-texto").textContent = p.explicacao;
  $("feedback").className = "feedback " + (acertou ? "ok" : "nao");
  $("btn-proxima").textContent =
    atual === PERGUNTAS.length - 1 ? "Ver resultado 🏆" : "Próxima →";
}

function proxima() {
  atual++;
  if (atual < PERGUNTAS.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  $("progresso").style.width = "100%";
  const nota = acertos / PERGUNTAS.length;
  const perfil = PERFIS.find((pf) => nota >= pf.minimo);
  $("resultado-emoji").textContent = perfil.emoji;
  $("resultado-titulo").textContent = perfil.titulo;
  $("resultado-pontos").textContent =
    `${acertos} de ${PERGUNTAS.length} acertos`;
  $("resultado-texto").textContent = perfil.texto;
  mostrarTela("tela-resultado");
}

$("btn-comecar").onclick = comecar;
$("btn-proxima").onclick = proxima;
$("btn-reiniciar").onclick = comecar;
