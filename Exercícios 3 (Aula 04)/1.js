let quantidade = Number(prompt("Quantas pessoas deseja analisar?"));
let nome = prompt(`Digite o nome da ${P}ª pessoa:`);
let idade = Number(prompt(`Digite a idade de ${nome}:`));

for (let P = 1; P <= quantidade; P++) {
    if (idade >= 18) {
        console.log(nome, "pode tirar a CNH.");
    } else {
        console.log(nome, "não pode tirar a CNH.");
    }
}