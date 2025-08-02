// Seleciona o elemento <form> que está dentro da section com id 'search-form'
const form = document.querySelector("#search-form > form");

// Seleciona o campo de input onde o usuário digita a localização
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

// Seleciona a seção onde as informações do clima serão exibidas
const sectionTempoInfo = document.querySelector("#tempo-info");

// Adiciona um listener para o evento de envio do formulário (submit)
form?.addEventListener("submit", async (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

  // Se input ou section não existirem, interrompe a execução
  if (!input || !sectionTempoInfo) return;

  // Obtém o valor digitado no campo de input
  const localizacao = input.value;

  // Valida se a localização tem pelo menos 3 caracteres
  if (localizacao.length < 3) {
    alert("Por favor, insira uma localização com pelo menos 3 caracteres.");
    return; // Interrompe a execução se a entrada for inválida
  }

  try {
    // Faz uma requisição para a API OpenWeather com a localização informada
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=597d45eb3841066d0e9e09ee2266adfd&lang=pt_br&units=metric`);

    // Converte a resposta da API para JSON
    const dados = await resposta.json();

    // Cria um objeto com os dados que queremos exibir na tela
    const infos = {
      temperatura: Math.round(dados.main.temp), // Arredonda a temperatura
      local: dados.name, // Nome da cidade retornada pela API
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png` // Ícone da condição climática
    };

    // Insere as informações no HTML da section correspondente
    sectionTempoInfo.innerHTML = `
      <div class="tempo-dados">
        <h2>${infos.local}</h2>
        <span>${infos.temperatura}°C</span>
      </div>
      <img src="${infos.icone}" alt="Ícone do clima">
    `;
  } catch (error) {
    // Caso ocorra algum erro (ex: cidade não encontrada ou problema na API), mostra no console e alerta o usuário
    console.error("Erro ao buscar dados do tempo:", error);
    alert("Não foi possível obter os dados do tempo. Verifique a localização e tente novamente.");
  }
});