//*Programação Orintada a Objetos (POO) em JavaScript
//Paradigma de programação que foca na modelagem das entidades envolvidas em um problema (objetos) e na interação entre elas.

//*Características

//1- Reutilização de código: Classes permitem criar objetos reutilizáveis. 
// *DRY* (Don't Repeat Yourself)

//2- Modularização: Código é organizado em módulos, facilitando a manutenção e compreensão.

//3- Integração simples entre modulos: Objetos podem interagir facilmente entre si, promovendo a colaboração entre diferentes partes do sistema.

//4- Reaproveitamento de modulos em outros sistemas: Módulos podem ser reutilizados em diferentes projetos, economizando tempo e esforço de desenvolvimento.

//*Elementos principais
//1- Classes: Estruturas que definem as propriedades e comportamentos dos objetos. Ex: Pessoa, Carro, Produto.
//classe: abstração - definindo a abstração de uma pessoa.
class Pessoa {
  // Atributos: caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: Number;

  //métodos: ações(funções)

  //método construtor: é uma função especial que é chamada quando um objeto é criado a partir da classe.
  constructor(nome: string, idade: number, altura: number) {
  }

  dormir() {
    console.log("Dormindo...");
  }

}

//Criando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa();



//2- Objetos: Instâncias de classes que possuem propriedades e métodos.Ex: Um objeto do tipo Pessoa pode ter propriedades como nome e idade, e métodos como falar e andar.

//3- Atributos: Propriedades que definem o estado de um objeto. Ex: nome, idade, cor.

//4- Métodos: Funções que definem o comportamento de um objeto. Ex: falar(), andar(), comer(), ligar(), desligar(), instalar(), remover(), atualizar(), buscar(), etc...







//5- Herança: Mecanismo que permite que uma classe herde propriedades e métodos de outra classe.
//6- Polimorfismo: Capacidade de objetos de diferentes classes responderem a mesma mensagem de forma diferente.
//7- Encapsulamento: Princípio que restringe o acesso a certos detalhes internos de um objeto, expondo apenas o necessário.
//8- Abstração: Processo de simplificação que permite focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes.
//9- Interfaces: Contratos que definem um conjunto de métodos que uma classe deve implementar, promovendo a consistência e a interoperabilidade entre diferentes classes.
//10- Módulos: Unidades de código que encapsulam funcionalidades relacionadas, facilitando a organização e reutilização.
//11- Instâncias: Objetos criados a partir de uma classe, que possuem suas próprias propriedades e comportamentos.
//12- Construtores: Funções especiais usadas para criar e inicializar objetos a partir de uma classe.
//13- Destrutores: Funções que são chamadas quando um objeto é destruído, permitindo liberar recursos ou realizar limpeza.
//14- Eventos: Mecanismos que permitem que objetos notifiquem outros objetos sobre mudanças de estado ou ações, promovendo a comunicação entre diferentes partes do sistema.


//2- Encapsulamento: Dados e comportamentos são agrupados em uma única estrutura.
//3- Herança: Classes podem herdar propriedades e métodos de outras classes, promovendo a reutilização de código.
//4- Polimorfismo: Objetos podem ser tratados como instâncias de suas classes ou de classes pai, permitindo que métodos sejam chamados de forma genérica.