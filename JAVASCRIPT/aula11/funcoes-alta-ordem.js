// HIGH ORDER FUNCTIONS

// * 1. Função que RETORNA outra função como parâmetro

function welcome(courseName) {
    return (studentName) => {
        console.log(
            `Ólá, ${studentName}! Seja bem-vinda(o) ao curso de ${courseName}!`
            );
    };
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");
const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");

displayWelcomeToFrontEndCourse("Thais Nascimento");

console.clear()

// * 2. Função que RECEBE outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// funcaoDaOperação: função que realiza a operação entre os dois números, ou eja, ela precisa ser uma função que recebe dois números.
const calcular = (num1, num2,  funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

//Calcular = 10, 5, somar) => somar(10, 5)

const retorno = calcular(10, 5, dividir);

console.log(retorno);

console.clear()
//O calculo que eu quero é: (num1 * num2) + (2 * num1 * num2)

const resultado = calcular(
    10,
    5,
    (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
