// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add scroll event listener for navbar
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.backgroundColor = 'rgba(5, 5, 5, 0.8)';
                nav.style.boxShadow = 'none';
            }
        });
    }

    // Simple Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        // Pause animation initially
        fader.style.animationPlayState = 'paused';
        appearOnScroll.observe(fader);
    });
});
