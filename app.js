const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');


btn.addEventListener('click', function () {

  btn.classList.toggle('active');
  menu.classList.toggle('menu_active');
})