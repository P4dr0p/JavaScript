let quantidade = Number(prompt("Quantos clientes foram atendidos?"));
let total = 0;

for (let C = 1; i <= quantidade; C++) {
    let compra = Number(prompt(`Digite o valor da compra do ${C}° cliente:`));

    total = total + compra;
}
console.log(`O total arrecadado pela loja foi: R$ ${total.toFixed(2)}`);