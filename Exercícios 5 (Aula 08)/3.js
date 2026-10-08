function somarNumeros(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0 && numeros[i] !== 0) {
            soma += numeros[i];
        }
    }

    return soma;
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

let soma = somarNumeros(numeros);

console.log(soma);