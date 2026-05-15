document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os cards para a animação de scroll
    const cards = document.querySelectorAll('.content-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa a animação definida no CSS
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        revealOnScroll.observe(card);
    });
});
