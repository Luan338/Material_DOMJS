// // Crie um array que receba 5 itens e exiba no console.
//                 //     0           1       2       3           4
// let tecnologias = ["JavaScript", "HTML", "CSS", "REACT", "TypeScript"];

// console.log(tecnologias);

// // Utilize um método para adicionar um nome ao inicio do array.
// tecnologias.unshift("NextJS");
// console.log(tecnologias);

// // Utilize um método para remover o último nome do array.
// tecnologias.pop();
// console.log(tecnologias);

// // Utilize um método para adicionar dois nomes ao fim do array.
// tecnologias.push("Java", "SasS");
// console.log(tecnologias);

// // Utilize um método para remover o primeiro nome do array.
// tecnologias.shift();
// console.log(tecnologias);

// // Utilize um método para organizar em ordem crescente o seguinte array:
// let numeros = [222, 132, 7, 2, 3, 512];

// numeros.sort(function(a, b){
//     return a - b
// })

// console.log(numeros);

// console.log("");
// console.log("==============================================");
// console.log("");


// // ATIVIDADE 06

// // Crie um objeto que receba ao menos três propriedades sobre você.

// let sobreMim = {
//     nome: "Luan",
//     idade: 22,
//     cursaFaculdade: true
// }

// // Adicione uma nova propriedade sem alterar seu objeto inicial.
// sobreMim.time = "Flamengo";
// console.log(sobreMim);

// // Remova uma propriedade desse objeto.
// delete sobreMim.idade;
// console.log(sobreMim);


// //Mostre no console todas as propriedades desse objeto.
// console.log(sobreMim);

// // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone,
// // amigos. 
// //Na propriedade amigos, adicione ao menos 4 itens.

// const cadastro = [
//     {
//         nome: "Welder",
//         idade: 30,
//         telefone: 2131231,
//         amigos: ["Mari", "Cosme", "Felipe", "Gabriel"]
//     }, 
//     {
//         nome: "Mari",
//         idade: 18,
//         telefone: 321313,
//         amigos: ["Luis", "Mari", "Mari", "Myllena"]
//     }, 
//     {
//         nome: "Luis",
//         idade: 19,
//         telefone: 2312313,
//         amigos: ["Rian", "Luan", "Isabel", "Mari"]
//     }, 
//     {
//         nome: "Rian",
//         idade: 53,
//         telefone: 3141242,
//         amigos: ["Gabriel", "Luis", "Luan", "Isabel"]
//     }, 
//     {
//         nome: "Gabriel",
//         idade: 56.5,
//         telefone: 123131,
//         amigos: ["Luan", "Cosme", "Welder", "Felipe"]
//     },
//     {
//         nome: "Ricardo",
//         idade: 22,
//         telefone: 312312,
//         amigos: ["Maria", "Rafael", "Izaias", "Felipe"]
//     }
// ];


// // Mostre no console o nome de um amigo de cada lista.
// console.log(cadastro[0].amigos[0]);
// console.log(cadastro[1].amigos[0]);
// console.log(cadastro[2].amigos[0]);
// console.log(cadastro[3].amigos[0]);
// console.log(cadastro[4].amigos[0]);
// console.log(cadastro[5].amigos[0]);


// for(let contador = 0; contador < cadastro.length; contador++){
//     const resultado = cadastro[contador].amigos[0]
//     console.log("Feito com o for:", resultado)
// }



// DOM (Document Object Model)
// window.alert("Bem vindos (as)");

// const nome = window.prompt("Digite seu nome:");

// window.alert(`Boa noite, ${nome}`);

document.body.style.backgroundColor = "purple";

