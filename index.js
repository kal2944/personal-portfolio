const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
link1.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
link2.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
link3.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
