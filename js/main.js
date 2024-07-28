const projects = {
    'project-1': {
        title: 'The Infernity',
        description: 'This is a brief description of Project One. It showcases the main features and technologies used. This is a brief description of Project One. It showcases the main features and technologies used.This is a brief description of Project One. It showcases the main features and technologies used.',
        featuredImage: 'https://www.youtube.com/embed/6s_a8YN04Qc?autoplay=1&mute=1&controls=0&loop=1&playlist=6s_a8YN04Qc&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        iconImage: 'https://via.placeholder.com/100',
        link: 'https://theinfernity.com/game'
    },
    'project-2': {
        title: 'Heavy Metal - The Hunt',
        description: 'This is a brief description of Project Two. It highlights the key functionalities and tools utilized.',
        featuredImage: 'https://www.youtube.com/embed/M7-Y4Lm8EAI?autoplay=1&mute=1&loop=1&controls=0&playlist=M7-Y4Lm8EAI&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        iconImage: 'https://via.placeholder.com/100',
        link: 'https://hv-mtl.com/'
    },
    'project-3': {
        title: 'Time breachers',
        description: 'This is a brief description of Project Three. It includes a summary of the project\'s scope and outcomes.',
        featuredImage: 'https://www.youtube.com/embed/jT_V_R_shHg?autoplay=1&mute=1&controls=0&loop=1&playlist=jT_V_R_shHg&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0',
        iconImage: 'https://pbs.twimg.com/profile_images/1589715753942540293/jrcOcqHT_400x400.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.StarChainGazer.TimeBreachers&hl=en_US'
    }
    // Add more projects as needed
};

let currentProjectIndex = 0;
const projectKeys = Object.keys(projects);

function showProject(projectId) {
    const project = projects[projectId];
    document.getElementById('featured-title').innerText = project.title;
    document.getElementById('featured-description').innerText = project.description;

    const featuredProject = document.getElementById('featured-project');
    const existingMediaContainer = featuredProject.querySelector('.featured-media');
    if (existingMediaContainer) {
        existingMediaContainer.remove();
    }

    const newMediaContainer = document.createElement('div');
    newMediaContainer.classList.add('featured-media');

    const iframe = document.createElement('iframe');
    iframe.src = project.featuredImage;
    iframe.frameBorder = 0;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    newMediaContainer.appendChild(iframe);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    newMediaContainer.appendChild(overlay);

    featuredProject.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
    document.getElementById('featured-link').href = project.link;
}

function previousProject() {
    currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projectKeys.length - 1;
    showProject(projectKeys[currentProjectIndex]);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex < projectKeys.length - 1) ? currentProjectIndex + 1 : 0;
    showProject(projectKeys[currentProjectIndex]);
}

// Initial display of the first project
showProject(projectKeys[currentProjectIndex]);

const schemes = {
    'scheme-1': {
        title: 'Scheme 1',
        description: 'An illustration of the in-game economy for Project One, showcasing the flow of resources, currency, and player interactions.',
        featuredImage: 'https://my.machinations.io/d/loot--craft/6130a350ff1511ed915c02f943517e50',
    },
    'scheme-2': {
        title: 'Scheme 2',
        description: 'A detailed economic model for Project Two, depicting the monetization strategies and player spending behaviors.',
        featuredImage: 'https://example.com/scheme-2',
    },
    'scheme-3': {
        title: 'Scheme 3',
        description: 'A comprehensive economic plan for Project Three, highlighting the revenue streams and cost structures.',
        featuredImage: 'https://example.com/scheme-3',
    }
    // Add more schemes as needed
};

let currentSchemeIndex = 0;
const schemeKeys = Object.keys(schemes);

function showScheme(schemeId) {
    const scheme = schemes[schemeId];
    document.getElementById('featured-title').innerText = scheme.title;
    document.getElementById('featured-description').innerText = scheme.description;

    const featuredScheme = document.getElementById('featured-scheme');
    const existingMediaContainer = featuredScheme.querySelector('.featured-media');
    if (existingMediaContainer) {
        existingMediaContainer.remove();
    }

    const newMediaContainer = document.createElement('div');
    newMediaContainer.classList.add('featured-media');

    const iframe = document.createElement('iframe');
    iframe.src = scheme.featuredImage;
    iframe.frameBorder = 0;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    newMediaContainer.appendChild(iframe);

    featuredScheme.insertBefore(newMediaContainer, document.querySelector('.featured-description'));
}

// Initial display of the first scheme
showScheme(schemeKeys[currentSchemeIndex]);

function previousScheme() {
    currentSchemeIndex = (currentSchemeIndex > 0) ? currentSchemeIndex - 1 : schemeKeys.length - 1;
    showScheme(schemeKeys[currentSchemeIndex]);
}

function nextScheme() {
    currentSchemeIndex = (currentSchemeIndex < schemeKeys.length - 1) ? currentSchemeIndex + 1 : 0;
    showScheme(schemeKeys[currentSchemeIndex]);
}

// Event listeners for chevrons
document.querySelector('.chevron-left').addEventListener('click', previousScheme);
document.querySelector('.chevron-right').addEventListener('click', nextScheme);

// Event listeners for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        showScheme(schemeKeys[index]);
        currentSchemeIndex = index;  // Update the current index
    });
});

// Animation du titre de la section games (à revoir)

document.addEventListener('DOMContentLoaded', function() {
    const workTitle = document.getElementById('work-title');
    const text = "SELECT A CATEGORY";
    let index = 0;

    function typeText() {
        if (index <= text.length) {
            workTitle.textContent = text.slice(0, index);
            index++;
            setTimeout(typeText, 200); // Ajustez la vitesse de l'animation ici
        } else {
            setTimeout(() => {
                index = 0; // Réinitialise l'index
                workTitle.textContent = "";
                setTimeout(typeText, 200); // Relance l'animation après un court délai
            }, 5000); // Temps d'arrêt de 5 secondes après l'affichage complet du texte
        }
    }

    setTimeout(typeText, 1000); // Démarrer l'animation après un court délai
});












