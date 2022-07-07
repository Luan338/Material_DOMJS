// OBJETIVO: Entender como capturar o elemento HTML pelo JAVASCRIPT

// getElementById() -> Pega o elemento pelo id
const texto = document.getElementById("paragrafo");
console.log(texto.innerText);

// getElementsByClassName() -> Pega pela class
const listaAlunos = document.getElementsByClassName("lista");
console.log(listaAlunos[1].style.color = "blue");

// getElementsByTagName() -> Pega pela TAG
const listasGalera = document.getElementsByTagName("ol");
console.log(listasGalera);

const arrayTrue = Array.from(listasGalera);
console.log(arrayTrue);

// SELETOR GERAL ÚNICO
// const titulo = document.querySelector(".title");
// console.log(titulo);

// retorna + 1 elemento
const titulos = document.querySelectorAll(".title");
console.log(titulos);