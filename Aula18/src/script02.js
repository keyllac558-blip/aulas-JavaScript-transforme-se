// Utilizando o método setInterval()
const elemento = document.querySelector('.meu-relogio');

setInterval(mostrarRelogio, 1000);

function mostrarRelogio() {
    const data = new Date();
    
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    elemento.innerHTML = `${horas} : ${minutos} : ${segundos}`;

}

// Utilizando o método setTimeout()
const conteudo = documnet.querySelector(".meu-conteudo");
const botao = document.querySelector(".elemento-botao");

botao.addEventListener("click", handleTimeout);

function handleTimeout() {
    setTimeout(mostrarConteudo, 2000);
}

function mostrarConteudo() {
    conteudo
}
