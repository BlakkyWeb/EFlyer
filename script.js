const toggler = document.querySelector('[data-toggle]');
const close = document.querySelector('[data-close]');
const menu = document.querySelector('[data-menu]');



toggler.addEventListener('click', ()=> {
    menu.classList.add('show');
})

close.addEventListener('click', ()=> {
    menu.classList.remove('show');
})