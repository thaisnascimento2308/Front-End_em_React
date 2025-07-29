const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

botaoAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  botaoAumentar.classList.add("btn");
  botaoDiminuir.classList.remove("btn");
});

botaoDiminuir.addEventListener("click", (event) => {
  const valorAtual2 = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual2 - 1;

  botaoDiminuir.classList.add("btn");
  botaoAumentar.classList.remove("btn");
});

input.addEventListener("input", (event) => {
  console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "1px solid #AAA";
contadorElemento.style.width = "150px";

// Manipular classes
console.log(botaoDiminuir.classList);

  // botaoAumentar.classList.add("btn");
  // botaoDiminuir.classList.remove("btn");

  const themeButton = document.querySelector("#theme");

  let darkTheme = false;

  themeButton.addEventListener("click", (event) => {
    darkTheme = !darkTheme;

    const body = document.querySelector("body")

    if(darkTheme) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  });