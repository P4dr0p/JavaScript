let idade = Number(prompt("Qual a sua idade?"))

if (idade >= 65) {
    console.log("Você é um idoso.")
} else if (idade >= 18) {
    console.log("Você é um adulto.")
} else if (idade >= 13) {
    console.log("você é um adolescente.")
} else {
    console.log("você é uma criança.")
}