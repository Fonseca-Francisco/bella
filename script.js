// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a navigation item is clicked
const navButtons = document.querySelectorAll('.nav-menu button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
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

// Slideshow for Peças Personalizadas
(function() {
    const slideImages = [
        'img/slide/1-removebg-preview.png',
        'img/slide/1.png',
        'img/slide/2-removebg-preview.png',
        'img/slide/2.png',
        'img/slide/bg.jpeg',
        'img/slide/test.jpg'
    ];
    
    let currentSlide = 0;
    const slideImg = document.getElementById('slideshow-image');
    const currentSlideSpan = document.getElementById('current-slide');
    const totalSlidesSpan = document.getElementById('total-slides');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    
    if (!slideImg || !prevBtn || !nextBtn) return;
    
    totalSlidesSpan.textContent = slideImages.length;
    
    function updateSlide() {
        slideImg.src = slideImages[currentSlide];
        currentSlideSpan.textContent = currentSlide + 1;
    }
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
        updateSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideImages.length;
        updateSlide();
    });
})();

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
