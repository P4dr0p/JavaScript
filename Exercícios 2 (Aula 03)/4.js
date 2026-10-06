let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

let operacao = Number(prompt(
    "1 - Soma\n" +
    "2 - Subtração\n" +
    "3 - Multiplicação\n" +
    "4 - Divisão\n" +
    "Escolha uma operação:"
))

switch (operacao) {

    case 1:
    console.log("Resultado da soma:", numero1 + numero2)
    break

    case 2:
    console.log("Resultado da subtração:", numero1 - numero2)
    break

    case 3:
    console.log("Resultado da multiplicação:", numero1 * numero2)
    break

    case 4:
    console.log("Resultado da divisão:", numero1 / numero2)
    break

    default:
        console.log("Operação inválida")
}