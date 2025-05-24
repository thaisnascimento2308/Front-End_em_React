const array = ["Thais", 27, 1.77, true]

const pessoa = {
    nome: "Thais", 
    idade: 27, 
    altura: 1.65, 
    ehProgramadora: true, 
    hobbies: ["Academia", "Ler", "Jogar"],
    imprimirAlgo: () => {
        console.log("Chamou a função");
    },
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.hobbies[2]);

pessoa.profissao = "Desenvolvedora"; //Adiciona o atributo
pessoa.nome = "Thais Nascimento";

console.log(pessoa);

delete pessoa.altura; //Deleta altura

console.log(pessoa);

pessoa.imprimirAlgo();

console.clear();

const idade = 31;
const altura = 1.65;

const objeto = {
    idade,
    altura,
}
console.log(objeto);

console.clear();

const { nome, hobbies } = pessoa;

console.log(nome, hobbies, pessoa);
console.log(pessoa);
