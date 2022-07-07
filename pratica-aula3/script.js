// DESESTRUTURAÇÃO
//       0        1    
const [input0, input1] = document.querySelectorAll("input");
const botao = document.querySelector("button");
const imagem = document.querySelector(".img-patrick");


function mudanca(){
            
    if(input0.value && input1.value.length >= 8){
        botao.removeAttribute("disabled");

        // ADICONANDO UMA CLASS
        imagem.classList.add("ativo");

    }else{
        //                (nome      ,   valor)
        botao.setAttribute("disabled", "disabled");
        imagem.classList.remove("ativo");
    }

}

// Método utilizado para adicionarmos um evento
//                       (evento, função)
input1.addEventListener("input", mudanca);


// BÔNUS

const body = document.body;

function corDeFundo(event){
    if(event.key === "b"){
        body.classList.toggle("corFundo");
    }
}


addEventListener("keydown", corDeFundo);

