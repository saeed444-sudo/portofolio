// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Page transition effect
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});

// Add this to your CSS for fade effect
body.fade-out {
    opacity: 0;
    transition: opacity 0.5s;
}