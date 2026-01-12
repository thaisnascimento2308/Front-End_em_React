import React from 'react'; // Import React library
import { Header } from './components/Header/Header'; // Importa o componente Header
import "./styles/global.css"; // Importa o arquivo de estilos globais
import { Tasks } from './components/Tasks/Tasks';

function App() { // Define a functional component name App
  return (
    <>
      <Header/>
      
      <Tasks/>
    </>
  );
}

export default App; // Exporta o componente App como padrão
