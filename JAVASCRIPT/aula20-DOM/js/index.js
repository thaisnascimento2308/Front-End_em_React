//*Selecionar elementos HTML da nossa página utilizando o document.

//*1- Pelo nome da tag
const todosh1 = document.getElementsByTagName("h1"); //Pega todos os elementos da tag h1
console.log(todosh1[0]);

const todosps = document.getElementsByTagName("p"); //Pega todos os elementos da tag p
console.log(todosps);

//*2- Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName("paragrafo"); //Pega todos os elementos da classe parágrafo
console.log(todosClasseParagrafo);

//*3- Pelo name da tag
const emailInput = document.getElementsByName("email"); //Pega o primeiro elemento com o name email
console.log(emailInput);

//*4- Pelo ID da tag
const jsLogoImg = document.getElementById("js-logo"); //Pega o elemento com o ID js-logo
console.log(jsLogoImg);

//*5- Query Selector
const imagem = document.querySelector("body > img#js-logo"); //Pega o primeiro elemento que corresponde ao seletor CSS fornecido
console.log(imagem);

const paragrafo = document.querySelector("p"); //Pega o primeiro elemento que corresponde ao seletor CSS fornecido
console.log(paragrafo);

const paragrafo2 = document.querySelectorAll("p"); //Pega todos os elementos que correspondem ao seletor CSS fornecido
console.log(paragrafo2);

//Acesdsando ou alterando o conteúdo dos elementos selecionados
const primeiroParagrafo = document.querySelector("P.paragrafo"); //Pega o primeiro elemento com a classe parágrafo
console.log(primeiroParagrafo);
console.log("Conteudo:", primeiroParagrafo.textContent); //Exibe o conteúdo em texto do primeiro parágrafo
console.log("innerHTML:", primeiroParagrafo.innerHTML); //Exibe o conteúdo HTML do primeiro parágrafo

primeiroParagrafo.textContent = "Novo conteúdo do parágrafo"; //Altera o conteúdo de texto do primeiro parágrafo
console.log("Novo Conteudo:", primeiroParagrafo.textContent); //Exibe o novo conteúdo em texto do primeiro parágrafo

console.clear(); //Limpa o console

console.log(emailInput.values); //Exibe os valores do input de email

emailInput[0].value = "teste@gmail.com";

//Crinado elementos na página HTML
const listaUl = document.querySelector("ul#lista"); //Seleciona a lista não ordenada (ul#lista) da página
console.log(listaUl);

const listaLis = document.querySelectorAll("ul > li"); //Seleciona todos os itens da lista (li) dentro da lista não ordenada (ul)

const novaTagLi = document.createElement("li"); //Cria um novo elemento
novaTagLi.innerText = "Segundo item"; //Define o conteúdo de texto do novo elemento

console.log(novaTagLi);

//listaUl.appendChild(novaTagLi); //Adiciona o novo elemento como filho da lista não ordenada (ul)

listaUl.insertBefore(novaTagLi, listaLis[1]); //Insere o novo elemento antes do segundo item da lista.

listaUl.removeChild(listaLis[1]); //Remove o novo elemento da lista
