//Exemplos de operador de atribuição
let x = 10;

  x = x - 5;
  console.log(x)

  x = x + 5;
console.log(x);

//Exemplos de Aritmética em JavaSript
let soma = 5 + 5 + 4;
console.log(soma);

const primeiroNome = 'Keylla';
const ultimoNome = 'Cristina';

//let nomeCompleto = promeiroNome + ultimoNome;

let nomeCompleto = 'Keylla' + " " + 'Cristina';

console.log(primeiroNome)
console.log(ultimoNome)

//Exemplos de tipos em javaScript 
//String
let cor = 'Azul';
let fruta = 'Laranja';
console.log(cor);
console.log(fruta);

//Number 
let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

// BigInt
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt(12345678901234567890123450);
console.log(bigint);
console.log(bigint2);

// Boolean
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

// Object
const carro = {
    marca: 'Porshe',
    modelo: '911 turbo S',
    cor: 'Ruby Star Neo',
}
console.log(carro);

console.log('A marca do carro é: ' + carro.marca);

// Array
const frutas = ['Laranja', 'Banana', 'Uva', 'Morango', 'Abacaxi'];

console.log(frutas);

// Date object
const data = new Date;

console.log(data);

// Undefined
let indefinido;

console.log(indefinido);

// Null 
let nulo = null;

console.log(nulo);

// Symbol
let y = Symbol();

console.log(y);

// Exemplos de typeof
let stringTipo = "300";
let numberTipo = "300";

// const tipoDado = typeof stringTipo;
const tipodado = typeof numberTipo;

console.log(tipoDado);

// Exemplos de Boolean 
let cinco = 5;
let comparacao = cinco == 8;
console.log(comparacao)


