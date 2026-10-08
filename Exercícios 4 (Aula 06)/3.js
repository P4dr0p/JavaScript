function verificarIdade(nome = "visitante", idade) {
    if (idade < 0 || idade > 120) {
        alert("Idade inválida!");
    } else if (idade < 18) {
        alert(`Olá, ${nome}! Você é menor de idade.`);
    } else {
        alert(`Olá, ${nome}! Você é maior de idade.`);
    }
}

let continuar = true;

while (continuar) {
    let nome = prompt("Informe o nome:");
    let idade = Number(prompt("Informe a idade:"));

    if (nome === null || nome.trim() === "") {
        nome = "visitante";
    }

    verificarIdade(nome, idade);

    continuar = confirm("Deseja verificar outra idade?");
}