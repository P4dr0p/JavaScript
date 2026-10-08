function calculaMulta(velocidade) {
    if (velocidade <= 50) {
        return 0;
    } else if (velocidade <= 55) {
        return 230;
    } else if (velocidade <= 60) {
        return 340;
    } else {
        return (velocidade - 50) * 19.28;
    }
}

let velocidade = Number(prompt("Informe a velocidade do motorista (km/h):"));
let multa = calculaMulta(velocidade);

if (multa === 0) {
    console.log("O motorista não deve pagar multa.");
} else {
    console.log(`O motorista deve pagar R$ ${multa.toFixed(2).replace(".", ",")} de multa.`);
}