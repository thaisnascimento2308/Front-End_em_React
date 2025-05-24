//Number - Converte uma variável para o tipo Number
//parseInt - Converte uma variável para o tipo int
//parseFloat - Converte uma variável para o tipo float
//isNaN - Retorna um booleano informando se o conteúdo da variável é NaN(true) ou não (false)

//Definição de função
function saudacao (nomeDoEstudante, curso = "Front-end em React") { //curso sera o padrão caso não diga qual é
    // template string || template literals
    return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
}
const mensagemDeSaudacao = saudacao("Thais", "Back-end");

console.log(mensagemDeSaudacao); //Chamada da função

//*Exemplo 2

function somar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

//console.clear()

//FUNÇÕES ANÔNIMAS

const dobroDoNumero = function (numero) {
    return numero * 2;
};

const dobro = dobroDoNumero(5)
console.log(dobro);

//ARROW FUNCTIONS: Função seta

const subtrair = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => numero1 * numero2; // Quando não usa chaves automaticamente o return sera o resultado do pedido depois da seta

const triplicar = (numero) => numero * 3;
