// js/main.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pop-up message on project/game card click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        alert(`You clicked on ${this.querySelector('h3').innerText}`);
    });
});
