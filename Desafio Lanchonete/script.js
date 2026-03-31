
/*const inputPedidos = document.getElementById("input-pedios");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaPedidos = document.getElementById("lista-pedidos");

let pedidos = [];

function salvarPedidos() {
    
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}


function mostrarPedidos() {
    listaPedidos.innerText = "";

    for(let i = 0; i < pedidos.length; i++) {

        const li = document.createElement("li");
        li.innerText = pedidos[i]
        
        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.classeName = "botao-remover";

        botaoRemover.addEventListener("click", () =>{
            removerPedidos(i);
        })

        li.appendChild(botaoRemover);
        listaPedidos.appendChild(li);
    }
}


function removerPedidos(posicaoPedidos) {
   pedidos.splice(posicaoPedidos, 1);
   
   salvarPedidos();

   mostrarPedidos();
}

function adicionarTarefas(){
    const  valorPedidos = inputPedidos.value;

    if(valorPedidos === "") {
        alert("Digite o Pedido!");
        return;
    }

    tarefas.push(valorPedidos);
    inputPedidos.value = "";

    salvarPedidos();
    mostrarPedidos();
}

function carregarPedidos() {
    const pedidosSalvas = localStorage.getItem("pedidos");

    if(pedidosSalvas) {
        pedidos = JSON.parse(pedidosSalvas);
        mostrarPedidos();
    }
}

botaoAdicionar.addEventListener("click", adicionarPedidos);
carregarPedidos();

*/
/*
document.createElement("li")
element.innerText= 
element.appendChild()

li.remove()

li.style.textDecoration="line-through"

const primeiro = lista.firstChild
primeiro.remove()

pedidoAtual.innerText = "Atendendo: " + texto

if(input.value === "") {
		return;
}
*/
/*
function adicionarPedido() {
    const texto = input.value;

    if (texto === "") return;

    const li = document.createElement("li");
    li.innerText = texto;

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        pedidoAtual.innerText = "Atendendo: " + texto;
    });

    lista.appendChild(li);
    input.value = ""; 
}

botaoAdicionar.addEventListener("click", adicionarPedidos);
carregarPedidos("");
*/
/*
const input = document.querySelector("#inputPedido");
const lista = document.querySelector("#listaPedidos");
const pedidoAtual = document.querySelector("#pedidoAtual");

function adicionarPedido() {
    const texto = input.value;

    if (texto === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerText = texto;

    lista.appendChild(li);

    input.value = "";

    li.onclick = function() {
        atenderPedido(li, texto);
    };
}

function atenderPedido(elemento, texto) {
    
    pedidoAtual.innerText = "Atendendo: " + texto;

    elemento.style.textDecoration = "line-through";

    setTimeout(() => {
        elemento.remove();
    }, 2000);
}

function removerPrimeiroDaFila() {

    const primeiro = lista.firstElementChild;
    if (primeiro) {
        primeiro.remove();
    }
}
*/

const inputPedido = document.getElementById("inputPedido");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");

let pedidos = []

const dados = localStorage.getItem("pediods");

if(dados) {
    pedidos = JSON.parse(dados);
    console.log("dados", dados)
    console.log("pedidos", pedidos)
    renderizar();

}

function salvar() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
} 

function renderizar() {
    listaPedidos.innerHTML = "";

    pedidos.forEach((pedido, posicao) => {
        const li = document.createElement("li");
        li.innerText = pedido.texto;

        if(pedido.concluido) {
            li.style.textDecoration = "line-through"
        }

        li.addEventListener("click", () => {
            li.style.textDecoration = "line-through"

        })

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "❌";

        btnRemover.addEventListener("click", () => {
            console.log(pedido)
            pedidos.splice(posicao, 1);
            salvar();
            renderizar();
        })

        li.appendChild(btnRemover);
        listaPedidos.appendChild(li);
    })
}

btnAdicionar.addEventListener("click", () => {
    const textoDigitado = inputPedido.value;

    if(textoDigitado === "") {
        alert("Digite um pedido!");
        return;
    }

    pedidos.push({
        texto: textoDigitado, 
        concluido: false 
    });
   /*console.log(pedidos)*/
 salvar();
 renderizar();

    pedidoAtual.innerText = "Nenhum pedido sendo atendido";
    inputPedido.value = "";
})

btnAtender.addEventListener("click", () => {
    const proximo = pedidos.find(pedido => pedido.concluido ==false);
    
    if(!proiximo) {
        pedidoAtual.innerText = "Todos os pedidos já foram atendidos";
        return;
    }

    proximo.concluido = true;

    pedidoAtual.innerText = "Atendido: " + proximo.texto;

    salvar();
    renderizar();
})