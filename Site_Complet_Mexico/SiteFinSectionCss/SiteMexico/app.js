const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

// On est à l'écoute d'un évènement > click > alors on envoie une fonction
btnMenu.addEventListener('click', () => { 
menu.classList.toggle('active')
})

// Fermer les liens

const allLinks = document.querySelectorAll ('.item-nav');

// Envoie d'une fonction call-back pour chacun des éléments
allLinks.forEach(item => {
// Au click, j'envoie une fonction qui va faire exactement la même chose
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})