// toggle class activ
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar  saidbar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    }
);