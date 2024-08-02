document
addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    
    setTimeout(() => {
        aboutSection.classList.remove('transition-hidden');
        aboutSection.classList.add('transition-visible');
    }, 300); // 300 millisecondes = 0.3 secondes
});