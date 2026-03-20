/*
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(num) {
    return num *2;
});

console.log(numerosDobrados);

// Mesma função, mas agora com arrow function
let numerosDobradosArrow = numeros.map(num => numero * 2);
console.log(numerosDobrados);

// quando precisamos usar o return?
// quando a função 
numeros.map(num => {
    let resultado = num * 2;
    return resultado;
})

*/

/*
// FILTER -> Filtra os elementos de uma lista de uma lista com base em uma condição 
let numeros = [5, 10, 15, 20]

let maioresQueDez = numeros.filter(num => num > 10);

console.log(maioresQueDez); 
*/

/*
// REDUCE -> Reduz os valores de um array(lista) para uma único valor.
let numeros = [1, 2, 3, 4];

// Acumulador auxiliar se chama total 
// Variavel auxiliar se chama num
// Esse 0 é o valor inicial do acumulador(total)

// reduce(acumulador, auxiliar)
let soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma);
*/

/*
// FIND -> Retorna o primeiro elemento que atenda a condição.
let produtos = [ {
    id: 1, nome: "Teclado" , preco: 50 },
    {id: 2, nome: "Mouse", preco: 30}
]


let item = produtos.find(produto => produto.id === 2);
console.log(item);
*/

/*
// SLIPT -> Divide uma strimg em partes, transformando em uma lista

let frase = "JS é muito bom!!";

// criando um array de palavras usando split
let palavras = frase.split(" ");

console.log(palavras)
*/

/*
// TRIM -> remove espaços mo inicio e final de de uma string
let nome = "   João   ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);
*/

/*
// INCLUDES -> Verifica se existe um valor dentro de uma lista ou string
let frutas = ["maçã", "banana"];

let frutasIncludes = frutas.includes("banana");
console.log(frutasIncludes); // true (verdaderio)
*/

/*
// toLowerCase -> Transforma texto em minusculo
// toUpperCase -> Transforma texto em maisculo

let nome = "THIAGO";
let cargo = "instrutora";

console.log(nome.toLowerCase());
console.log(cargo.toUpperCase());
*/

/*
// FOREACH
let nomes =["Pedro", "João", "Guilherme"];

nomes.forEach(nome => console.log("Seu nome é: ", nome));
*/


/*
// SOME -> Verifica se pelo menos um item atende a condição
let numeros = [1, 3, 5, 5];

let temPar = numeros.some(num => num % 2 === 0);

console.log(temPar); // true (verdadeiro)

*/

/*
// EVERY -> Verifica se todos os elementos atende a condição
let numeros = [1, 3, 5, 5];

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);
*/

/*
// SORT -> Ordena os elementos do array
let numeros = [3, 5, 2, 4]

numeros.sort((a,b) => a - b);
console.log(numeros); // [2, 3, 4, 5]

*/

/*
// REVERSE -> Inverte a ordem de um array(lista)
let numeros = [1, 2, 3];

numeros.reverse();
console.log(numeros);
*/

/*

// JOIN -> junta os elemntos de um array em uma string
let palavras = ["JS", "é", "muito", "bom"];

let frase = palavras.join(" ");
console.log(frase);

*/

/*

// PUSH -> Adiciona elementos no final do array(lista
//pop -> Remove elementos no final do array(lista)
let lista = ["A", "B"];

lista.push("C"); // adiciona
lista.pop(); // remove
console.log(lista);

*/

/*

// SHIFT -> remove do inicio da array(lista)
// UNSHIFT -> adiciona no inicio 
let lista = ["B", "C"];

lista.unshift("A"); // adiciona
lista.shift();   // remove

console.log(lista);
*/

// SLICE -> Cria uma cópia de uma parte da lista
/*
 array.slice(inicial, final)

 inicial -> onde começa
 fina -> onde para (não inclui a posição(indice ou index))
*/

/*
let numeros = [1, 2, 3, 4];
let parte = numeros.slice(1, 3);

console.log(parte);
*/

// SPLICE -> Rrmove ou adiciona elementos em qualquer posição
/* 
 array.splice(index, count, item1, ..., itemX)

 index -> indice
 count -> númeoro de itens a serem removidos (pode ser 0)
 item1, item2 ... -> itens a serem adicionados 
*/

/*

// removendo elementos, sem adicionar 
let numeros = [1, 2, 3, 4]

numeros.splice(1, 1);
console.log(numeros); 

// removendo elementos e adcionando mais dois elementos
let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

frutas.splice(0, 1, "Limão" , "Kiwi");
console.log(frutas);

// adicionando
let frutasNovas = ["Banana", "Laranja", "Maçã", "Manga"];

frutas.splice(2, 0, "Limão" , "Kiwi");
console.log(frutasNovas);
*/

/*

// REPLACE -> Substitui uma parte da string 
let texto = "Olá mundo !";

let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);

*/

let textoP = document.getElementById("texto"); 

let saudacao = prompt("Digite a saudação: ");

if(saudacao == "Bom dia") {
    textoP.textContent = saudacao;
}else{
  textoP.textContent = "SEXTOUUUU";
}
   
