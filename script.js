// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os blocos de conteúdo (cards)
    const cards = document.querySelectorAll('.content-card');

    // Configuração do observador de movimento (Intersection Observer)
    const observerOptions = {
        threshold: 0.15, // Ativa quando 15% do card aparece na tela
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de chegar no meio da tela
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o card entrar na área visível do navegador
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Para de observar o card depois que ele já apareceu (opcional)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplica a observação em cada um dos seus cards
    cards.forEach(card => {
        revealOnScroll.observe(card);
    });
});
