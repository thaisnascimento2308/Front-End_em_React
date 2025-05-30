const prompt = require("readline-sync")

// Expressão 1: Inicialização da variável de controle.
// Expressão 2: condição de permanencia do for.
// Expressão 3: o incremento da variável de controle.

// for (expressão 1; expressão 2; expressão 3) {
//    O escopo do for
//}

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//Limpando console
// console.clear();

//Exemplo
// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 1; i <= 5; i++) {
//     numeroInformado = Number(prompt.question("Informe um número positivo: "));

//     if (numeroInformado > maiorNumero) {
//         maiorNumero = numeroInformado;
//     }
// }

// console.log("Maior número: ", maiorNumero);

// * Exemplo: percorrendo strings com o for

const nome = "Thais";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// * for-of - percorro os elementos de nome (T, h, a, i, s)

for (const elemento of nome) {
    console.log(elemento);
}

// * for-in - percorro os indices de nome (0, 1, 2, 3, 4)

for (const indice in nome) {
    console.log(indice);
}