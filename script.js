// VARIÁVEIS - O que são?

// Palavras chave para criar variáveis:
/*
  const
  let
  var 
*/

// CONT -> Quando um valor não pode mudar (+seguro)
const idade = 30; // caixinha idade recebe o valor 30.

// LET -> Quando um valor pode mudar (+ utilizado)
let nome = "Késsia";

// VAR -> Forma antiga de declarar variáveis (evitar usar)
var cidade = "São Caetano do Sul"

// imprimindo os valores
/*
 console.log(idade); // imprimir o valor 30 
 console.log(nome); // imprimir o valor "késsia"
 console.log(cidade); // imprimir o valor "São Caetano do Sul"
*/

// ATERANDO VALORES
/*
 console.log(nome); // antes de alterar o nome
 nome = "Lucas";
 console.log(nome); // depois de alterar o nome

 console.log(idade);
 idade = 25;
 console.log(idade);
*/

/*
 let tamanho; // permite criar variável 
 const cor; // não permite criar variável
*/

// INTERPOLÇÃO
/*
console.log(`Meu nome é ${nome}, tenho $ {idade} anos de idade.`) 
console.log("Juntando nome" + nome + "com idade " + idade)

// TIPOS PRIMITIVOS 

// 1. String (textos em geral)
let mensagem = "Olá mundo!";
console.log(typeof mensagem); // imprime o tipo do dado

// 2. Number (numero -> armazena números inteiros ou deciamais)
let quanridade = 5;   // número inteiro
let temperatura = 36.5;   // número decimal (casas depois da vírgula)
console.log(typeof quantidade)

// 3. Boolean -> true/false (verdadeiro ou falso)
let estaChovendo = true;
let temSol = false;
console.log(typeof temSol)

// 4. Undefined -> variável ainda não recebeu valor
let pedido;
console.log(typeof peedido)

// 5. Null -> usado para representar ausência intencional de valor 
let endereco = null;
console.log(typeof endereco); 
*/

// Conversão Implicita (automática)
/*
console.log("5" + 3);
console.log("5" - 3);

// Conversão Explícita (manual)
let numero = "42";
console.log(typeof numero)

let numeroConvertido = Number (numero); // Converteu para Number 
console.log(typeof numeroConvertido);

// Convverter para string: 
let num = 100;
console.log (typeof num);

let texto = String(num); // converterndo o número para texto 
console.log(typeof texto);

// converter booleano para numero 
let trueConvertido = Number(true); //1
console.log(trueConvertido);

let falseConvertido = Number(false); //0
console.log(falseConvertido);
*/


// OPERACIONAIS RELACIONAIS 
// Servem para comparar valoresz

/*
 > maior que 
 < menor que 
 >= maior ou igual 
 <= menor ou igual 
 == igualdade (ignora o tipo)
 === igualdade (verifica o tipo)
 != diferente (ignora o tipo)
 !== diferente (verifica o tipo)
*/

// exemplos:
console.log(10 > 5);  // true (verdadeiro)
console.log(10 < 5); // false (falso)

// difereça entre == e ===
console.log(5 == "5");   // ignora o tipo
console.log(5 === "5");   // verifica o tipo

// OPERADORES MATEMÁTICOS
// são usados para fazer cálculos - como soma, multiplicação, etc.

/*
 + Soma
 - Subtrsção
 * Multiplicação 
 / Divisão 
 % Resto da divisão
 ** Potência
*/

// exemplos:
let a= 10;
let b= 5; 

console.log(a + b);  // soma       -> 15
console.log(a - b);  // subtrção   -> 5 
console.log(a * b);  // multplicação -> 50
console.log(a / b);  // divisão     -> 2

// exemplos:
// OPERADOR DE RESTO
console.log(10 % 3); // retornar  o resto -> 1 

// OPERADOR DE PÔTENCIA
console.log(2 ** 3); // 2 elevado a 3 -> 2 * 2 * 2