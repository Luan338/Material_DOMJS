// FUNÇÕES COM JAVASCRIPT
// Bloco de código que pode ser reutilizado e executado.

function mostrarMensagem(){
    console.log("Primeira aula com Função!");
}
//Aqui estamos ativando a função
mostrarMensagem();

//========================================================================
function soma(numero1, numero2){
    return numero1 + numero2;
}
soma(10, 2);
soma(20, 3);
soma(5, 12);

//========================================================================

// PARÂMETRO
function dobro(numero){
    return numero * 2;
}

// ARGUMENTO
console.log(dobro(10));
console.log(dobro(30));

//========================================================================

function areaQuadrado(lado){
    return lado * lado;
}

const resultado = areaQuadrado(100);
const resultado2 = areaQuadrado(350);

console.log("A área² é de: ", resultado, "m²");
console.log("A área² é de: ", resultado2, "m²");

//========================================================================

// CALCULAR IMC => peso / (altura²)

function imc(peso, altura){
    return peso / (altura ** 2);
}

//ATIVAR
const Result = imc(62, 1.65);
const Result2 = imc(100, 1.95);

console.log("O resultado do IMC é:", Result);
console.log("O resultado do IMC é:", Result2);

