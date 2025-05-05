const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual eh a sua idade?"));

//const ehMaiorDeIdade = idade >= 18;

//Estrutura condicional: if/else

if (idade >= 18) {
    console.log("Vocẽ eh maior de idade.");
} else {
    console.log("Você é menor de idade.")
}

//Media
const mediaAluno = 2

if (mediaAluno >= 7) {
    console.log("Aprovado.");
} else if(mediaAluno >= 5){
    console.log("Prova Final.");
} else {
    console.log("Reprovado.");
}
