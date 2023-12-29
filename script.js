function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    window.scrollTo({
        top: targetSection.offsetTop - 56, // Ajuste conforme necessário para acomodar a barra de navegação
        behavior: 'smooth'
    });
}