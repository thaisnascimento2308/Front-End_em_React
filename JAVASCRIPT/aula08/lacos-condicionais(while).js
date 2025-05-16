// * Exemplo 1

const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo?"))

// while (saldo < 0) {
//     saldo = Number(
//         prompt.question("SAldo inválido! Por favor informe novamente: ")
//         );
// }

// console.log(saldo);

// * Exemplo 2

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: ")); //Number: converter a string digitada em um número.

// let somaDasNotas = 0; //Acumulador
// let qtdNotasValidas = 0; //Acumulador (quantidade de notas válidas digitadas)

// while (notaDoAluno >= 0) {
//     somaDasNotas += notaDoAluno //Incrementando o acumulador (somasDasNotas)

//     qtdNotasValidas ++; //Pós incremento

//     notaDoAluno = Number(prompt.question("Informe a pŕoxima nota: "));
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);
// console.log("Média das notas dos alunos = ", somaDasNotas / qtdNotasValidas);

// * Exemplo 3

//Math.random() => entre 0 e 1
// const numeroAleatorio = parseInt(Math.random() * 10); // Prseint arredonda o número

// let numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: '));

// console.log(numeroAleatorio);

// while (numeroAleatorio !== numeroDoUsuario) {
//     console.log("Você errou o número! Tente novamente...");
//     numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))
// }
// console.log("Prabéns! Você acertou! O número é: ", numeroAleatorio);

// Loop com contador
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;

    if (contador === 2) {
         break; // Para o loop
        continue; //Volta para o inicio do loop (as linhas abaixo não serão executadas)
    }
    console.log("Depois do if...");
}