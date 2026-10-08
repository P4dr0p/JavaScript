let positivos = 0;
let negativos = 0;
let numero = Number(prompt("Digite um numero inteiro (0 para encerrar):"));

while (numero !== 0) {
    if (numero > 0) {
        positivos++;
    } else {
        negativos++;
    }

    numero = Number(prompt("Digite outro numero inteiro (0 para encerrar):"));
}

console.log("Quantidade de números positivos:", positivos);
console.log("Quantidade de números negativos:", negativos);