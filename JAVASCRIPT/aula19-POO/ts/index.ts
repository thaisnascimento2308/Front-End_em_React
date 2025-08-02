//*Programação Orintada a Objetos (POO) em JavaScript
//Paradigma de programação que foca na modelagem das entidades envolvidas em um problema (objetos) e na interação entre elas.

//*Características

//1- Reutilização de código: Classes permitem criar objetos reutilizáveis.
// *DRY* (Don't Repeat Yourself)

//2- Modularização: Código é organizado em módulos, facilitando a manutenção e compreensão.

//3- Integração simples entre modulos: Objetos podem interagir facilmente entre si, promovendo a colaboração entre diferentes partes do sistema.

//4- Reaproveitamento de modulos em outros sistemas: Módulos podem ser reutilizados em diferentes projetos, economizando tempo e esforço de desenvolvimento.

//9- Interfaces: Contratos que definem um conjunto de métodos que uma classe deve implementar, promovendo a consistência e a interoperabilidade entre diferentes classes.
interface IPessoa {
  // Atributos: caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: number;

  dormir(): void; // Método que define o comportamento de dormir
}

//*Elementos principais
//1- Classes: Estruturas que definem as propriedades e comportamentos dos objetos. Ex: Pessoa, Carro, Produto.
//2- Objetos: Instâncias de classes que possuem propriedades e métodos.Ex: Um objeto do tipo Pessoa pode ter propriedades como nome e idade, e métodos como falar e andar.
//3- Atributos: Propriedades que definem o estado de um objeto. Ex: nome, idade, cor.
//4- Métodos: Funções que definem o comportamento de um objeto. Ex: falar(), andar(), comer(), ligar(), desligar(), instalar(), remover(), atualizar(), buscar(), etc...

//5- Abstração: Processo de simplificação que permite focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes.
//classe: abstração - definindo a abstração de uma pessoa.
class Pessoa implements IPessoa {
  // Atributos: caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: number;
  //readonly cpf: string; // Atributo somente leitura, acessível apenas dentro da classe
  private _cpf: string; // Atributo privado, acessível apenas dentro da classe

  //método construtor: é uma função especial que é chamada quando um objeto é criado a partir da classe.
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  //métodos: ações(funções)
  dormir() {
    console.log("Dormindo...");
  }

  // accessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // accessor: setter
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      throw new Error("CPF length is incorrect."); // Lançando erro se o CPF não tiver 14 caracteres
    }
    this._cpf = newCpf;
  }
}

class Professor extends Pessoa {
  codigo: string;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    codigo: string
  ) {
    super(nome, idade, altura, cpf); // Chama o construtor da classe base Pessoa
    this.codigo = codigo;
  }

  ensinar() {
    console.log("Ensinando...");
  }
}

class Aluno {}
//Criando/instanciando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Thais", 31, 1.65, "123.456.789-00");
const pessoa2 = new Pessoa("João", 25, 1.8, "987.654.321-00");

console.log(pessoa1);
console.log(pessoa1.nome); // Acessando o atributo nome do objeto pessoa1
console.log(pessoa1.dormir()); // Chamando o método dormir do objeto pessoa1
console.log(pessoa1.cpf); // Acessando o atributo cpf do objeto pessoa1

//pessoa1.cpf = '10';

console.log(pessoa2);
console.log(pessoa2.idade); // Acessando o atributo idade do objeto pessoa2

// Objeto da classe Professor
const professor = new Professor("Maria", 40, 1.7, "123.456.789-01", "PROF001");

console.log(professor);
console.log(professor.nome); // Acessando o atributo nome do objeto professor
console.log(professor.codigo); // Acessando o atributo codigo do objeto professor

//6- Encapsulamento: Princípio que restringe o acesso a certos detalhes internos de um objeto, expondo apenas o necessário.

//7- Herança: Mecanismo que permite que uma classe herde propriedades e métodos de outra classe.

//8- Polimorfismo: Capacidade de objetos de diferentes classes responderem a mesma mensagem de forma diferente.
console.log(pessoa1 instanceof Pessoa); // Verifica se pessoa1 é uma instância da classe Pessoa // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true

//10- Módulos: Unidades de código que encapsulam funcionalidades relacionadas, facilitando a organização e reutilização.
//11- Instâncias: Objetos criados a partir de uma classe, que possuem suas próprias propriedades e comportamentos.
//12- Construtores: Funções especiais usadas para criar e inicializar objetos a partir de uma classe.
//13- Destrutores: Funções que são chamadas quando um objeto é destruído, permitindo liberar recursos ou realizar limpeza.
//14- Eventos: Mecanismos que permitem que objetos notifiquem outros objetos sobre mudanças de estado ou ações, promovendo a comunicação entre diferentes partes do sistema.
