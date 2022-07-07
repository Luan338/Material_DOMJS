// Condicionais IF e ELSE
// Verifica se uma expressão é verdadeira com IF, ou false com o ELSE

let idade = 18;

if(idade >= 18){
    console.log("Você é maior de idade");
}
else{
  console.log("Você é menor de idade");  
}

//==================================================================

// let maiorIdade = false;
// let estudandoProgramacao = true;

// if(maiorIdade){
//     console.log("Você é maior de idade");
//     console.log("Teste");
// }

// else if(estudandoProgramacao){
//     console.log("Estuda programação");
// }

// else{
//     console.log("Nenhuma das opções");
// }

//==================================================================

// Operador Lógico de Negação
// Operador lógico ! nega uma operação booleana
// let teste = false;
// console.log(!teste);

//==================================================================

//Operadores de Comparação
//Vão sempre retornar um valor booleano

// let verificar = 15 < 7; // < (menor que)
// let verificar = 15 > 7; // > (maior que)
// let verificar = 15 >= 15; >= (maior ou igual)
// let verificar = 15 <= 14; <= (menor ou igual)

//Verifica se é igual ==
//Verifica se é estritamente igual ===

// let verificar = 4 == "4"; // == verificar se o valor é igual
// let verificar = 4 === "4"; // === verificar se o valor é igual e se o tipo de dado é igual

// let verificar = 5 !== -5; // != DIFERENTE / !== Estritamente diferente 

//==================================================================

//Operadores lógicos &&: Compara se uma expressão E a outra é verdadeira

// let idade = 18;
// let corRoupa = "Preto";

// if((idade >= 18) && (corRoupa === "Preto")){
//     console.log("Você pode entrar na festa");
// }else{
//     console.log("Você foi barrado ou barrada!");
// }

//Operadores lógicos ||: Compara se uma expressão OU a outra é verdadeira

// let idade = 22;
// let corRoupa = "Branco";

// if((idade >= 18) || (corRoupa === "Preto")){
//     console.log("Você pode entrar na festa");
// }else{
//     console.log("Você foi barrado ou barrada!");
// }