// -----------------------------
// Usando Fetch com then/catch
// -----------------------------

// A função fetch faz uma requisição HTTP para a URL informada.
// Aqui, estamos acessando a API do ViaCEP para obter informações de um CEP.
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((resposta) => {
    // Quando a resposta chegar, ela ainda precisa ser convertida em JSON
    // usando o método .json() (também retorna uma promessa).
    resposta.json().then((dados) => console.log(dados)); // Exibe os dados no console
  })
  .catch((erro) => {
    // Se ocorrer algum erro na requisição, ele será tratado aqui
    console.error("Erro na requisição:", erro); // Corrigido: não é possível usar erro.json()
  });

// ----------------------------------
// Usando Fetch com async/await
// ----------------------------------

// Função assíncrona para buscar os dados do CEP
async function obterDadosDoCep() {
  try {
    // Aguarda a resposta da API do ViaCEP
    const resposta2 = await fetch("https://viacep.com.br/ws/01001000/json/");

    // Converte a resposta para JSON
    const dados2 = await resposta2.json();

    // Exibe os dados obtidos no console
    console.log(dados2);
  } catch (erro) {
    // Captura e exibe qualquer erro que acontecer na requisição ou conversão
    console.log("Erro ao obter dados do CEP:", erro);
  } finally {
    // Bloco que sempre será executado, independentemente do sucesso ou erro
    console.log("Requisição finalizada.");
  }
}

// Chamada da função assíncrona
obterDadosDoCep();
