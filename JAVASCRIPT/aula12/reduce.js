// Reduce

// * Exemplo 1

const numeros = [1, 2, 3, 4, 5]

//No reduce, a função de callback pode receber 4 parâmetros.
//Reduce temos 4 parametros previousValue(valor anterior), currentValue(valor atual), currentIndex(index atual),array(arrayCompleto).


// Reduce com 2 parâmetros: acumulador e elemento (valor atual)
const soma = numeros.reduce((acumulador, elemento) => {
    console.log(acumulador); // Mostra o valor acumulado até agora
    return elemento + acumulador; // Soma o valor atual com o acumulado
}, 0); // valor inicial do acumulador é 0

console.log(soma); // Mostra o resultado final

//O método reduce vai percorrer o array e somar cada elemento ao acumulador. O acumulador começa com o valor 0 (esse é o valor inicial que você passou como segundo argumento do reduce).

// * Exemplo 1.2

const resultado = numeros.reduce((acumulador, valorAtual, indexAtual, arrayCompleto) => {
  console.log(`Index: ${indexAtual}`);
  console.log(`Valor Atual: ${valorAtual}`);
  console.log(`Acumulador antes da soma: ${acumulador}`);
  console.log(`Array completo: [${arrayCompleto}]`);
  console.log('-----------------------');
  
  return acumulador + valorAtual;
}, 0);

console.log(`Resultado final: ${resultado}`);

//acumulador: é o valor acumulado até o momento (começa com 0).

//valorAtual: é o número atual do array que está sendo processado.

//indexAtual: é o índice do elemento atual.

//arrayCompleto: é o array original ([1, 2, 3, 4, 5]), passado em todas as iterações.

// * Exemplo 2

const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => { // Usar o anderline ignora o indice em que ele foi colocado
    return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(media); // Mostra o resultado final

// * Exemplo 3
const somaDosPares = numeros.reduce((acumulador, numero) => {
    //Se o número for par
    if (numero % 2 === 0) {
        return numero + acumulador;    
    } else {
        return acumulador;
    }
}, 0);

console.log(somaDosPares);

// * Exemplo 4: Total a pagar do carrinho

const carrinho = [
    {produto: "Feijão", preco: 7.98, quantidade: 3},
    {produto: "Arroz", preco: 4.98, quantidade: 5},
    {produto: "Leite 1L", preco: 6.99, quantidade: 2},
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
    //console.log(acumulador);
    return item.preco * item.quantidade + acumulador;
}, 0).toFixed(2)

console.log(totalAPagar);