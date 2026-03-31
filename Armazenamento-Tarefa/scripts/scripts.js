const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// criando lista vazia 
let tarefas = [];

// função para salvar tarefas
function salvarTarefas() {
    /*
     localStorage -> armazenamento local do navegador 
     setItem -> salva no armazenamento o conteúdo recebido
     JSON.stringinfy(tarefas) -> pega a lista de tarefas, converte para (string) e armazena esse texto.
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// função para mostrar tarefas na tela 
function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++) {

        const li = document.createElement("li");
        li.innerText = tarefas[i]
        
        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.classeName = "botao-remover";

        botaoRemover.addEventListener("click", () =>{
            removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}
/*
let listaTeste = ["fernada", "Guilherme", "Lucas"];

// let i = 0 -> o valor inicial da repetição vai iniciar em zero
// i < listaTeste.lrngth -> validar se o i é menor que tamanho da lista 

for(let i = 0; i < listaTeste.length; i++){
    console.log(listaTeste[i])
}
*/



function removerTarefas(posicaoTarefa) {
   tarefas.splice(posicaoTarefa, 1);
   
   salvarTarefas();

   mostrarTarefas();
}

function adicionarTarefas(){
    const  valorTarefa = inputTarefa.value;

    if(valorTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(valorTarefa);
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if(tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();