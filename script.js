const navLinks = document.querySelectorAll('nav a'); 
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

AOS.init({
    once: false, 
    delay: 100,  // Delay in milliseconds (adjust as needed)
});
