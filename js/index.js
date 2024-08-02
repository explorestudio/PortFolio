document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    
    setTimeout(() => {
        aboutSection.classList.remove('transition-hidden');
        aboutSection.classList.add('transition-visible');
    }, 300); // 300 millisecondes = 0.3 secondes
});

document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.querySelector("#portfolio-text .dynamic-text");

    function showDocumentation() {
        // Changer le texte en "Documentation" et appliquer les animations pour "Documentation"
        dynamicText.textContent = "Documentation";
        dynamicText.classList.remove("typing-portfolio");
        dynamicText.classList.add("typing-documentation");
    }

    function showPortfolio() {
        // Changer le texte en "Portfolio" et appliquer les animations pour "Portfolio"
        dynamicText.textContent = "Portfolio";
        dynamicText.classList.remove("typing-documentation");
        dynamicText.classList.add("typing-portfolio");
    }

    function startAnimation() {
        // Afficher "Documentation" après un délai
        setTimeout(function() {
            showDocumentation();
            // Attendre la fin de l'animation pour "Documentation", puis réinitialiser
            setTimeout(function() {
                showPortfolio();
                // Ajouter un délai avant de recommencer l'animation pour "Portfolio"
                setTimeout(function() {
                    startAnimation();
                }, 3000); // Délai avant de redémarrer l'animation pour "Portfolio"
            }, 3000); // Délai pour compléter l'animation de "Documentation"
        }, 3000); // Délai avant de commencer l'animation pour "Documentation"
    }

    // Initialiser avec "Portfolio" sans animation
    showPortfolio();
    // Attendre un petit délai pour assurer que le texte "Portfolio" est visible avant de démarrer les animations
    setTimeout(function() {
        startAnimation();
    }, 500); // Délai pour permettre à "Portfolio" de s'afficher avant de commencer les animations
});






