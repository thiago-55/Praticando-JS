const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let modoEscuroAtivo = false;

botao.addEventListener("click", () => {
    if(modoEscuroAtivo === false) {
        corpoPagina.style.backgroundColor = "#1E1E1E"
        corpoPagina.style.color = "#FFFFFF";

        caixa.style.backgroundColor = "#333333";
        caixa.style.border = "1px solid #ffffff";
        caixa.style.borderRadius = "10px"

        botao.style.backgroundColor = "#FFFFFF";
        botao.style.color = "#000000";
        botao.style.border = "none";

        titulo.style.color = "#00FFFF";
        texto.style.color = "#DDDDDD";

        botao.innerText = "Ativar modo claro";

        modoEscuroAtivo = true;
    }

    else {
        corpoPagina.style.backgroundColor ="#FFFFFF";
        corpoPagina.style.color = "#000000";

        caixa.style.backgroundColor = "#F4F4F4";
        caixa.style.border = "1px solid #CCCCCC";
        caixa.style.borderRadius = "10px";

        botao.style.backgroundColor = "#000000";
        botao.style.color = "#FFFFFF";
        botao.style.border = "none";

        titulo.style.color = "#222222";
        texto.style.color = "#333333";

        botao.innerTex = "Ativar modo escuro";

        modoEscuroAtivo = false;
    }
})