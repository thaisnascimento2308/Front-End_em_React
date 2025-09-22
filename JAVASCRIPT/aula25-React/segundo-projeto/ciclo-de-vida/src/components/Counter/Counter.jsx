import React from "react";

// Criando um componente de classe chamado Counter
export class Counter extends React.Component {
  constructor() {
    super();
    // Estado inicial com a variável "contador" começando em 0
    this.state = { contador: 0 };
  }

  // Chamado antes do componente ser montado (⚠️ obsoleto nas versões atuais do React)
  UNSAFE_componentWillMount() {
    console.log("O nosso componente montador será montado!");
  }

  // Chamado logo após o componente ser montado (inserido no DOM)
  componentDidMount() {
    console.log("O componente foi montado!");

    // Adiciona um evento de scroll na página
    document.addEventListener("scroll", this.consoleScroll);
  }

  // Chamado sempre que o state ou as props mudam
  // Permite controlar se o componente deve atualizar ou não
  shouldComponentUpdate() {
    console.log("Devo atualizar o componente?");
    return true; // true -> atualiza | false -> não atualiza
  }

  // Chamado antes da atualização do componente (⚠️ obsoleto nas versões atuais do React)
  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado!");
  }

  // Chamado logo após a atualização (quando state ou props mudam)
  componentDidUpdate() {
    console.log("O componente foi atualizado!");
  }

  // Chamado antes de o componente ser desmontado/removido do DOM
  componentWillUnmount() {
    console.log("O componente será desmontado!");

    // Remove o listener de scroll para evitar vazamentos de memória
    document.removeEventListener("scroll", this.consoleScroll);
  }

  // Função chamada sempre que ocorre um evento de scroll na página
  consoleScroll() {
    console.log("Rolando a página...!");
  }

  // Renderiza o conteúdo do componente na tela
  render() {
    console.log("Renderizando o componente Counter...");
    return (
      <div>
        {/* Exibe o valor atual do contador */}
        <h1>{this.state.contador}</h1>

        {/* Botão que diminui o contador em 1 */}
        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>

        {/* Botão que aumenta o contador em 1 */}
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
