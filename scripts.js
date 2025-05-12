document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hover effects for buttons
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#1a1a1a'; // Darker shade on hover
            this.style.color = '#ffffff'; // Change text color on hover
        });

        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#00aaff'; // Original background color
            this.style.color = '#ffffff'; // Original text color
        });
    });

    // Scroll to top button functionality
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Typing effect for phrases
    const typingElement = document.getElementById("typing-effect");
    const phrases = [
        "software security.",
        "vulnerability management.",
        "cybersecurity research.",
        "secure coding practices.",
        "malware analysis.",
        "incident response.",
        "exploit development.",
        "reverse engineering."
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, currentCharIndex--);
        } else {
            typingElement.textContent = currentPhrase.substring(0, currentCharIndex++);
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500); // Pause before typing the next phrase
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
        }
    }

    typeEffect();
});