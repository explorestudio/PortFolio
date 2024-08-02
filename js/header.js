document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    const currentPath = window.location.pathname.split("/").pop();
    const currentHash = window.location.hash;

    // Map URLs to corresponding nav items
    const navLinks = {
        'index.html': 'home',
        'games.html': 'portfolio',
        'designdoc.html': 'game-design',
        'economicdoc.html': 'economics',
        'aboutme.html': 'about-me',
        'index.html#contact': 'contact'
    };

    // Determine the active nav item
    let activeNavItemId = navLinks[currentPath];
    if (!activeNavItemId && currentHash) {
        activeNavItemId = navLinks[`${currentPath}${currentHash}`];
    }

    // Add the 'active' class to the active nav item
    if (activeNavItemId) {
        document.getElementById(activeNavItemId).classList.add('active');
    }
});