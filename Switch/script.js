function contagem(numero){
    for(let num = numero; num <= 10; num++){
        console.log(num);
    }
}

 contagem(5);
 contagem(3);

//======================================================

// OBJETIVO: Calcular a média da nota dos alunos
// Fizeram 2 provas

function media(nota1, nota2){
     const resultadoFinal = (nota1 + nota2) / 2;

     if(resultadoFinal >= 9){
        console.log(`Sua nota foi ${resultadoFinal} MB`);
     }else if(resultadoFinal >= 7 && resultadoFinal < 9){
        console.log(`Sua nota foi ${resultadoFinal} B`);
     }else if(resultadoFinal >= 5 && resultadoFinal < 7){
        console.log(`Sua nota foi ${resultadoFinal} R`);
     }else{
        console.log(`Sua nota foi ${resultadoFinal} I`);
     }
}

media(8, 7);
media(10, 7);
media(10, 10);
media(1, 3);



// SWITCH CASE

let dia = 8;

switch(dia){
    case 0:
        console.log("Hoje é Domingo!");
    break;
    case 1: 
        console.log("Hoje é Segunda-feira");
    break;
    case 2: 
        console.log("Hoje é Terça-feira");
    break;
    case 3: 
        console.log("Hoje é Quarta-feira");
    break;
    case 4: 
        console.log("Hoje é Quinta-feira");
    break;
    case 5: 
        console.log("Hoje é Sexta-feira");
    break;
    case 6: 
        console.log("Hoje é Sabado");
    break;
    default:
        console.log("Nenhum dia");
    break;
}


