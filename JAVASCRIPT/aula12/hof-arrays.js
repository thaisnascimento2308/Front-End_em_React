// Array.prototype.every(): Verificar se todos os elementos de um array seguem uma determinada condição retornada pela função.

const numeros = [40, 34, 67, 89, 23, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

// Ele verifica se todos os elementos do array satisfazem uma condição.

// Retorna true se todos os elementos passarem no teste.

// Retorna false se pelo menos um não passar.

// Então, o método está verificando se todos os números no array são maiores que 0 (ou seja, se são positivos).

// Esse código verifica se todos os números do array numeros são positivos. E no caso dessa lista, são sim — por isso, o resultado é true.

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

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log(todosMaioresDeIdade);

console.clear()

// Array.prototype.some(): verificar se algum elemento do array torna verdadeira uma determinada condição retornada pela função.

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno)


// const numeros2 = [-1, 3, 7, -3, 5]; Aqui você está criando um array com os números: -1, 3, 7, -3, 5.

// const retorno = numeros2.some((numero) => numero > 0);

// A função .some() percorre o array e verifica se pelo menos um elemento satisfaz a condição dada.
// No caso, a condição é: numero > 0 (ou seja, se o número é positivo).

// A função .some() serve para responder: "existe algum elemento no array que atenda a essa condição?".
// Nesse caso, sim, existem números maiores que 0, então o retorno é true.

// .some()
// Verifica se pelo menos um elemento do array atende a uma condição.

// .every()
// Verifica se todos os elementos do array atendem a uma condição.

// Método	O que faz	Retorno com [ -1, 3, 7, -3, 5 ]
// some()	Algum elemento é maior que 0?	true (ex: 3, 7 e 5 são maiores)
// every()	Todos os elementos são maiores que 0?	false (ex: -1 e -3 não são)