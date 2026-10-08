function desconto10(valor) {
    let valorFinal = valor * 0.90;
    return `O produto recebeu 10% de desconto e agora custa R$ ${valorFinal.toFixed(2)}.`;
}

function desconto20(valor) {
    let valorFinal = valor * 0.80;
    return `O produto recebeu 20% de desconto e agora custa R$ ${valorFinal.toFixed(2)}.`;
}

function desconto30(valor) {
    let valorFinal = valor * 0.70;
    return `O produto recebeu 30% de desconto e agora custa R$ ${valorFinal.toFixed(2)}.`;
}

function aplicarDesconto(valor, funcaoDesconto) {
    return funcaoDesconto(valor);
}

let valorProduto = Number(prompt("Informe o valor do produto:"));

let resultado;

if (valorProduto <= 100) {
    resultado = aplicarDesconto(valorProduto, desconto10);
} else if (valorProduto <= 500) {
    resultado = aplicarDesconto(valorProduto, desconto20);
} else {
    resultado = aplicarDesconto(valorProduto, desconto30);
}

alert(resultado);