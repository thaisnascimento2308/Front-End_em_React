// Componente Navbar
// Objetivo: Renderizar a barra de navegação principal da aplicação,
// exibindo a marca (logo + título) e links de navegação para diferentes seções.

import React from "react"; // Importa o React para possibilitar a criação do componente

import imagem from "../../assets/images/space.jpg"; // Importa a imagem usada como logotipo/ícone

import "./styles.css"; // Importa os estilos CSS aplicados ao componente Navbar

// Componente funcional Navbar responsável por renderizar o cabeçalho da aplicação
export function Navbar() {
  return (
    // Header semântico, usado para a barra de navegação principal
    <header>
      {/* Navegação principal com id "navbar" */}
      <nav id="navbar">
        
        {/* Área de marca (logo + título) */}
        <div className="nav-brand">
          {/* Logo da navbar (imagem do planeta Saturno) */}
          <img src={imagem} alt="Imagem do planeta saturno." />
          
          {/* Nome/título da aplicação */}
          <h1>Space Flight News</h1>
        </div>

        {/* Lista de links de navegação */}
        <ul className="nav-list">
          {/* Item de navegação: Home */}
          <li>
            <a href="/">Home</a>
          </li>

          {/* Item de navegação: Trending */}
          <li>
            <a href="/">Trending</a>
          </li>

          {/* Item de navegação: Categories */}
          <li>
            <a href="/">Categories</a>
          </li>

          {/* Item de navegação: About us */}
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
