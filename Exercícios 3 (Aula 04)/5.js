// Em JavaScript
let ph = Number(prompt("Digite o pH da substancia (-1 para encerrar):"));

while (ph !== -1) {
    if (ph < 7) {
        console.log("Substância Ácida");
    } else if (ph > 7) {
        console.log("Substância Básica");
    } else {
        console.log("Substância Neutra");
    }

    ph = Number(prompt("Digite o pH da proxima substancia (-1 para encerrar):"));
}

// Em Portugol

// algoritmo "Classificacao_pH"

// var
//  ph: real

// inicio
//   escreva("Digite o pH da substancia (-1 para encerrar): ")
//   leia(ph)

//   enquanto ph <> -1 faca
//      se ph < 7 entao
//         escreval("Substancia Acida")
//      senao
//         se ph > 7 entao
//            escreval("Substancia Basica")
//         senao
//            escreval("Substancia Neutra")
//         fimse
//      fimse

//      escreva("Digite o pH da proxima substancia (-1 para encerrar): ")
//      leia(ph)
//   fimenquanto

// fimalgoritmo