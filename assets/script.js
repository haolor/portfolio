document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Year Update in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    console.log(
        "%c Hi there! Welcome to Dang Minh Hao's Portfolio.",
        "color: #2563eb; font-size: 16px; font-weight: bold;"
    );
    console.log("Looking for a Java Backend Dev? Contact me at dangminhhao365@gmail.com");
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});