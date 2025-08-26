import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {showCounter: false}
  }

  render() {
    return (
      <div className="App">
        <h1>Ciclo de Vida no React</h1>

        <button onClick={() => {
          this.setState({showCounter: !this.state.showCounter}); // Inverte o estado de showCounter
        }}
        >
        {this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador'}
        </button>
      </div>
    );
  }
}

export default App;
