// Declaração de uma variável com tipo inferido (TypeScript entende que num é number)
let num = 20;

// Constante com valor fixo de número (pi)
const pi = 3.1415;

// Declaração explícita de variável do tipo string
let nome: string = "Thais";

// Declaração de variável booleana sem valor inicial (undefined até ser definida)
let correta: boolean;

// Operação entre dois números (resultado também será do tipo number)
let resultado = num * pi;

// Prompt exibe uma caixa de entrada para o usuário digitar seu nome
const nomeDoUsuario = prompt("Qual é o seu nome?");

// Usa o operador de encadeamento opcional (?) para garantir que nomeDoUsuario não seja null
// Transforma o nome para letras maiúsculas
console.log(nomeDoUsuario?.toUpperCase());

/////////////////////////////////////////////////////////////////////////////
// Tipos de dados em TypeScript:
// number, string, boolean, null, undefined, object, any, void, never

// Declaração de array de números
const numeros: number[] = [1, 2, 3, 4, 5];

// Declaração de array vazio que receberá números
const idades: number[] = [];
idades.push(23); // Adiciona elementos ao array
idades.push(17);
idades.push(30);
idades.push(15);
idades.push(15);

// Filtra os elementos menores que 18 (menores de idade)
const menoresDeIdade = idades.filter((idade) => idade < 18);

// Exibe os valores filtrados no console
console.log(menoresDeIdade);

// * Tuplas em TypeScript
// Uma tupla define a ordem e os tipos dos elementos (aqui: string e number)
const pessoaTupla: [string, number] = ["Thais", 31];

// interface Person {
//   nome: string;
//   idade: number;
//   profissao: string;
//   altura?: number; // ? indica que a propriedade é opcional
//   habilidades: string[];
// }

// Define um tipo chamado Person usando o operador `type`
// Isso descreve a estrutura esperada de um objeto do tipo Person
type Person = {
  nome: string;
  idade: number;
  profissao?: string; // Campo opcional
  altura?: number; // Campo opcional
  habilidades: string[];
};

// Criação de um objeto com base no tipo Person
const pessoa: Person = {
  nome: "Thais",
  idade: 31,
  altura: 1.65,
  habilidades: ["JavaScript", "TypeScript", "React"],
};

// Atribuição de valor posterior à propriedade opcional 'profissao'
pessoa.profissao = "Desenvolvedora Full Stack";

// Exibe o objeto completo no console
console.log(pessoa);

// * Type aliases
// Define um tipo chamado Criterio, que pode ser 'greater' ou 'lower'
type Criterio = "greater" | "lower";

// Função que compara dois números e retorna o maior, menor ou um aleatório
function chooseNumber(
  num1: number,
  num2: number,
  criterio?: Criterio // Parâmetro opcional
): number {
  switch (criterio) {
    case "greater":
      return num1 > num2 ? num1 : num2;
    case "lower":
      return num1 < num2 ? num1 : num2;
    default:
      // Caso não haja critério, escolhe aleatoriamente
      const numeroAleatorio = Math.random();
      return numeroAleatorio >= 0.5 ? num1 : num2;
  }
}

// Exemplo de uso da função com critério 'lower'
const numeroEscolhido = chooseNumber(10, 20, "lower");

console.log("numeroEscolhido", numeroEscolhido);

// Função simples de soma com tipos explícitos
function somar(numb1: number, numb2: number): number {
  return numb1 + numb2;
}

// * Utility Types em TypeScript
// Permitem criar novos tipos a partir de outros, com transformações

// 1. Partial<Person> torna todas as propriedades opcionais
type PersonPartial = Partial<Person>;

// 2. Required<Person> torna todas as propriedades obrigatórias
type PersonRequired = Required<Person>;

// 3. Pick seleciona apenas as propriedades nome e idade
type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit remove a propriedade 'profissao' do tipo
type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude remove 'greater' do tipo Criterio
type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record cria um tipo onde cada chave (string) representa uma pessoa
type PersonRecord = Record<string, Person>;
