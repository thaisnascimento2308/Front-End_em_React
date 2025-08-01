const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = []; // Array para armazenar as tarefas.

// Adiciona nova tarefa no HTML.
function renderTaskOnHTML(taskTitle, done = false) {

  const li = document.createElement("li"); // Cria um novo elemento <li> para a tarefa.

  const input = document.createElement("input"); // Cria um novo input do tipo checkbox.
  input.setAttribute("type", "checkbox"); // Define o tipo do input como checkbox.
  input.addEventListener("change", (event) => { // Adiciona um listener para o evento de mudança do checkbox.
    const liToToggle = event.target.parentElement; // Obtém o elemento pai do input, que é o <li> da tarefa.

    const spanToToggle = liToToggle.querySelector('span')

    const done = event.target.checked; // Obtém o estado do checkbox (marcado ou não).
    if (done) {
      spanToToggle.style.textDecoration = "line-through"; // Se marcado, aplica um risco sobre o texto da tarefa.
    } else {
      spanToToggle.style.textDecoration = "none"; // Se desmarcado, remove o risco do texto da tarefa.
    }
    tasks = tasks.map(t => {  // Mapeia o array de tarefas para atualizar o estado da tarefa correspondente.
      if (t.title === spanToToggle.textContent) { // Verifica se o título da tarefa corresponde ao título do <span>.
        return {  // Retorna um novo objeto com o título e o estado atualizado.
          title: t.title, // Mantém o título da tarefa.
          done: !t.done, // Inverte o estado da tarefa no array de tarefas.
        }
      }

      return t // Retorna a tarefa original se não corresponder.
    })

    localStorage.setItem("tasks", JSON.stringify(tasks)); // Armazena o array de tarefas no localStorage como uma string JSON.

  })

  input.checked = done; // Define o estado do checkbox como marcado ou não, baseado no parâmetro 'done'.

  const span = document.createElement("span"); // Cria um novo elemento <span> para o título da tarefa.
  span.textContent = taskTitle; // Define o texto do <span> como o título da tarefa.

  if (done) {
    span.style.textDecoration = "line-through";
  } // Se a tarefa estiver marcada como concluída, aplica um risco sobre o texto.

  // Cria um botão para remover a tarefa.
  const button = document.createElement("button"); // Cria um novo botão para remover a tarefa.
  button.textContent = "Remover"; // Define o texto do botão como "Remover".
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement; // Obtém o elemento pai do botão, que é o <li> da tarefa.

    const titleToRemove = liToRemove.querySelector("span").textContent; // Obtém o título da tarefa a ser removida.

    tasks = tasks.filter(t => t.title !== titleToRemove); // Filtra o array de tarefas para remover a tarefa com o título correspondente.

    todoListUl.removeChild(liToRemove); // Remove o <li> da lista de tarefas.

    localStorage.setItem("tasks", JSON.stringify(tasks)); // Atualiza o localStorage com o novo array de tarefas.
  })

  li.appendChild(input); // Adiciona o input checkbox ao <li>.
  li.appendChild(span); // Adiciona o <span> com o título da tarefa ao <li>.
  li.appendChild(button); // Adiciona o botão de remover ao <li>.

  todoListUl.appendChild(li); // Adiciona o novo <li> à lista de tarefas no HTML.
}

window.onload = () => {  // Função que é executada quando a janela é carregada.
  const tasksOnLocalStorage = localStorage.getItem("tasks"); // Obtém as tarefas armazenadas no localStorage.
  if (!tasksOnLocalStorage) return; // Se não houver tarefas armazenadas, não faz nada.

  tasks = JSON.parse(tasksOnLocalStorage); // Converte a string JSON de volta para um array de objetos.

  tasks.forEach(t => { // Itera sobre cada tarefa no array de tarefas.
    renderTaskOnHTML(t.title, t.done); // Renderiza cada tarefa armazenada no localStorage no HTML.
  });
}

// Adiciona um listener para o evento de submit do formulário.
// Quando o formulário for submetido, a função será executada.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário.

  const taskTitle = taskTitleInput.value.trim(); // Obtém o valor do input e remove espaços em branco extras.

  if (taskTitle.length < 3) {
    alert("O título da tarefa deve ter pelo menos 3 caracteres.");
    return; // Se o título for inválido, exibe um alerta e não adiciona a tarefa.
  }

  // Adiciona a nova tarefa ao array de tasks.
  tasks.push({
    title: taskTitle, // Adiciona a tarefa ao array de tarefas.
    done: false, // Define o status da tarefa como não concluída.
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Armazena o array de tarefas no localStorage como uma string JSON.

  console.log(tasks); // Exibe o array de tarefas no console para depuração.

  renderTaskOnHTML(taskTitle); // Chama a função para renderizar a nova tarefa no HTML.

  taskTitleInput.value = ""; // Limpa o campo de input após adicionar a tarefa.
});
