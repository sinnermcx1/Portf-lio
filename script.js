// Seleciona o elemento de navegação e o cabeçalho
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

// Adiciona um ouvinte de evento para a rolagem da página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Adiciona um ouvinte de evento para suavizar a rolagem ao clicar nos links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });
    });
});