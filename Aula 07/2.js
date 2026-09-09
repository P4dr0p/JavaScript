const numeros =  [10, 20, 30];

console.log(numeros);

// É dinâmico
numeros[3] = 40;
console.log(numeros);

// Pode conter "buracos"
numeros[5] = 50;
console.log(numeros);

// Pode armazenar diferentes tipos dados
const valores = [10, "Lucas", undefined, null, [], {}, () => {}];
console.log(valores);