document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
    });
});
