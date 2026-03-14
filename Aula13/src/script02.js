// Definindo uma array global 
const times = ["São Paulo", "Corinthians", "Flamengo", "Fluminense"];

// Utilizando indexOf()
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem);

// Utilizando o lastIndexOf()
const times2 = ["São Paulo", "Corinthians", "São Paulo", "Flamengo"];

let posicaoItem2 = times2.lastIndexOf("São Paulo");

console.log(times2);
console.log(posicaoItem2);

// Utilizando includes()
let verificaExistenciaItem = times.include("Palmeiras");

console.log(verificaExistenciaItem);




