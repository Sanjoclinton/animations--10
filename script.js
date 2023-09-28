// CONSTANTS DECLARATION
const navContainer = document.querySelector('.nav-container');
const menuIcon = document.querySelector('#menu-icon');
const menuLines = document.querySelectorAll('.lines');
const navLinks = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', function() {
    menuLines[0].classList.toggle('line-1');
    menuLines[1].classList.toggle('line-2');
    menuLines[2].classList.toggle('line-3');

    navContainer.classList.toggle('hide-nav');
    navLinks.forEach(line => {
        line.addEventListener('click', function() {
            navContainer.classList.toggle('hide-nav');

            menuLines[0].classList.toggle('line-1');
            menuLines[1].classList.toggle('line-2');
            menuLines[2].classList.toggle('line-3');
        });
    });
    
});