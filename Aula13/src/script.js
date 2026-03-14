// Array global 
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

// Utilizando o método  length()

let tamanhoFrutas = frutas.length;

//frutas.length = 2;


console.log(frutas);

// Utilizando o método toString()
let minhasFrutas = frutas.toString();

console.log(minhasFrutas);

// Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

// Utilizando o método join()
let apresentacaoFrutas = frutas.join(", ");
console.log(apresentacaoFrutas);

// Utilizando método pop()
let removerItemFrutas = frutas.pop();
console.log(frutas);
console.log(removerItemFrutas);

// Utilizando o método push()
let adicionarItemFrutas = frutas.push("limão");
console.log(frutas);
console.log(adicionarItemFrutas)

// Utilizando o método shift()
let deslocarItemsFrutas = frutas.shift();
console.log(frutas)
console.log(deslocarItemsFrutas);

// Utilizando o método unshift()
let deslocarItemsFrutas2 = frutas.unshift("Melão");
console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[0] = "Kiwi";

console.log(frutas);

// Utilizando o length para adicionar items ao array
frutas[frutas.length] = "Laranja";

console.log(frutas);

// Utilozando o método isArray()
console.log(Array.isArray(frutas));

// Utilizando o método delete()
delete frutas[0];
delete frutas[4];
delete frutas[2];

frutas[0] = "Abacate";

console.log(frutas);

// Utilizando o método concat()
const motos = ["Hornet", "Ducati", "Ymaha"];
const carros = ["Gol", "Onix", "Marea"];

const veiculos = motos.concat(carros);

console.log(veiculos);

// Utilizando o copyWithin()
let copiaItems = frutas.copyWithin(2, 0);
console.log(frutas);

// Exemplo de matriz e JavaScript
// const matriz = [
//     [1, 2], 
//     [3, 4],
//     [5, 6]
// ];


const matriz = [[1, 2], [3, 4],[5, 6]];

console.log(matriz[0][0]);

// Exemplo de vetor em JavaScript (array inidimensional)






