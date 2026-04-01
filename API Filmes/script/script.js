
const campoBusca = document.getElementById("campo-busca");
const listaFilmes = document.getElementById("lista-filmes");

const API_KEY = "b605a85583ac4057349ab91c8f72c575";

const URL_BASE = "https://api.themoviedb.org/3";
const URL_IMAGEM = "https://image.tmdb.org/t/p/w500";

// Mosatrar todos os resultados buscados 
function mostrarResultados(lista) {
    listaFilmes.innerHTML = "";

    lista.forEach(item => {
        // ignora se não tiver imagem 
        if(!item.poster_path) {
            return;
        }

        const titulo = item.title || item.name;
        const nota = item.vote_avarage || "N/A";

        const div = document.createElement("div");
        div.classList.add("filme");

        div.innerHTML = `
          <img src="${URL_IMAGEM + item.poster_path}" alt="${titulo}">
          <div class="info">
           <h3>${titulo}</h3>
           <span> ⭐ ${nota}</span>
          </div>
        `;

        listaFilmes.appendChild(div);
 })
}

// buscar filmes e séries
async function buscarTitulos(termoDigitado) {
    try {
        const reposta = await fetch (
            `${URL_BASE}/search/multi?api_key=${API_KEY}&query=${termoDigitado}&language=pt-BR`
        );

        const dados = await reposta.json();
        mostrarResultados(dados.results);
    }catch (erro){
        console.error("Erro na busca: ", erro);
    }
}

// buscar filemes populares 
async function buscarPopulares(){
    try{
        const reposta = await fetch(
            `${URL_BASE}/movie/popular?api_key=${API_KEY}&languege=pt-BR`
        );

        const dados = await reposta.json();
        mostrarResultados(dados.results);
    } catch (erro) {
        console.error("Erro ao carreagar populares: ", erro);
    }
}

// adicionar evento para carreagr o conteúdo popular assim que a página abrir 
window.addEventListener("load", () => {
    buscarPopulares();
});

// busca em tempo real de filemes e séries
campoBusca.addEventListener("input", () => {
    const termoDigitado = campoBusca.value.trim();

    if(termoDigitado.length >2) {
        buscarTitulos(termoDigitado);
    } else {
        buscarPopulares();
    }
})