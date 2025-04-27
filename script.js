// Toggle Menu Overlay
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});
