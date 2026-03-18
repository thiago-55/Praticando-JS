

// IF        -> SE (se chover......)
// ELSE      -> SENÃO (senão......)
// ELSE IF    -> SENÃO SE
// SWITCH     -> SWITCH (como se fosse um menu de opções)
/*
let nome = prompt("Digite seu nome:" );
console.log = (nome);
*/
// Exemplos:
// 1. Sistema de verificação de temperatura
/*
let temperatura = Number(prompt("Digite a temperatura atual:"));

if(temperatura <20) {
    console.log("Está frio!");
} else {
    console.log("Está calor!");
}
*/
// 2. Veririficar o nível da bateria
/*
let bateria = Number (prompt("Digite o nível da bateria (%)"));

if(bateria <=30) {
    alert ("Bateria fraca!");
} 
else {
    alert ("Bateria carregada!");
}
*/
// 3. Sistema de acessso
/*
let tipoUsuario = prompt("Digite o tipo do usuário (admin, cliente):");

if (tipoUsuario == "admin") {
    console.log("Acesso total ao sitema.");

} else if (tipoUsuario == "cliente")
{
      console.log("Acesso limitado.");
}  
else {
    console.log("Tipo inválido!");
}   
*/
// 4.
/*
let velociade = Number (prompt( "Digite a veolocidade da internet"));

if(velocidade >=100){
    console.log ("Internet rápida.")
}
else if (velocidade >=50) {
    console.log("Internet é média.");
}
else{
    console.log("Internet lenta.");
}

// OPERADORES LÓGICOS
/*
 AND -> && -> OPERADOR E
 OR -> || -> OPERADOR OU
 NOOT -> ! -> NÃO (negação)
*/

/*
let operadorAnd = (5 > 3) && ( 2 < 4)
// 5 é maior que 3? true
// 2 é menor que 4? true
/*
console.log(operadorAnd); // true


let.operadorOu (5 < 3) || (2 < 4);


console.log(operadorOu);
*/
// NOT - NÃO
/*
let operadorNao = !(5 > 3)

console.log(operadorNao);
*/
// Usando o sinal de exclamação para negar e validar diferença
/*
let diferent = !(5 !=3) //true


console.log(diferente);
*/

// 5. Analisar volume de itens 
/*
let quantidade = 10;

if (quantidade === 0) {
    console.log("Nenhum item selecionado");
}
else if (quantidade < 5){
    console.log("Poucos itens");
}

else if(quantidae >= 5 && quantidade < 10) {
    console.log("Quantidade media de itens");
}


else {
    console.log("MUitos itens");
}
*/ 

// CONDICIONAL ANINHADA
/*

const nota = 8;

if (nota >= 7) {
    if (nota === 10) {
     console.log("Aprovado com premiação.")
    }
} 
else {
    console.log("Aprovado!");
}
 else {
    console.log("Reprovado!")
 }   
*/
// 7.
/*
let dispositivo = prompt("Você está usandp: celular, tablet ou computador");

if(dispositivo == "celular" || dispositivo == tablet ) {
    console.log("Modo mobile foi ativado.");
}
else if (dispositivio == "computador") {
    console.log("Modo desktop ativado");
}
else {
    console . log("Dispositivo desconhecido.");
}
*/


//8.
switch (tema) {
    case "claro":
        console.log("Tema claro ativado.");
        break;
    case "escuro":
        console.log("Tema escuro ativado");
        break
    case "azul":
     console.log("Tema auzl ativado.");
     break;
    default:
        console.log("Tema inválido.");
        
}

 