const produtosMock = {
    "101": { nome: "Teclado Mecânico RGB", preco: 250.00, categoria: "Periféricos", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop" },
    "102": { nome: "Mouse Gamer 12000 DPI", preco: 120.00, categoria: "Periféricos", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&h=400&auto=format&fit=crop" },
    "103": { nome: "Monitor 24' 144Hz", preco: 1100.00, categoria: "Monitores", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop" },    
    "104": { nome: "Headset 7.1 Surround", preco: 350.00, categoria: "Áudio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
};

const inputCodigo = document.getElementById("inputCodigo");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpar = document.getElementById("btnLimpar");
const resultadoDiv = document.getElementById("resultado");
const msgErro = document.getElementById("mensagemErro");

const elNome = document.getElementById("prodNome");
const elPreco = document.getElementById("prodPreco");
const elCategoria = document.getElementById("prodCategoria");
const elImg = document.getElementById("prodImagem");

function buscarProduto() {
    const codigo = inputCodigo.value.trim();
    
    limparCampos();

    if (codigo === "") {
        exibirErro("Por favor, digite um código.");
        return;
    }

    const produto = produtosMock[codigo];

    if (produto) {
    
        elNome.innerText = produto.nome;
        elPreco.innerText = produto.preco.toFixed(2);
        elCategoria.innerText = produto.categoria;
        elImg.src = produto.img;
        elImg.alt = produto.nome;
        
        resultadoDiv.classList.remove("hidden");
        msgErro.classList.add("hidden");
    } else {
        exibirErro("Produto não encontrado.");
    }
}

function exibirErro(mensagem) {
    msgErro.innerText = mensagem;
    msgErro.classList.remove("hidden");
    resultadoDiv.classList.add("hidden");
}

function limparCampos() {
    if (inputCodigo.value === "") {
        resultadoDiv.classList.add("hidden");
    }
    msgErro.classList.add('hidden');
}

btnBuscar.addEventListener("click", buscarProduto);

btnLimpar.addEventListener("click", () => {
    inputCodigo.value = "";
    resultadoDiv.classList.add("hidden");
    msgErro.classList.add("hidden");
});

inputCodigo.addEventListener("input", () => {
    if (inputCodigo.value.length >= 2) {
        buscarProduto();
    }
});