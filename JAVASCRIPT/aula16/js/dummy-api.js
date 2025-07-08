// Função assíncrona para buscar uma lista de usuários recém-criados
async function getUsers() {
  // Faz a requisição GET para a API, incluindo o app-id no cabeçalho
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "63f77cc1bf489f0b351b30f", // Obrigatório para autenticar na API
    },
  });

  // Converte a resposta para JSON
  const users = await resposta.json();

  // Exibe o array de usuários (a propriedade "data" contém os dados principais)
  console.log(users.data);
}

// Chama a função getUsers para executá-la
getUsers();

// Função assíncrona para buscar um usuário específico pelo ID
async function getUser() {
  // Faz a requisição GET passando o ID do usuário na URL
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/5454trh44rh48rt54", // ID fictício de usuário
    {
      headers: {
        "app-id": "63f77cc1bf489f0b351b30f", // Cabeçalho de autenticação
      },
    }
  );

  // Converte a resposta para JSON
  const user = await resposta.json();

  // Exibe os dados do usuário
  console.log(user);
}

// Chama a função getUser
getUser();

// Função assíncrona para criar um novo usuário
async function createUser() {
  // Dados do novo usuário a ser criado
  const userData = {
    firstName: "Thais",
    lastName: "Nascimento",
    email: "thais.teste@teste.com",
  };

  try {
    // Faz uma requisição POST para a API, com os dados no corpo da requisição
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST", // Método HTTP usado para criar
      headers: {
        "app-id": "63f77cc1bf489f0b351b30f", // Autenticação
        "content-type": "application/json", // Tipo de conteúdo enviado
      },
      body: JSON.stringify(userData), // Converte o objeto userData para JSON
    });
  } catch (erro) {
    // Captura qualquer erro durante a requisição
    console.log("Erro ao criar usuário:", erro);
  }
}
// Fora da função, apenas chame uma vez:
createUser();
