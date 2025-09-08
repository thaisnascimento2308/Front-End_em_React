import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  UNSAFE_componentWillMount() {
    console.log('O nosso componente montador será montado!');
  }

  componentDidMount() {
    console.log('O componente foi montado!');
  }

  render() {
    console.log('Renderizando o componente Counter...');
    return (
    <div>
      <h1>{this.state.contador}</h1>
      <button onClick={() => this.setState({contador: this.state.contador -1})}>Diminuir</button>
      
      <button onClick={() => this.setState({contador: this.state.contador +1})}>Aumentar</button>
    </div>
    );
  }
}