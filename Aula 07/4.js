const numeros = [4, 7, 6, 9, 12, 1, 0];

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);