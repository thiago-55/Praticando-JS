const botaoAdiconar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");

botaoAdiconar.addEventListener("click", () => {
    const li = document.createElement("li");

    const texto = document.createElement("p");
    texto.innerText = "Novo item";

    const botaoLixeira = document.createElement("button");
    botaoLixeira.innerText = "🗑️"; 

    botaoLixeira.style.border = "none";
    botaoLixeira.style.cursor = "pointer";
    botaoLixeira.style.backgroundColor = "none"

    botaoLixeira.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(texto);
    li.appendChild(botaoLixeira);

    lista.appendChild(li);

})