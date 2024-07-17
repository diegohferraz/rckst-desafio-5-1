const btnOpen = document.querySelector("#openCookieBtn");
const btnReset = document.querySelector("#resetCookieBtn");
const closedBlock = document.querySelector("#openCookieWrapper");
const oppenedBlock = document.querySelector("#oppenedCookieWrapper");
const messageParagraph = document.querySelector("#message");

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Grandes oportunidades estão a caminho.",
  "A felicidade será sua fiel companheira.",
  "Você encontrará sucesso em seus empreendimentos.",
  "A sorte sorri para aqueles que perseveram.",
  "Novas amizades trarão alegria à sua vida.",
  "Uma mudança positiva está prestes a acontecer.",
  "A sabedoria que você procura está dentro de você.",
  "Seu trabalho árduo será recompensado em breve.",
  "A paz interior é o caminho para a verdadeira felicidade.",
];

function toggleOpen() {
  closedBlock.classList.toggle("hide");
  oppenedBlock.classList.toggle("hide");
}

btnOpen.addEventListener("click", () => {
  toggleOpen();
  const randomIdx = Math.round(Math.random() * 10);
  const selectedPhrase = phrases[randomIdx];

  messageParagraph.innerHTML = selectedPhrase;
});

btnReset.addEventListener("click", () => {
  toggleOpen();
});
