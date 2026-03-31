const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao-buscar");
const  campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscarCep() {
    const cep = campoCep.value.replace("-","").trim();

    if(cep.length !== 8) {
       alert("CEP inválido!");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`

    // Faz a requisição HTTP para a URL da API
    // busca as informações dentro do Viacep
    fetch(url)
    .then(response => response.json()) // quando a resposta chega, consverte para JSON

    .then(dados => {

        // Verifica se a API retornou um erro (CEP não existe)
        if(dados.erro) {
            alert("CEP não encontrado!");
            limparCampos();
            return; // interrompe a execução 
        }

        // Se der tudo certo, preenche os campos com os dados recebidos 
        preencherCampos(dados);
    })
    // Caso aconteça algum erro na requisição (ex. sem internet)
    .catch(() => {
        alert("Erro ao buscar o CEP.");
    })
}

botaoBuscar.addEventListener("click", buscarCep)