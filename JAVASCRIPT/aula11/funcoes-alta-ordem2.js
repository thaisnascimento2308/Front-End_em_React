// * FUNÇÕES DE ALTA ORDEM DE ARRAYS

// * 1- Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10]; // Aqui é criada uma constante chamada numeros, que é um array com seis números.

// for (const elemento of numeros) { // Esse laço percorre o array numeros, e a cada repetição, a variável elemento recebe um dos valores do array (não o índice, mas o valor mesmo).
//   console.log(elemento); // Dentro do laço, ele imprime cada número no console.
// }

numeros.forEach((elemento, index, arrayCompleto) => { // .forEach() é um método que executa uma função para cada elemento do array. Essa função é chamada de função callback.
    console.log( index, elemento, arrayCompleto); // (elemento) => { ... } é uma função arrow que recebe cada item do array (um por vez) e executa o que está dentro das chaves.
});

console.clear()

// Explicação dos parâmetros:
// elemento → o valor atual do array em cada iteração.

// index → a posição (índice) do elemento dentro do array.

// arrayCompleto → o array inteiro sendo percorrido (numeros neste caso).

//Ele mostra o índice, o valor e o array completo a cada passo do loop.

// * 2- Array.prototype.find(): útil para encontrar um elemento dentro do array

const numeros1 = [40, 34, 67, 89, 23, 10];

const encontrado = numeros1.find((numero) => {
    return numero > 67;
})

console.log(encontrado);

console.clear()

// Explicação dos parâmetros:
// Esse método percorre o array do começo ao fim.

// Para cada elemento, ele executa a função (numero) => numero > 67.

// Assim que encontrar o primeiro número que satisfaça essa condição, ele para e retorna esse número.

// Se nenhum número satisfizer a condição, o .find() retorna undefined.

// Array de objetos

const pessoas = [
    {
        nome: "Pessoa 1",
        idade: 34,
        altura: 1.77,
    },
    {
        nome: "Pessoa 2",
        idade: 25,
        altura: 1.56,
    },
    {
        nome: "Pessoa 3",
        idade: 46,
        altura: 1.82,
    },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7);

console.log(pessoaEncontrada)

console.clear()

// Aqui temos um array com 3 objetos.

// Cada objeto representa uma pessoa com nome, idade e altura.

// O método .find() vai percorrer o array e testar a condição pessoa.idade > 20 e pessoa.altura < 1.7.

// Ele retorna o primeiro objeto que satisfaz essa condição.

// Se nenhum número satisfizer a condição, o .find() retorna undefined.

// * 3- Array.prototype.findIndex(): muito parecido com o find(), pórem retorna o indice do elemento encontrado

const pessoas1 = [
    {
        nome: "Pessoa 1",
        idade: 34,
        altura: 1.77,
    },
    {
        nome: "Pessoa 2",
        idade: 25,
        altura: 1.56,
    },
    {
        nome: "Pessoa 3",
        idade: 46,
        altura: 1.82,
    },
];

const pessoaEncontrada1 = pessoas.findIndex((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7);

console.log(pessoaEncontrada1)

// Se nenhum número satisfizer a condição, o .findIndex() retorna -1. 