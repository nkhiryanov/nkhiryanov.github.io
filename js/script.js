const hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.menu__overlay'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const persent = document.querySelectorAll('.progress-header__persent'),
      bar = document.querySelectorAll('.progress__bar div');
persent.forEach( (item,i) => {
    bar[i].style.width = item.innerHTML;
});