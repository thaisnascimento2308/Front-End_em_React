const notasDoAluno = [10, 8, 5]
const pessoa = ["Thais", 27, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);
console.log(pessoa[3]);


pessoa[3] = false;
console.log(pessoa);

//Fatiamento de arrays

const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 4));

//Adicionando elementos no final do array
numeros.push(0);
console.log(numeros);

//Adicionando elementos no inicio do array
numeros.unshift(-1)
console.log(numeros);

//Remover elementos no final do array
numeros.pop();
console.log(numeros);

//Remover elementos no inicio do array
numeros.shift();
console.log(numeros);

//Será que o elemento 20 exixte no array numeros?
console.log(numeros.includes(20));

if (numeros.includes(20)) {
    console.log("Existe o número 20 dentro do array numeros!");
} else {
    console.log("Não existe o número 20 no array numeros.");
}

const existe = numeros.includes(20);

// * IndexOf - Procura o primeiro index com o valor

const indiceDoElemento20 = numeros.indexOf(20);
console.log(indiceDoElemento20);

// * lastIndexOf - Procura o ultimo index com o valor

const indiceDoElemento40 = numeros.lastIndexOf(40);
console.log(indiceDoElemento40);