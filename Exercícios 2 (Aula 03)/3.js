let peso = Number(prompt("Digite o seu peso(em KG):"))
let altura = Number(prompt("Digite a sua altura (em metros):"))

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc < 25) {
    console.log("Peso normal")
}
else if (imc < 30) {
    console.log("Sobrepeso")
}
else if (imc < 35) {
    console.log("Obesidade grau 1")
}
else if (imc < 40) {
    console.log("Obesidade grau 2")
}
else {
    console.log("Obesidade grau 3")
}
console.log("Seu IMC é: " + imc.toFixed(2))