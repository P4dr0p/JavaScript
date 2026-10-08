let quantidade = Number(prompt("Quantos clientes deseja cadastrar?"));

let total = 0;

let anunciosRadio = 0;
let anunciosTV = 0;
let anunciosRevista = 0;
let anunciosOutdoor = 0;

for (let i = 1; i <= quantidade; i++) {
    let midia = prompt(
        `Cliente ${i}\nTipo de midia (radio/tv/revista/outdoor):`
    ).toLowerCase();

    if (midia === "radio") {
        let faixa = prompt("Faixa (AM/FM):").toUpperCase();

        anunciosRadio++;

        if (faixa === "FM") {
            total += 500;
        } else if (faixa === "AM") {
            total += 300;
        } else {
            console.log("Faixa inválida. O anúncio não será cobrado.");
            anunciosRadio--;
        }

    } else if (midia === "tv") {
        let horario = Number(prompt("Horario de exibicao:"));

        anunciosTV++;

        if (horario <= 20) {
            total += 1200;
        } else {
            total += 2000;
        }

    } else if (midia === "revista") {
        total += 750;
        anunciosRevista++;

    } else if (midia === "outdoor") {
        total += 1500;
        anunciosOutdoor++;

    } else {
        console.log("Tipo de midia invalido.");
    }
}

console.log("Valor total arrecadado: R$ " + total.toFixed(2));

console.log("Anuncios de Radio:", anunciosRadio);
console.log("Anuncios de TV:", anunciosTV);
console.log("Anuncios de Revista:", anunciosRevista);
console.log("Anuncios de Outdoor:", anunciosOutdoor);