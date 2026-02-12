// Scroll to section when button is clicked
const buttons = document.querySelectorAll('.navbar button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Logo button: scroll to very top
const logoBtn = document.getElementById('logo-btn');
if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Typewriter effect for hero title
(function() {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return;
    const textSpan = document.getElementById('type-text');
    const fullText = heroTitle.getAttribute('data-text') || '';
    let i = 0;
    const speed = 120; // ms per character
    // clear any content
    if (textSpan) textSpan.textContent = '';

    function typeNext() {
        if (!textSpan) return;
        if (i <= fullText.length) {
            textSpan.textContent = fullText.slice(0, i);
            i++;
            setTimeout(typeNext, speed);
        }
    }

    // small delay before starting
    setTimeout(typeNext, 500);
})();
