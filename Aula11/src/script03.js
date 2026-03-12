// Utilizando o this em função

function teste () {
    return console.log(this);    
}

teste();

const carro = {
    marca: "Pagani",
    modelo: "Huayra",
    cor: "Amarelo",
}

let carroArray = Object.values(carro);

let carroArrayString = carroArray.toString();

console.log(carro);