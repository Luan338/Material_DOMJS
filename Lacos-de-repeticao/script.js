// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Laços de Repetição: WHILE LOOP e FOR LOOP

// Operadores de Atribuição
let numero = 7;

numero = numero + 3;
numero += 3; // ADIÇÃO
console.log(numero);

numero -= 8; // SUBTRAÇÃO
console.log(numero);

numero *= 3; // MULTIPLICAÇÃO
console.log(numero);

numero /= 2; // DIVISÃO
console.log(numero);

numero %= 2; // MÓDULO (Resto da divisão)
console.log(numero);

// EXPOENTE
let numero2 = 4;
numero2 **= 2;
console.log(numero2);

// ============================================================

// WHILE LOOP (Enquanto)
let number = 100;
//Dentro do parenteses vai a condição
while( number >= 0 ){
    console.log("O número é:", number);
    number--; // Iteração
}

// ============================================================

// FOR LOOP

// Inicio(Variavel); CONDIÇÃO; ITERAÇÃO
for(let num = 0; num <= 50; num++){
    console.log(`Esse é o nº ${num} com o FOR LOOP`);
}

//Criar um loop que conte todos os números 
//ímpares de 1 até 100 usando for e while

for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log("Números ímpares:", i);
    }
}


