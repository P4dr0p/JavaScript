// Função Padrão
function somar(n1, n2) {
    return n1 + n2;
}

let soma = somar(2, 3);

// Função Anônimo (sem nome)
const subtrair = function(n1, n2) {
    return n1 - n2;
}

let diferenca = subtrair(5, 3);

// Função de Seta (arrow function)
const multiplicar = (n1, n2) => {
    return n1 * n2;
}

let produto = multiplicar(3, 5);

// Função de Alta Ordem (callback)
function calcular(n1, n2, operacao) {
    return operacao(n1, n2);
}

let res1 = calcular(5, 4, somar);
let res2 = calcular(10, 3, subtrair);
let res3 = calcular(3, 5, multiplicar);

console.log(res1);
console.log(res2);
console.log(res3);