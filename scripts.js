document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    // Set language to English by default
    let currentLanguage = 'en';

    // Function to update language
    function updateLanguage(language) {
        document.querySelectorAll('[data-' + currentLanguage + ']').forEach(element => {
            element.style.display = 'none';
        });

        document.querySelectorAll('[data-' + language + ']').forEach(element => {
            element.style.display = 'block';
        });

        currentLanguage = language;
    }

    // Initialize language based on user's browser language preference
    const userLanguage = navigator.language.substr(0, 2);
    if (userLanguage === 'fa') {
        updateLanguage('fa');
    } else {
        updateLanguage('en');
    }

    // Language switcher button
    const languageSwitcher = document.createElement('button');
    languageSwitcher.textContent = 'فا';
    languageSwitcher.addEventListener('click', () => {
        if (currentLanguage === 'en') {
            updateLanguage('fa');
            languageSwitcher.textContent = 'EN';
        } else {
            updateLanguage('en');
            languageSwitcher.textContent = 'فا';
        }
    });

    document.body.insertBefore(languageSwitcher, document.body.firstChild);

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
