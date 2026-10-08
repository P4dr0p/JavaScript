function gerenciarTarefas(tarefas, acao, novaTarefa) {
    if (acao === "adicionarInicio") {
        tarefas.unshift(novaTarefa);
    } else if (acao === "adicionarFim") {
        tarefas.push(novaTarefa);
    } else if (acao === "removerInicio") {
        tarefas.shift();
    } else if (acao === "removerFim") {
        tarefas.pop();
    } else {
        console.log("Ação inválida!");
    }
}

const tarefas = ["Estudar", "Treinar", "Ler"];

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");

console.log(tarefas);