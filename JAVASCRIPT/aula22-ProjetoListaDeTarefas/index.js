const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário.
})