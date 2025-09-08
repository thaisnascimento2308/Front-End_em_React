import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './styles/App.css';
import { Article } from './components/Article/Article';
import article1 from './assets/images/articleImg.jpg';
import article2 from './assets/images/article2.jpeg';
import article3 from './assets/images/article3.png';
import { Counter } from './components/Counter/Counter';

//Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render
//O método render é responsável por retornar o conteúdo HTML que será exibido na tela
//A classe App é o componente principal da aplicação

export class App extends React.Component {
//Método responsável por renderizar o conteúdo HTM do nosso componente
  render() {
    return (
      //Fragment: é um componente que não renderiza nada na tela, mas permite agrupar outros componentes
      <>
      <Navbar/>

      <section id="articles">
        <Article title="Designing Dashboards" provider="NASA" description="Descrição do texto. bvfhwbfhwbfwvjsbvjksvbjbvjbvjbvdjvjvjdvbjdbvjbvjBVJSBVJSBVJSBVJSBVJ" thumbnail={article1}/>

        <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Descrição do texto. bvfhwbfhwbfwvjsbvjksvbjbvjbvjbvdjvjvjdvbjdbvjbvjBVJSBVJSBVJSBVJSBVJ" thumbnail={article2}/>

        <Article title="36 Days of Malayalan type" provider="Spaceflight Now" description="Descrição do texto. bvfhwbfhwbfwvjsbvjksvbjbvjbvjbvdjvjvjdvbjdbvjbvjBVJSBVJSBVJSBVJSBVJ" thumbnail={article3}/>

        <Article title="Designing Dashboards" provider="NASA" description="Descrição do texto. bvfhwbfhwbfwvjsbvjksvbjbvjbvjbvdjvjvjdvbjdbvjbvjBVJSBVJSBVJSBVJSBVJ" thumbnail={article1}/>
      </section>

      <Counter/>
      </>
    );
  }
}

