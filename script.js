document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards para animar
    const cards = document.querySelectorAll('.content-card');

    // Opções do observador
    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara o CSS
                entry.target.classList.add('active');
                // Para de observar este card (anima apenas uma vez)
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Inicializa a observação em cada card
    cards.forEach(card => {
        observer.observe(card);
    });
});
