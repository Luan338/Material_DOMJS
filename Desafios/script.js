// //1 - Crie uma condição que exiba uma mensagem no console 
// //se a idade for maior que 18
// let idade = 17;

// if(idade >= 18){
//     console.log("Você é maior de idade");
// }else{
//     console.log("Você é menor de idade");
// }

// //2 - Crie uma condição que exiba uma mensagem no console 
// //se você for maior de idade E a condição humana seja true
// let idade2 = 17;
// let condicaoHumana = true;

// if( (idade2 >= 18) && (condicaoHumana) ){
//     console.log("Deu verdadeiro");
// }else{
//     console.log("Deu falso");
// }

// //3 - Criar uma condição que exiba uma mensagem no console se 
// //você fizer aniversário em Janeiro OU Dezembro

// let aniversario = "Setembro";

// if( (aniversario === "Janeiro") || (aniversario === "Dezembro")){
//     console.log(`Faz aniversário em ${aniversario}`);
// }
// else{
//     console.log(`Outra data: ${aniversario}`);
// }

// //*** Exercícios bônus
// //4 - Criar uma condição que exiba uma mensagem no console se seu 
// //nome começar com a letra R
// const _nome = "Gabriel";

// if( _nome.charAt(0) === "R" ){
//     console.log(`Seu nome ${_nome} começa com a letra R`);
// }


// //5 - Criar uma condição que exiba uma mensagem no console se seu 
// //sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

// const sobreNome = "Magalhães";

// if( (sobreNome.length > 6) || (_nome.charAt(0) === "E") ){
//     console.log("Você tem mais de 6 letras ou seu nome começa com a letra E");
// }


// //====================================================================

// // Crie uma variável que receba um nome;
// let nome = "Myllena"; // STRING
// console.log("O nome era:", nome);

// nome = "Mari";
// console.log("O nome é agora:", nome);


// // Crie uma variável que receba um número;
// const numero = 200;
// console.log("Esse número é:", numero);


// // Crie uma variável com o ano atual e subtraia pelo número que você guardou;
// let anoAtual = 2022 - numero;
// console.log("O resultado é:", anoAtual);

// // Agora mostre no console o resultado da soma das duas variáveis 
// //guardadas anteriormente;
// const soma = anoAtual + numero;
// console.log("A soma das duas são:", soma);

// //Mostre no console a mensagem "Estou mexendo no console.log";
// console.log("Estou mexendo no console.log");

// // Crie uma variável chamada “quartaFeira” e atribua à ela o 
// //valor booleano(true ou false) que representa verdadeiro ou falso e mostre 
// //a saída no console;

// let quartaFeira = true;
// console.log("O valor booleano é:", quartaFeira);

// // Exiba no console o tipo de dado da váriavel quartaFeira;
// console.log("O tipo de dado é:", typeof quartaFeira);


//=====================================================================

//*** Exercícios bônus
//4 - Criar uma condição(if e else) que exiba uma mensagem no console SE 
//seu nome começar com a letra R

const nome = "Luan";

if( nome[0] === "R" ){
    console.log("Seu nome começa com a letra R");
}else{
    console.log(`Começa com a letra ${nome[0]}`);
}

//5 - Criar uma condição(IF e ELSE) que exiba uma mensagem no console se 
//seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

const sobreNome = "Fernandes";

if( sobreNome.length >= 6 || nome[0] === "E" ){
    console.log("Deu certo!");
}else{
    console.log("Deu falso");
}