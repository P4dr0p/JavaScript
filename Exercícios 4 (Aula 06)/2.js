function volumeEsfera(raio) {
    let pi = 3.1416;
    let volume = (4 * pi * raio ** 3) / 3;
    
    return volume;
}

let raio1 = Number(prompt("Informe o raio da 1ª esfera:"));
let raio2 = Number(prompt("Informe o raio da 2ª esfera:"));
let raio3 = Number(prompt("Informe o raio da 3ª esfera:"));

let volume1 = volumeEsfera(raio1);
let volume2 = volumeEsfera(raio2);
let volume3 = volumeEsfera(raio3);

console.log("Volume da 1ª esfera:", volume1.toFixed(4));
console.log("Volume da 2ª esfera:", volume2.toFixed(4));
console.log("Volume da 3ª esfera:", volume3.toFixed(4));