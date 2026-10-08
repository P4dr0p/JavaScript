let quantidade = Number(prompt("Quantos numeros voce vai digitar?"));
let maiorNumero;
let menorNumero;

for (let N = 1; i <= quantidade; N++) {
    let numero = Number(prompt(`Digite o ${N}° numero:`));

    if (i === 1) {
        maiorNumero = numero;
        menorNumero = numero;
    } else {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }

        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
}
console.log(`O maior numero digitado foi ${maiorNumero}`);
console.log(`O menor numero digitado foi ${menorNumero}`);