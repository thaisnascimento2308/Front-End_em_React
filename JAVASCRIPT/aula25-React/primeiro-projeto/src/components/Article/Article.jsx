// Componente Article
// Objetivo: Renderizar um artigo/notícia exibindo imagem, título, provedor e descrição.
// É reutilizável para diferentes artigos, recebendo as informações via props.

import "./style.css";

/*
Exemplo de props recebidas no componente:
this.props = {
  title: 'Exemplo 1',
  provider: 'Fonte da notícia',
  description: 'Descrição breve da notícia',
  thumbnail: 'URL da imagem de capa'
}
*/

// Componente funcional Article que recebe as props: title, provider, description e thumbnail
export function Article({title, provider, description, thumbnail}) {
  return (
    // Elemento article com id "article" (semântico para conteúdo de artigo/notícia)
    <article id="article">

      {/* Exibe a imagem de capa/thumbnail do artigo */}
      <img src={thumbnail} alt={title} />

      {/* Container com as informações do artigo */}
      <div className="article-infos">
        
        {/* Título do artigo */}
        <h2>{title}</h2>

        {/* Nome do provedor/autor */}
        <h3>{provider}</h3>

        {/* Descrição do artigo */}
        <p>{description}</p>
      </div>
    </article>
  );
}
