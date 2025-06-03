// Map

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento, indice, arrayCompleto) => {
    return elemento * 2;
});

console.log(novoArray);

//Exemplo 1: elevando todos os números ao quadrado3

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

// Exemple 2: Adicione uma propriedade aos objetos do array

const carrinho = [
    {produto: "Feijão", preco: 7.98, quantidade: 3},
    {produto: "Arroz", preco: 4.98, quantidade: 5},
    {produto: "Leite 1L", preco: 6.99, quantidade: 2},
];

const novoCarrinho = carrinho.map((itemDoCarrinho) => {
    return {
        ...itemDoCarrinho, // Desetruturação ou spread (operator)
        total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
    };
});

console.log(novoCarrinho);


// Exemplo 2.1

const pessoa = {
    nome: 'Thais',
    idade: 31,
    altura: 1.65,
}

// Desetruturação ou spread (operator)
const pessoaComPeso = {
    ...pessoa,
    peso: 79
}

console.log(pessoaComPeso);