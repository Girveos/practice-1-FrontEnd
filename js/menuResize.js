const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 530) {
        menuList.classList.remove('show-menu');
    }
});
