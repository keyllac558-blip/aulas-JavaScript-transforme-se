// Utilizando o operador in
const pessoa = {
    primeiroNome: "Keylla",
    ultimoNome: "Silva",
    idade: 18,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados

const pessoa2 = {
    primeiroNome: "Isabelly",
    segundoNome: "Vitória",
    carros: {
        carro1: "Posche",
        carro2: "Volkswagen", 
        carro3: "Audi",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield",
    },
}

    let propriedadeMoto = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos[propriedadeMoto]);