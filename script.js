// Seleciona o ícone de menu "hambúrguer"
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Alterna a classe "menu-opened" no header
    document.querySelector('header').classList.toggle('menu-opened');
  });
  