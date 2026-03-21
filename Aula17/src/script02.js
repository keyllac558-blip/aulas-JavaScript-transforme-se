// Utilizando o evento onmouse
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function () {
  caixa.innerHTML = "O mouse está em cima da caixa.";
  caixa.style.background = "orange";
  caixa.style.color = "#000";
});

caixa.addEventListener("mouseout", function () {
  caixa.innerHTML = "O mouse está fora da caixa.";
  caixa.style.background = "orangered";
  caixa.style.color = "#fff";
})

// Exemplo de posição do mouse na página 
const conteudo = document.querySelector(".conteudo");

document.addEventListener("mousemove", handlePosicao);

function handlePosicao(evento) {
  consteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
  console.log(evento);
  
}