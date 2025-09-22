import React from 'react';
import { Counter } from '../src/components/Counter/Counter.jsx';

// Criando um componente de classe chamado App
class App extends React.Component {
  constructor() {
    super();

    // Estado inicial: controla se o componente Counter deve aparecer ou não
    this.state = { showCounter: false }
  }

  // Método obrigatório: responsável por renderizar o conteúdo na tela
  render() {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>

        {/* Botão que alterna entre mostrar e remover o componente Counter */}
        <button 
          onClick={() => {
            // Inverte o valor de showCounter (true/false) no estado
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {/* Texto do botão muda dinamicamente conforme o estado */}
          {this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador'}
        </button>

        {/* Renderiza o componente Counter apenas se showCounter for true */}
        { this.state.showCounter ? <Counter /> : null }

      </div>
    );
  }
}

export default App;
