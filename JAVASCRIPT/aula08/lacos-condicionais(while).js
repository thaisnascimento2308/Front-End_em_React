const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo?"))

// while (saldo < 0) {
//     saldo = Number(
//         prompt.question("SAldo inválido! Por favor informe novamente: ")
//         );
// }

// console.log(saldo);

//Exemplo 2

let notaDoAluno = Number(prompt.question("Informe a nota do aluno: ")); //Number: converter a string digitada em um número.

let somaDasNotas = 0; //Acumulador
let qtdNotasValidas = 0; //Acumulador (quantidade de notas válidas digitadas)

while (notaDoAluno >= 0) {
    somaDasNotas += notaDoAluno //Incrementando o acumulador (somasDasNotas)

    qtdNotasValidas ++; //Pós incremento

    notaDoAluno = Number(prompt.question("Informe a pŕoxima nota: "));
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);
console.log("Média das notas dos alunos = ", somaDasNotas / qtdNotasValidas);