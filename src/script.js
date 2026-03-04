document.addEventListener('DOMContentLoaded', () => {
    
    // Função para mostrar os elementos
    const handleScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Se o elemento aparecer pelo menos 100px na tela, ele surge
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // 1. Aplica o estado inicial e verifica o que já deve estar visível
    const allSections = document.querySelectorAll('section, .foto-item, .banner-container');
    allSections.forEach(el => {
        el.classList.add('fade-in');
        // Estilo inicial via JS para garantir que não dependa só do CSS
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    // 2. Dispara uma vez ao carregar e sempre que rolar
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa ao carregar para mostrar o que está no topo (Banner/Hero)

    // 3. Botão de WhatsApp (Garantindo o clique)
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.onclick = () => {
            window.location.href = 'https://wa.me/5562993148177?text=Olá! Gostaria de reservar uma suíte.';
        };
    }
});