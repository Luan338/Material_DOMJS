// // ARRAY -> Serve para armazenar diferentes valores em um local

// //            0   ,    1    ,     2
// let nome = ["Rian", "Welder", "Felipe"];

// for(let contador = 0; contador < nome.length; contador++){
//     console.log(`Index ${contador} | nome: ${nome[contador]}`);
// }
// console.log("");
// console.log("=======================================================");
// console.log("");

// //===============================================================

// // MÉTODOS DO ARRAY

// let alunos = ["Felipe", "Isabel", "Welder", "Rafael", "Cosme"];
// console.log(alunos);

// // SORT() -> Ordenar um array em ordem numerica ou alfabetica
// alunos.sort();
// console.log("Organizando em ordem alfabetica:", alunos);

// // let numeros = [22, 13, 338, 3200, 8, 17];
// // console.log(numeros);

// // numeros.sort(function(a, b){
// //     return a - b;
// // });

// // console.log(numeros);


// // UNSHIFT() -> Adiciona no começo da lista
// alunos.unshift("Luan", "Myllena");
// console.log("Adicionei no começo:", alunos);

// // SHIFT() -> Remove do começo da lista
// alunos.shift();
// console.log("Remove no começo:", alunos);

// // PUSH() -> Adiciona no final da lista
// alunos.push("Denilson", "Rebeca");
// console.log("Adiciona no final:", alunos);

// // POP() -> Remove o último da lista
// alunos.pop();
// console.log("Remove do final:", alunos);

// // SPLICE() -> Remove, adiciona e substitui

// // REMOVENDO
//         // POSIÇÃO, QUANTIDADE
// alunos.splice(0, 3);
// console.log("Os que sobraram:", alunos);

// // SUBSTITUINDO
// alunos.splice(1, 2, "Cosme", "Ricardo", "Rayenne");

// // ADICIONANDO
// alunos.splice(1, 0, "Luccas");

// console.log("Resultado final da galera:", alunos);

// //====================================================================

// // OBJETO -> CONJUNTO de variaveis e funções, são chamados de metodos e
// //propriedades

// // ESTRUTURA DO OBJETO
// // let teste = {
// //     chave: valor
// // }

// console.log("");
// console.log("=====================================");
// console.log("AQUI COMEÇA NOSSO OBJETO");


// let pessoa = {
//     nome: "Luan",
//     idade: 22,
//     cursaFaculdade: true,
// }

// pessoa.time = "Flamengo"

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);

// let alunosNoite = [
//     {
//         nome: "Felipe",
//         tecnologias: ["html", "css", "JavaScript"]
//     }, 
//     {
//         nome: "Laysa",
//         tecnologias: ["html", "css", "JavaScript", "Git", "React"]
//     }
// ];

// console.log("ALUNOS NOITE:", alunosNoite[0].tecnologias[1]);

// alunosNoite[1].time = "Corinthians"

// console.log(alunosNoite[1]);

//                 0        1         2         3        4          5
const nomes = ["Helena", "Miguel", "Alice", "Heitor", "Laura", "Manuela"];

//          REMOVE O PRIMEIRO // DESESTRUTURAÇÃO
const pessoas = nomes.slice(3, -1)

console.log(pessoas);



