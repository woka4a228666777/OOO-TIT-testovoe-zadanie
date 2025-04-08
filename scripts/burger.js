const burgerBtn = document.getElementById('burger-button');
const closeBurgerBtn = document.getElementById('close-burger-btn');
const burgerMenu = document.querySelector('.burger-wrap');

if (burgerBtn && closeBurgerBtn && burgerMenu) {
  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
  });

  closeBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });
}