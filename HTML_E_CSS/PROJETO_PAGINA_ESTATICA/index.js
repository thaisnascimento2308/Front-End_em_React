
const menuBtn = document.querySelector('.hamburguer-menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item a');

// Abrir/fechar menu ao clicar no ícone
menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Fechar menu ao clicar em qualquer link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
