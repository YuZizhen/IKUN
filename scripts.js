document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Fade out the Y shape
    const yShape = document.querySelector('.y-shape');
    if (scrollTop > 0) {
        yShape.classList.add('fade-out');
    } else {
        yShape.classList.remove('fade-out');
    }

    // Fade in the content
    const content = document.querySelector('.content');
    if (scrollTop > windowHeight / 2) {
        content.style.opacity = '1';
    } else {
        content.style.opacity = '0';
    }

    // Fade in individual elements as they come into view
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
