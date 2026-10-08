function calcularMedia(notas) {
    notas.sort((a, b) => b - a);

    let tresMelhores = notas.slice(0, 3);

    let soma = tresMelhores[0] + tresMelhores[1] + tresMelhores[2];

    let media = soma / 3;

    return media;
}

const notas = [5, 8, 9, 3, 10, 7];

let mediaTresMelhores = calcularMedia(notas);

console.log(mediaTresMelhores);