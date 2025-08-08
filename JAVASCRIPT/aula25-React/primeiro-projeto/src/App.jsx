import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './styles/App.css';

//Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render
//O método render é responsável por retornar o conteúdo HTML que será exibido na tela
//A classe App é o componente principal da aplicação
class App extends React.Component {

//Método responsável por renderizar o conteúdo HTM do nosso componente
  render() {
    return (
      <Navbar/>
    );
  }
}

export default App;
